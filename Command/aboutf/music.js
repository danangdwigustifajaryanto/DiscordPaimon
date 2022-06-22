const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
exports.run = (client, msg, args) => {
    const exampleEmbed = new MessageEmbed()
    .setColor('#1F1F1F')
    .setTitle(':musical_note: Paimon Music Bot :musical_note:')
    .setDescription("> **Info diputar** \n> ***example***: `/info` \n> \n> **Pause**\n> ***contoh***: `/pause`\n> \n> **Play menggunakan link**\n> ***contoh***: `/play song`\n> \n> **Play link playlist**\n> ***contoh***: `/play playlist`\n> \n> **Play menggunakan pencarian**\n> ***contoh***: `/play search`\n> \n> **Tampilkan antrian**\n> ***contoh***: `/queue`\n> \n> **Berhenti dan keluar**\n> ***contoh***: `/quit`\n> \n> **Resume**\n> ***contoh***: `/resume`\n> \n> **Acak antrian**\n> ***contoh***: `/shuffle`\n> \n> **Skip**\n> ***contoh***: `/skip`\n> \n> **Skip ke lagu lain**\n> ***contoh***: `/skip to`")
    .setThumbnail(msg.author.avatarURL())
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
    msg.reply({ embeds: [exampleEmbed] });
    exports.name = "music";
} 