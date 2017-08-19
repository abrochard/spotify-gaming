import urllib.request
import re
import os.path
import json

HEADERS = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'

def format_destination(album_id):
    return 'covers/' + album_id + '.jpg'
    
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
        req = urllib.request.Request(
            self.url, 
            data=None, 
            headers={
                'User-Agent': HEADERS
            }
        )
    
        custom_req=urllib.request.urlopen(req)
        content=custom_req.read().decode('utf-8')
        custom_req.close()
    
        match = re.findall('<img id="cover-img" src="(.*)" alt="(.*)" />', content)
        if len(match) > 0:
            self.cover = match[0][0]
            self.title = match[0][1]
        
    def download_cover(self):
        urllib.request.urlretrieve(self.cover, format_destination(self.id))
        
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
    req = urllib.request.Request(
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
    output = 'var albums = ['
    output += ','.join(albums)
    output += '];'
    f = open('albums.js', 'w')
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
