const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

exports.run = (client, msg, args) => {
if (msg.content === "!about server"){
        const exampleEmbed = new MessageEmbed()
        .setTitle(':thought_balloon: About this server :thought_balloon: ')
        .setDescription("Genshination is a server where travelers can gather, share playing experiences, learn about the world of Teyvat and play with other travelers, this server is also monitored by Paimon, so you have to be polite between fellow travelers or Paimon will kick you hehe, but paimon provides a variety of interesting features for travelers just by using the command `!help`. Hopefully travelers feel comfortable, don't hesitate to ask ^^")
        .setFooter({ text: "Genshination",
        iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
        msg.reply({ embeds: [exampleEmbed] });
      }
}

exports.name = "aboutserver";