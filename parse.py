import requests
import re
import os.path
import json

HEADERS = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'

def format_destination(album_id):
    return 'public/covers/' + album_id + '.jpg'

def parse_id(url):
    s = url.split('/')
    return s[-1]

class Album():
    def __init__(self, url):
        self.url = url
        self.id = ''
        self.cover = ''
        self.title = ''
        self.id = parse_id(self.url)
        self.download_info()

    def download_info(self):
        req = requests.get(
            self.url,
            data=None,
            headers={
                'User-Agent': HEADERS
            }
        )

        content = str(req.content)

        # get cover url
        match = re.findall('background-image:url\(//i.scdn.co/image/([0-9a-z]+)\)', content)
        self.cover = 'http://i.scdn.co/image/' + match[0]

        # get title
        match = re.findall('<meta property="twitter:title" content="([^"]+)">', content)
        self.title = match[0]

    def download_cover(self):
        self.download_info()
        r = requests.get(self.cover, stream=True)
        if r.status_code == 200:
            with open(format_destination(self.id), 'wb') as f:
                for chunk in r:
                    f.write(chunk)

    def to_json(self):
        d = {'url':self.url, 'id': self.id, 'cover': self.cover, 'title': self.title}
        return json.dumps(d)

def parse_list():
    l = []
    f = open('albums.txt', 'r')
    for line in f.readlines():
        match = line.split(' ')
        if len(match) > 0:
            l.append(match[0])
    f.close()
    return l

def get_content(url):
    req = requests.get(
        url,
        data=None,
        headers={
            'User-Agent': HEADERS
        }
    )

    custom_req=urllib.request.urlopen(req)
    content=custom_req.read().decode('utf-8')
    custom_req.close()
    return content

def save_albums(albums):
    output = '['
    output += ','.join(albums)
    output += ']'
    f = open('albums.json', 'w')
    f.write(output)
    f.close()

urls = parse_list()
total = str(len(urls))
count = 0
albums = []
for url in urls:
    a = Album(url)
    id = parse_id(url)
    if not os.path.isfile(format_destination(id)):
        a.download_cover()
    count += 1
    print(str(count) + '/' + total)
    albums.append(a.to_json())
save_albums(albums)
