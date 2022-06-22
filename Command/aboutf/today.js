const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
exports.run = (client, msg, args) => {

    //Today Weapon
    if (msg.content === "!today weapon"){ ///Indo 
      const dayOfWeek = new Date().getDay();
      if (dayOfWeek === 1) { //Sening
        const exampleEmbed = new MessageEmbed()
        .setColor('#1F1F1F')
        .setTitle(':crossed_swords: Farming Accension Material Hari Ini :crossed_swords:')
        .setDescription("***Decarabian's***\n> Apprentices Notes \n> Aquila Favonia \n> Cinnabar Spindle \n> Cool Stell \n> Dull Blade \n> Favonious Codex \n> Favonious Sword \n> Ferrous Shadow\n> Magic Guide\n> Mitternachts Waltz\n> Pocket Grimoire\n> Raven Bow\n> Royal Grimoire\n> Royal Longsword\n> Silver Sword\n> Snow-Tombed Starsilver\n> Song of Broken Pines\n> The Alley Flash\n> The Bell\n> The Stringless\n> Viridescent Hunt\n\n***Luminous***\n> Aqua Simulacra\n> Blackliff Agate \n> Blackliff Longsword \n> Blackliff Warbow \n> Cresent Pike \n> Dark Iron Sword\n> Emerald Orb\n> Lion's Roar\n> Lithic Blade\n> Primordial Jade Winged Spear\n> Rust\n> Slingshot\n> Solar Pearl\n> Summit Shaper\n> White Tassel\n> Whiteblind\n\n***Branch of a Distant Sea***\n> Aukomaru \n> Amenoma Kageuchi \n> Everlasting Moonglow \n> Mistsplitter Reforged\n> Oathsworn Eye")
        .setTimestamp()
      .setFooter({ text: 'Genshination',
      iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
        msg.reply({ embeds: [exampleEmbed] });
      } else if (dayOfWeek === 2) { //Selasa
        const exampleEmbed = new MessageEmbed()
        .setColor('#1F1F1F')
        .setTitle(':crossed_swords: Farming Accension Material Hari Ini :crossed_swords:')
        .setDescription("***Boreal Wolf's***\n> Bloodtained Greatsword \n> Deathmatch \n> Dodoco Tales \n> Dragonspine Spear \n> Elegy for the End \n> Harbringer of Dawn \n> Hunter's Bow \n> Old Merc's Pal\n> Sacrificial Bow\n> Sacrificial Greatsword\n> Seasoned Hunter\n> Sharp Shooter\n> Skyward Atlas\n> Skyward Blade\n> Skyward Harp\n> Skyward Pride\n> Sword of Decension\n> The Black Sword\n> The Flute\n> Widsith\n> Thrilling Tales\n> Water Greatsword\n> Wine and Song\n\n***Mist Veiled***\n> Blackliff Pole\n> Blackliff Slasher \n> Clamity Queller \n> Debate Club \n> Dragon's Bane \n> Eye of perception\n> Fillet Blade\n> Halberd\n> Messenger\n> Primordial Jade Cutter\n> Prototype Amber\n> Prototype Cresent\n> The Unforged\n> Twin Nephriten\n\n***Narukami's***\n> Hamayumi \n> Haran Geppaku Futsu \n> Katsuragikiri Nagamasa \n> Mouun's Moon\n> Predator\n> Redhorn Stonethreser\n> Thundering Pulse")
        .setTimestamp()
      .setFooter({ text: 'Genshination',
      iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
        msg.reply({ embeds: [exampleEmbed] });
      } else if (dayOfWeek === 3) { //Rabu
        const exampleEmbed = new MessageEmbed()
        .setColor('#1F1F1F')
        .setTitle(':crossed_swords: Farming Accension Material Hari Ini :crossed_swords:')
        .setDescription("***Fetther's of The dandelion***\n> Alley Hunter \n> Amos Bow \n> Protector \n> Favonious Greatsword \n> Favonious Lance \n> Favonious Warbow \n> Festering Desire \n> Freedom Sworn\n> Frostbrearer\n> Iron Point\n> Otherwordly Story\n> Recurve Bow\n> Royal Bow\n> Royal Greatsword\n> Sacrificial Fragment\n> Sacrificial Sword\n> Skyward Spine\n> Traveler's Handy\n> White Iron Greatsword\n> Windblume Ode\n> Wolf's Gravestone\n\n***Aerosiderite***\n> Black Tassel\n> Compound Bow \n> Fadding Twilight \n> Iron Sting \n> Lithic Spear \n> Luxurious Sealord\n> Mappa Mare\n> Memorry of Dust\n> Prototype Archaic\n> Prototype Starglitter\n> Serpent Spine\n> Skyrider Greatsword\n> Skyrider Sword\n> Staff of Homa\n> Vortex Vanquisher\n\n***Mask***\n> The Catch \n> Engulfing Lightning\n> Kagura's Verity \n> Kitain Cross Spear\n> Polar Star\n> Wavebreaker's Fin")
        .setTimestamp()
      .setFooter({ text: 'Genshination',
      iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
        msg.reply({ embeds: [exampleEmbed] });
      } else if (dayOfWeek === 4) { //Kamis
        const exampleEmbed = new MessageEmbed()
        .setColor('#1F1F1F')
        .setTitle(':crossed_swords: Farming Accension Material Hari Ini :crossed_swords:')
        .setDescription("***Decarabian's***\n> Apprentices Notes \n> Aquila Favonia \n> Cinnabar Spindle \n> Cool Stell \n> Dull Blade \n> Favonious Codex \n> Favonious Sword \n> Ferrous Shadow\n> Magic Guide\n> Mitternachts Waltz\n> Pocket Grimoire\n> Raven Bow\n> Royal Grimoire\n> Royal Longsword\n> Silver Sword\n> Snow-Tombed Starsilver\n> Song of Broken Pines\n> The Alley Flash\n> The Bell\n> The Stringless\n> Viridescent Hunt\n\n***Luminous***\n> Aqua Simulacra\n> Blackliff Agate \n> Blackliff Longsword \n> Blackliff Warbow \n> Cresent Pike \n> Dark Iron Sword\n> Emerald Orb\n> Lion's Roar\n> Lithic Blade\n> Primordial Jade Winged Spear\n> Rust\n> Slingshot\n> Solar Pearl\n> Summit Shaper\n> White Tassel\n> Whiteblind\n\n***Branch of a Distant Sea***\n> Aukomaru \n> Amenoma Kageuchi \n> Everlasting Moonglow \n> Mistsplitter Reforged\n> Oathsworn Eye")
        .setTimestamp()
      .setFooter({ text: 'Genshination',
      iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
        msg.reply({ embeds: [exampleEmbed] });
      } else if (dayOfWeek === 5) { //Jumat
        const exampleEmbed = new MessageEmbed()
        .setColor('#1F1F1F')
        .setTitle(':crossed_swords: Farming Accension Material Hari Ini :crossed_swords:')
        .setDescription("***Boreal Wolf's***\n> Bloodtained Greatsword \n> Deathmatch \n> Dodoco Tales \n> Dragonspine Spear \n> Elegy for the End \n> Harbringer of Dawn \n> Hunter's Bow \n> Old Merc's Pal\n> Sacrificial Bow\n> Sacrificial Greatsword\n> Seasoned Hunter\n> Sharp Shooter\n> Skyward Atlas\n> Skyward Blade\n> Skyward Harp\n> Skyward Pride\n> Sword of Decension\n> The Black Sword\n> The Flute\n> Widsith\n> Thrilling Tales\n> Water Greatsword\n> Wine and Song\n\n***Mist Veiled***\n> Blackliff Pole\n> Blackliff Slasher \n> Clamity Queller \n> Debate Club \n> Dragon's Bane \n> Eye of perception\n> Fillet Blade\n> Halberd\n> Messenger\n> Primordial Jade Cutter\n> Prototype Amber\n> Prototype Cresent\n> The Unforged\n> Twin Nephriten\n\n***Narukami's***\n> Hamayumi \n> Haran Geppaku Futsu \n> Katsuragikiri Nagamasa \n> Mouun's Moon\n> Predator\n> Redhorn Stonethreser\n> Thundering Pulse")
        .setTimestamp()
      .setFooter({ text: 'Genshination',
      iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
        msg.reply({ embeds: [exampleEmbed] });
      } else if (dayOfWeek === 6) { //Sabtu
        const exampleEmbed = new MessageEmbed()
        .setColor('#1F1F1F')
        .setTitle(':crossed_swords: Farming Accension Material Hari Ini :crossed_swords:')
        .setDescription("***Fetther's of The dandelion***\n> Alley Hunter \n> Amos Bow \n> Protector \n> Favonious Greatsword \n> Favonious Lance \n> Favonious Warbow \n> Festering Desire \n> Freedom Sworn\n> Frostbrearer\n> Iron Point\n> Otherwordly Story\n> Recurve Bow\n> Royal Bow\n> Royal Greatsword\n> Sacrificial Fragment\n> Sacrificial Sword\n> Skyward Spine\n> Traveler's Handy\n> White Iron Greatsword\n> Windblume Ode\n> Wolf's Gravestone\n\n***Aerosiderite***\n> Black Tassel\n> Compound Bow \n> Fadding Twilight \n> Iron Sting \n> Lithic Spear \n> Luxurious Sealord\n> Mappa Mare\n> Memorry of Dust\n> Prototype Archaic\n> Prototype Starglitter\n> Serpent Spine\n> Skyrider Greatsword\n> Skyrider Sword\n> Staff of Homa\n> Vortex Vanquisher\n\n***Mask***\n> The Catch \n> Engulfing Lightning\n> Kagura's Verity \n> Kitain Cross Spear\n> Polar Star\n> Wavebreaker's Fin")
        .setTimestamp()
      .setFooter({ text: 'Genshination',
      iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
        msg.reply({ embeds: [exampleEmbed] });
      } else if (dayOfWeek === 0) { //Minggu
        const exampleEmbed = new MessageEmbed()
        .setColor('#1F1F1F')
        .setTitle(':crossed_swords: Farming Accension Material Hari Ini :crossed_swords:')
        .setDescription("Semua bisa farming di hari minggu traveler :)")
        .setTimestamp()
      .setFooter({ text: 'Genshination',
      iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
        msg.reply({ embeds: [exampleEmbed] });
      }




    } else if (msg.content === "!today talent"){ ///Talent
      const dayOfWeek = new Date().getDay();
      if (dayOfWeek === 1) { //Sening/Kamis
        const exampleEmbed = new MessageEmbed()
        .setColor('#1F1F1F')
        .setTitle(':white_sun_cloud: Farming Talent Hari Ini :white_sun_cloud: ')
        .setDescription("***Freedom***\n> Amber \n> Barbara \n> Klee \n> Sucrose \n> Traveler Geo/Anemo \n > Childe \n> Klee \n> Diona\n\n***Prosperity***\n> Yelan \n> Keqing \n> Ningguang \n> Qiqi \n> Shenhe \n> Xiao\n\n***Transience***\n> Electro Traveler \n> Kokomi \n> Thoma \n> Yoimiya")
        .setThumbnail(msg.author.avatarURL())
        .setTimestamp()
      .setFooter({ text: 'Genshination',
      iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
        msg.reply({ embeds: [exampleEmbed] });
      } else if (dayOfWeek === 2) { //Sening/Kamis
        const exampleEmbed = new MessageEmbed()
        .setColor('#1F1F1F')
        .setTitle(':white_sun_cloud: Farming Talent Hari Ini :white_sun_cloud: ')
        .setDescription("***Resistance***\n> Bennett \n> Diluc \n> Eula \n> Jean \n> Mona \n> Noelle \n> Razor\n\n***Diligence***\n> Chongyun \n> Ganyu \n> Hu-Tao \n> Kazuha \n> Xiangling \n> Yun-Jin\n\n***Elegance***\n> Ayaka \n> Ayato \n> Itto \n> Kujou-Sara")
        .setThumbnail(msg.author.avatarURL())
        .setTimestamp()
      .setFooter({ text: 'Genshination',
      iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
        msg.reply({ embeds: [exampleEmbed] });
      } else if (dayOfWeek === 3) { //Sening/Kamis
        const exampleEmbed = new MessageEmbed()
        .setColor('#1F1F1F')
        .setTitle(':white_sun_cloud: Farming Talent Hari Ini :white_sun_cloud: ')
        .setDescription("***Ballad***\n> Albedo \n> Fischl \n> Kaeya \n> Lisa \n> Rosaria \n> Venti\n\n***Gold***\n> Beidou \n> Xingqiu \n> Xinyan \n> Yanfei \n> Zhongli\n\n***Light***\n> Gorou\n> Raiden Shogun\n> Sayu \n> Yae Miko")
        .setThumbnail(msg.author.avatarURL())
        .setTimestamp()
      .setFooter({ text: 'Genshination',
      iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
        msg.reply({ embeds: [exampleEmbed] });
      } else if (dayOfWeek === 4) { //Sening/Kamis
        const exampleEmbed = new MessageEmbed()
        .setColor('#1F1F1F')
        .setTitle(':white_sun_cloud: Farming Talent Hari Ini :white_sun_cloud: ')
        .setDescription("***Freedom***\n> Amber \n> Barbara \n> Klee \n> Sucrose \n> Traveler Geo/Anemo \n >Childe \n> Klee \n> Diona\n\n***Prosperity***\n> Yelan \n> Keqing \n> Ningguang \n> Qiqi \n> Shenhe \n> Xiao\n\n***Transience***\n> Electro Traveler \n> Kokomi \n> Thoma \n> Yoimiya")
        .setThumbnail(msg.author.avatarURL())
        .setTimestamp()
      .setFooter({ text: 'Genshination',
      iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
        msg.reply({ embeds: [exampleEmbed] });
      } else if (dayOfWeek === 5) { //Sening/Kamis
        const exampleEmbed = new MessageEmbed()
        .setColor('#1F1F1F')
        .setTitle(':white_sun_cloud: Farming Talent Hari Ini :white_sun_cloud: ')
        .setDescription("***Resistance***\n> Bennett \n> Diluc \n> Eula \n> Jean \n> Mona \n> Noelle \n> Razor\n\n***Diligence***\n> Chongyun \n> Ganyu \n> Hu-Tao \n> Kazuha \n> Xiangling \n> Yun-Jin\n\n***Elegance***\n> Ayaka \n> Ayato \n> Itto \n> Kujou-Sara")
        .setThumbnail(msg.author.avatarURL())
        .setTimestamp()
      .setFooter({ text: 'Genshination',
      iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
        msg.reply({ embeds: [exampleEmbed] });
      } else if (dayOfWeek === 6) { //Sening/Kamis
        const exampleEmbed = new MessageEmbed()
        .setColor('#1F1F1F')
        .setTitle(':white_sun_cloud: Farming Talent Hari Ini :white_sun_cloud: ')
        .setDescription("***Ballad***\n> Albedo \n> Fischl \n> Kaeya \n> Lisa \n> Rosaria \n> Venti\n\n***Gold***\n> Beidou \n> Xingqiu \n> Xinyan \n> Yanfei \n> Zhongli\n\n***Light***\n> Gorou\n> Raiden Shogun\n> Sayu \n> Yae Miko")
        .setThumbnail(msg.author.avatarURL())
        .setTimestamp()
      .setFooter({ text: 'Genshination',
      iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
        msg.reply({ embeds: [exampleEmbed] });
      } else if (dayOfWeek === 0) {
        const exampleEmbed = new MessageEmbed()
        .setColor('#1F1F1F')
        .setTitle(':white_sun_cloud: Farming Talent Hari Ini :white_sun_cloud: ')
        .setDescription("Semua bisa farming di hari minggu traveler :)")
        .setTimestamp()
      .setFooter({ text: 'Genshination',
      iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
        msg.reply({ embeds: [exampleEmbed] });
      }
  }
    
      exports.name = "daily";
  }