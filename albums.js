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
  'https://open.spotify.com/album/5GAHLnlyZGLpOSdYI1tQ3R', // The Witcher 3
  'https://open.spotify.com/album/1NCt4W6d8fNGkBQAjXDVrA', // Furi
  'https://open.spotify.com/album/09ixa10YNG75H0HDKbMAiZ', // Assassin's Creed 2
  'https://open.spotify.com/album/48OeUXPCWaqsFNtKr6tqvq', // Rayman Origins
  'https://open.spotify.com/album/1XdgIQg5BoYpPkLTEB1uHp', // Rayman Legends
  'https://open.spotify.com/album/2qNJNe5NdM4SnAqfEtTkiX', // Grow Home
  'https://open.spotify.com/album/4PvakqSTVKDmAj0v0UEuC1', // Monument Valley
  'https://open.spotify.com/album/2NVNyVmPZ9V5vqo8P1umhc', // Monument Valley Forgotten Shores
  'https://open.spotify.com/album/673cuQ8hG3FYLbF1HxHJuc', // Worms 2
];
