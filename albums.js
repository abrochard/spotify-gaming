var albums = [
  'https://open.spotify.com/album/6AvkC0h2TUdX6fpAKtXqYR', // Castlevania Symphone of the Night
  'https://open.spotify.com/album/70kaIuCoHOZ11adVwGQroA', // Sunset Overdrive
  'https://open.spotify.com/album/5LSmyO0hA8dsgk4g2KS2sX', // Sonic Generations Vol. 1
  'https://open.spotify.com/album/7d6hwzyHCXIE3n3y0e3r8m', // Sonic Generations Vol. 2
  'https://open.spotify.com/album/6Rc7rkokin2O1ewp2vBZjt', // Sonic R
  'https://open.spotify.com/album/2CaTyv2PRp5uG5SHIb2tK5', // Mass Effect
  'https://open.spotify.com/album/1AL4h5rN3vis3unZLvKVjm', // Mass Effect 2
  'https://open.spotify.com/album/7fvGyFc1ike0zd2pE7q9lr', // Mass Effect 3
  'https://open.spotify.com/album/2r4a3PREYIRF2QdbcPnrEO', // Bastion
  'https://open.spotify.com/album/3oVKqk9TahxvHpFIUlAEuJ', // Jet Set Radio
  'https://open.spotify.com/album/3YXJBeqOWrKCi3DIDOgJw0', // Jet Set Radio Future
  'https://open.spotify.com/album/0knSmwGyDZvvzg37rhzIpy', // Alex Kidd Vol. 1
  'https://open.spotify.com/album/38PUHL4Ab0rky3W6Lnmp4r', // Out Run Vol. 1
  'https://open.spotify.com/album/0ndOKj9ShVUgDc2UiR8b2M', // Journey
  'https://open.spotify.com/album/63CH3LUNguGmuTG4jKpXAC', // Deus Ex: Human Revolution
  'https://open.spotify.com/album/7us4WRnwvqCE3cppHVNjIu', // FTL
  'https://open.spotify.com/album/6QtCv5E76lUVbXfUFZxLuH', // Fez
  'https://open.spotify.com/album/5Q7I07l5PkrO5nDwepUdNE', // Chrono Trigger
  'https://open.spotify.com/album/4ynYSjDmlRH6tc7hNWuv7J', // Hotline Miami
  'https://open.spotify.com/album/7yRFTXb2wZoxI04MSK54o4', // Hotline Miami
  'https://open.spotify.com/album/0Cqdcsm1RNSme7uDYfKssS', // Hotline Miami
  'https://open.spotify.com/album/0KQyC28P9808r0oKKNgHvp', // Doom
  'https://open.spotify.com/album/4aKKWSgxf7U7FN7njmi4MH', // God of War III
  'https://open.spotify.com/album/7AeuCduXts5efoVLam7dUk', // Uncharted 2
  'https://open.spotify.com/album/2Dc3L17J41tbywnJdJRPi7', // Uncharted 3
  'https://open.spotify.com/album/1M07WV7nZNoqMAturqewUj', // Infamous
  'https://open.spotify.com/album/6b0o0e7p8XQctNZLZHL8VK', // Infamous 2
  'https://open.spotify.com/album/46XBodEMc5dbor2odnjJUq', // Crypt of the Necrodancer
  'https://open.spotify.com/album/3B0PgLmgaW0gJth55ApWbw', // Transistor
  'https://open.spotify.com/album/6XL0i4TCp2D1zDT4EbCCOO', // Rocket League
  'https://open.spotify.com/album/7xPc1OsC2R0siZKMlzRBIo', // Ori and the Blind Forest
  'https://open.spotify.com/album/7fS5tGixMNR7s3G5Eh515y', // Mirror's Edge
  'https://open.spotify.com/album/6EkvqSSh1Hu9n66AJLTkYB', // Mirror's Edge Catalyst
  'https://open.spotify.com/album/1a4TATTxo7fdfqYxn2uMFN', // Super Meat Boy
  'https://open.spotify.com/album/28LnQrJf1iPp3p7bRBt782', // Metroid Anthology
  'https://open.spotify.com/album/1pdM9htaPsGmk7rkpVNEDH', // Batman Arkham Asylum
  'https://open.spotify.com/album/6skLYY2WEVjQ6tvbkSlmTG', // Batman Arkham City
  'https://open.spotify.com/album/7uIV4R3B5L9ZoJ7WM0t67G', // Batman Arkham Origins
  'https://open.spotify.com/album/1SI5srPA0dOzJbRdjz34W6', // Castlevania Curse of Darkness
  'https://open.spotify.com/album/6vHk8R4jcOe0WZnTDDFgXV', // Devil May Cry
  'https://open.spotify.com/album/1RX5xk76MORiIGaz7HhQUp', // Devil May Cry 2
  'https://open.spotify.com/album/0dH0HxdxaVim5YiQ8k6nDm', // Devil May Cry 4
  'https://open.spotify.com/album/1FKr0dY4TzPeJ0m3V5u76k', // DmC
  'https://open.spotify.com/album/2J2XOIDnJSyNko5Vc4GII5', // Prince of Persia Trilogy
  'https://open.spotify.com/album/2AxcQVfBSBQzozMlX8yVxv', // Far Cry 3
  'https://open.spotify.com/album/231L8hGyehsAzmrPrd785m', // Far Cry 3 Blood Dragon
  'https://open.spotify.com/album/19uGvOnAhqEQ7irwCEce99', // The Witcher
  'https://open.spotify.com/album/0dAhuTx13ciZIXgan98X7Z', // The Witcher 2
  'https://open.spotify.com/album/5GAHLnlyZGLpOSdYI1tQ3R', // The Witcher 3
  'https://open.spotify.com/album/1NCt4W6d8fNGkBQAjXDVrA', // Furi
  'https://open.spotify.com/album/09ixa10YNG75H0HDKbMAiZ', // Assassin's Creed 2
  'https://open.spotify.com/album/1qvTY6mcUNAzP9BCABiMIe', // Assassin's Creed Brotherhood
  'https://open.spotify.com/album/4YQsbhCYkpmueqKC4aEn7f', // Assassin's Creed Revelations
  'https://open.spotify.com/album/23aWOneOrCl1KBfDCo2pFy', // Assassin's Creed 3
  'https://open.spotify.com/album/7G0O4t6PMa6bcOLc3KgztU', // Assassin's Creed 4
  'https://open.spotify.com/album/48OeUXPCWaqsFNtKr6tqvq', // Rayman Origins
  'https://open.spotify.com/album/1XdgIQg5BoYpPkLTEB1uHp', // Rayman Legends
  'https://open.spotify.com/album/2qNJNe5NdM4SnAqfEtTkiX', // Grow Home
  'https://open.spotify.com/album/4PvakqSTVKDmAj0v0UEuC1', // Monument Valley
  'https://open.spotify.com/album/2NVNyVmPZ9V5vqo8P1umhc', // Monument Valley Forgotten Shores
  'https://open.spotify.com/album/673cuQ8hG3FYLbF1HxHJuc', // Worms 2
  'https://open.spotify.com/album/5Jyf9nzGcltNocdWYbh0Q1', // Dante's Inferno
  'https://open.spotify.com/album/22H5XKyHXkxHbty4jtBibg', // Red Dead Redemption
  'https://open.spotify.com/album/5cyrfafppjyPgmUr4rbZFq', // Broken Age
  'https://open.spotify.com/album/2F32Xg7gK6iGyqU17Ifijm', // Psychonauts
  'https://open.spotify.com/album/63JTzw7vuxUhhLXYIyRmNN', // Risk of Rain
  'https://open.spotify.com/album/1cVsczQdIhX9Tf2dOMjjvc', // The Binding of Isaac
  'https://open.spotify.com/album/4FZ63qgkr6jLWPKi58Sg0l', // Rogue Legacy
  'https://open.spotify.com/album/6rqgb726zE5CQOcwi30MMQ', // Remember Me
  'https://open.spotify.com/album/3UVyUHogFcjirdS5AsmXzG', // Max Payne 3
  'https://open.spotify.com/album/2WZQRkMkpd8zvu54quUpHD', // Cloudbuilt
  'https://open.spotify.com/album/20tctCeODWwQ0h8TPQZXyb', // Need for Speed: Most Wanted
  'https://open.spotify.com/album/6580JNX7eatcbusHZwTRN3', // Hitman 2
  'https://open.spotify.com/album/1nBrgXq5P8CboSs3YZN6et', // Hitman Contracts
  'https://open.spotify.com/album/3DFCTOiZwQM3WXDOuJhswI', // Hitman Blood Money
  'https://open.spotify.com/album/7j9KRnJVZ860cM5qU7XuKR', // Age of Empires 3
  'https://open.spotify.com/album/3TvvGOz0DPEP0DJWjf6Fyl', // Age of Mythology
  'https://open.spotify.com/album/3g5dU6hefEYef4QAWtwimx', // Lovely Planet
  'https://open.spotify.com/album/7tqcyvjNAziHZYSMXzUPFu', // Diablo II
  'https://open.spotify.com/album/4vxma8UfdSyZbNHU5wpzQc', // Neon Struct
  'https://open.spotify.com/album/6a8Qf1XeKiOTAdSwk3Qa16', // Flower
  'https://open.spotify.com/album/4o2M5oBuy4jjJesyHlgfec', // Zelda - Ocarina of Time
  'https://open.spotify.com/album/358HhLekPvkg13A1dDPfhT', // Hyper Light Drifter
  'https://open.spotify.com/album/2OMhLFqYTFrAzHBwJI8bwM', // Rocketbirds
  'https://open.spotify.com/album/3Z3EhZFG2bXxKP2BF7JbAd', // Injustice: Gods Among Us
  'https://open.spotify.com/album/18Kir7EZdUYWwGxYHhaYmu', // Dragon Age: Origins
  'https://open.spotify.com/album/7KwqcypmfvpVejdUyZTWMX', // Dragon Age: Inquisition
  'https://open.spotify.com/album/4ElpWQqlpCvSznwxK4U35P', // Crysis
  'https://open.spotify.com/album/6uNxILubrUvcyTqG6VuSdk', // Crysis 2
  'https://open.spotify.com/album/2GFFxj8aR2XpwIMYanOPjh', // The Last of Us
  'https://open.spotify.com/album/5zhAb5BiVj4cXCXW760wd4', // Civ Beyond Earth
  'https://open.spotify.com/album/6GSXmRwERX2erR5xuLTajj', // Halo
  'https://open.spotify.com/album/7LAtVqVh3ojtwDNSuEdNn2', // Halo 2 Vol. 1
  'https://open.spotify.com/album/2Ll3uGUqd05Uo0fNrQSh4m', // Halo 2 Vol. 2
  'https://open.spotify.com/album/24umXlor1zlXU0H0xBakqD', // Halo 3
  'https://open.spotify.com/album/1k8JDdearbBEc2DJ48CRvg', // Halo 5
  'https://open.spotify.com/album/7rGidzYxexJJ0OKin1RRHx', // Fallout 4
  'https://open.spotify.com/album/3gWn1tTKgNqlsKG3Pf4RSv', // Splinter Cell Blacklist
  'https://open.spotify.com/album/5QwO3vHUx9DvFPywMXV8nG', // Splinter Cell Conviction
  'https://open.spotify.com/album/4lRMKDrp5k52VVGCio32Op', // Gears of War
  'https://open.spotify.com/album/0dKKlEzO9gwWhD7ag3TUPA', // Gears of War 2
  'https://open.spotify.com/album/5nECmJ9tA2ShMysaJDv8zb', // Gears of War 3
  'https://open.spotify.com/album/4GdoCUNWgsCrN2PJIOn37B', // Gears of War 4
  'https://open.spotify.com/album/4hSZhhZRwFIAqHEWH6oHL5', // Bayonetta
  'https://open.spotify.com/album/163rlW0yY6SUBETXD1tXFs', // Abzu
  'https://open.spotify.com/album/4dZzebB3bTIXLJpTMOSE44', // The Banner Saga
  'https://open.spotify.com/album/24LEhJ8W7c0XQe9rorDuLf', // The Banner Saga 2
  'https://open.spotify.com/album/7CneZnc5pSVscz4QszEGht', // The Talos Principle
  'https://open.spotify.com/album/6SCstolTyQVCCtJEEM6DXR', // Beyond Two Souls
  'https://open.spotify.com/album/0nnAZcUbW3FIa4k6qOby9d', // Darkest Dungeon
  'https://open.spotify.com/album/1907F3tAFEAdpsQIgAYNzJ', // Serious Sam 3
  'https://open.spotify.com/album/1D622TWd7hvxVZicNjVLjl', // WatchDogs
  'https://open.spotify.com/album/5hrEhqDc6sDLMstOBo8jWx', // Fable
  'https://open.spotify.com/album/4sqsrMqFFAGaKuWWdwoekJ', // Fable II
  'https://open.spotify.com/album/1s5GqO8enWc2EmJHhpUWn1', // Resident Evil 5
  'https://open.spotify.com/album/7zINFDX9Xfrfwv8SU4iuIX', // Resident Evil 6
  'https://open.spotify.com/album/45H9DLevekKB41uW23dSBf', // Resident Evil 7
  'https://open.spotify.com/album/031LVeJpGTNHThqRXIHXo9', // Seum
  'https://open.spotify.com/album/4Iwgv9T2tYLu8gd9P6CNBE', // Styx: Shards of Darkness
  'https://open.spotify.com/album/43ZjR5Xf8kHWuCjMhJFZW2', // DuckTales Remastered
  'https://open.spotify.com/album/2Gy2IQbKCWP3ax77OVQk3r', // Child of Light
  'https://open.spotify.com/album/0cjzbuzTJ25svDvGnG077x', // Command & Conquer: Red Alert
  'https://open.spotify.com/album/65d8zcB0uiUE5a2vjLvUNV', // Command & Conquer: Red Alert 2
  'https://open.spotify.com/album/10PtM3eb2EZ2rofbqRzHCt', // Street Fighter 4
  'https://open.spotify.com/album/3tRRbyO3fzaeAUYkIIhG4w', // Darksiders II
  'https://open.spotify.com/album/49yisjohjVCQ8kem7RP0Iq', // Borderlands
  'https://open.spotify.com/album/337mzRS3hivhPRXorHhCB9', // Borderlands 2
  'https://open.spotify.com/album/1muCc0xAE42hkbwhnu4ALc', // Black Mesa
  'https://open.spotify.com/album/319lEniupc0KQ5dKIFqhZV', // Skullgirls
  'https://open.spotify.com/album/3WYLm38N6Ae5PdKWHL6CEz', // Frozen Synapse
  'https://open.spotify.com/album/1dHOm1kmbDBK0JVN6n1dYr', // Grim Fandango
  'https://open.spotify.com/album/0tBFIyFkwg5efxviAyDI0R', // Conker: Live & Reloaded
  'https://open.spotify.com/album/256LVulHWISPd51J9PtoYI', // Unreal Tournament 3
  'https://open.spotify.com/album/5eioYQgcYJOfQhsxFjqV6a', // Trine 2
  'https://open.spotify.com/album/6mdVpHJSE0WGlnN6zd4Ecr', // Valdis Story Abyssal City
  'https://open.spotify.com/album/3Py1GXY1kqQpaEHgpc28Fc', // Turrican Vol. 1
  'https://open.spotify.com/album/0lVTTOGPMnRX2VKHldPu3x', // Turrican Vol. 2
  'https://open.spotify.com/album/4kXG8n2QU60hdyIxXESsGk', // MadWorld
  'https://open.spotify.com/album/47m35vB0lPkf5oFPjQozUz', // BoodBorne
  'https://open.spotify.com/album/68kfltNAnV9VCwH7bEkPMJ', // Metro: Last Light
  'https://open.spotify.com/album/3Nx26K0HGFDzed0EVCcX48', // Stellaris
  'https://open.spotify.com/album/0tmBuZkjQZski3luPJOR9d', // Dustforce
  'https://open.spotify.com/album/3DNHW2ckMRr3v0f7JF3HcR', // Scott Pilgrim vs. the World
  'https://open.spotify.com/album/5ZAaYcFudS0BtKhWJqeMCH', // Horizon Zero Dawn
  'https://open.spotify.com/album/6gocyY7Z5poFOqT5ihhRq8', // Titanfall
  'https://open.spotify.com/album/5TydVczo6Iu2AkY91tvJZ7', // Titanfall 2
  'https://open.spotify.com/album/0E2NQD9WX7g88aWmlKMg0U', // Legend of Heroes: Sora no Kiseki
  'https://open.spotify.com/album/55XE7dHvAkXzEf5rJWuxEh', // Legend of Heroes: Sora no Kiseki 2
  'https://open.spotify.com/album/1vMhK0UKL1EQjZ2Lq1Mh7U', // Legend of Heroes: Sora no Kiseki 3
];
