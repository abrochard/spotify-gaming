var albums = [
  'https://open.spotify.com/album/6AvkC0h2TUdX6fpAKtXqYR', // Castlevania Symphone of the Night
  'https://open.spotify.com/album/70kaIuCoHOZ11adVwGQroA', // Sunset Overdrive
  'https://open.spotify.com/album/5LSmyO0hA8dsgk4g2KS2sX', // Sonic Generations Vol. 1
  'https://open.spotify.com/album/7d6hwzyHCXIE3n3y0e3r8m', // Sonic Generations Vol. 2
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
];
