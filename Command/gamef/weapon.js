const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
exports.run = (client, msg, args) => {

    if (msg.content === "!weapon sacrificial sword") { //albedo
      const exampleEmbed = new MessageEmbed()
      .addField(":crossed_swords:  Weapon Information :crossed_swords:", "Paimon ready for `!help` >.<", true)
      .setImage('https://drive.google.com/uc?id=1_XR15reSJfxbZRmYYD8AzUjFbJdNfKsy')
      .setTimestamp()
      .setFooter({ text: 'Genshination',
      iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
    msg.reply({ embeds: [exampleEmbed] });
    }
//   ------ BUILD EXPORT ----
    exports.name = "build";
} 