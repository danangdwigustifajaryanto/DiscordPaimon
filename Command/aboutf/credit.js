const Discord = require("discord.js");
exports.run = (client, msg, args) => {
    const { MessageEmbed } = require('discord.js');
    const exampleEmbed = new MessageEmbed()
    .setColor('#1F1F1F')
    .setTitle(':compass: Paimon Credit :compass:')
    .setDescription("Paimon special only for Genshination server. All image content or information that Paimon provides in this server is the copyright work of ***Hoyoverse***. \n\n***Programmer :*** Nevada\n***Designer :*** Nevada")
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
    msg.reply({ embeds: [exampleEmbed] });
}

exports.name = "credit";