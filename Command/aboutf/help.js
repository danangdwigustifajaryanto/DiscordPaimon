const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
exports.run = (client, msg, args) => {

    const exampleEmbed = new MessageEmbed()
    .setColor('#1F1F1F')
    .setTitle("✨ Paimon's Feature ✨")
    .setDescription("***Feature Information***\n> **Registration** \n> ***example***: `!reg` \n> \n> **Your Information**\n> ***example***: `!myinfo`\n> \n> **Music**\n> ***example***: `!music`\n\n***Game Information***\n> **Build Character** \n> ***example***: `!build amber`\n> \n> **Artifact Information**\n> ***example***: `!arti shimenawa`\n> \n> **Talent Farm Today**\n> ***example***: `!today talent`\n> \n> **Weapon Farm Today**\n> ***example***: `!today weapon`\n\n***About***\n> **About Server**\n> ***example***: `!about server`\n> \n> **Credit Paimon**\n> ***example***: `!credit`\n> \n> **Support Paimon**\n> ***example***: `!support`\n\n")
    .setThumbnail(msg.author.avatarURL())
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
    msg.reply({ embeds: [exampleEmbed] });

exports.name = "help";
}