const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

exports.run = (client, msg, args) => {
    if (msg.content === "!tentang server"){
        const exampleEmbed = new MessageEmbed()
        .setTitle(':thought_balloon: Tentang server Genshination :thought_balloon: ')
        .setDescription("Genshination adalah server tempat berkumpulnya para traveler, disini para traveler dapat berbagi pengalaman bermain, belajar seputar dunia teyvat dan bermain bersama traveler lain, server ini juga dijaga oleh paimon loh, jagi jangan aneh-aneh ya, harus sopan antar sesama traveler atau nanti paimon bisa mengeluarkan kalian hehe, tapi paimon baik kok, paimon menyediakan berbagai fitur menarik bagi traveler hanya dengan menggunakan command `!bantu`. Semoga betah traveler jangan sungkan untuk bertanya ya ^^")
        .setFooter({ text: "Genshination",
        iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
        msg.reply({ embeds: [exampleEmbed] });
      }
}

exports.name = "tentangserver";