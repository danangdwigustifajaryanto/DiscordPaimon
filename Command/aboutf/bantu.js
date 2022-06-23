const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
exports.run = (client, msg, args) => {

    const exampleEmbed = new MessageEmbed()
    .setColor('#1F1F1F')
    .setTitle('✨ Daftar Fitur Paimon ✨')
    .setDescription("***Informasi Fitur***\n> **Registrasi** \n> ***contoh***: `!reghelp` \n> \n> **Cek data diri**\n> ***contoh***: `!myinfo`\n> \n> **Music**\n> ***contoh***: `!music`\n\n***Informasi Game***\n> **Build Karakter** \n> ***contoh***: `!build amber`\n> \n> **Informasi Artefak**\n> ***contoh***: `!arti shimenawa`\n> \n> **Talent hari ini**\n> ***contoh***: `!today talent`\n> \n> **Weapon hari ini**\n> ***example***: `!today weapon`\n\n***Tentang***\n> **Tentang Server**\n> ***contoh***: `!tentang server`\n> \n> **Credit Paimon**\n> ***contoh***: `!credit`\n> \n> **Support Paimon**\n> ***contoh***: `!support`\n\n")
    .setThumbnail(msg.author.avatarURL())
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
    msg.reply({ embeds: [exampleEmbed] });

exports.name = "bantu";
}
