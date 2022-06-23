const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
exports.run = (client, msg, args) => {
    const exampleEmbed = new MessageEmbed()
    .addField(":hatching_chick: Tutorial Registrasi :hatching_chick:", "Halo traveler, berikut adalah cara register^^ \nBagaimana ? mudah bukan ><", true)
    .setImage('https://drive.google.com/uc?id=18stgEscuuv0j2fZMHkQpadjJasMWhIF6')
    .setTimestamp()
    .setFooter({ text: 'Genshination',
    iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
    msg.reply({ embeds: [exampleEmbed] });
    exports.name = "reg";
} 
