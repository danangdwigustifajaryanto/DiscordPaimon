// var Scraper = require('images-scraper');
// const puppeteer = require('puppeteer');
// const { MessageEmbed } = require('discord.js');

// const google = new Scraper({
//   puppeteer: {
//     headless: true,
//   },

// });


// module.exports.run = async (client, msg, args) => {

// const browser = await puppeteer.launch({
//                   headless: true,
//                   args: ['--no-sandbox','--disable-setuid-sandbox']
// })

// 	const image_query = args.join(' ');
// 	const image_result = await google.scrape(image_query, 1);
// 	if (!image_query) {
// 		msg.reply('Yah paimon tidak dapat menemukan gambar yang ingin traveler cari :(');
// 	} else {
// 			//Embed
// 	const exampleEmbed = new MessageEmbed()
//     .setColor('#1F1F1F')
//     .setTitle(':face_with_monocle: Pencarian Gambar :face_with_monocle:')
//     .setDescription(`Berikut adalah hasil pencarian gambar \nTentang: ${image_query}`)
//     .setImage(image_result[0].url)
//     .setTimestamp()
//     .setFooter({ text: 'Genshination',
//     iconURL: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-2/tray_large.png?41ad332a85dc0a0fbe8c0f922eae5097'});
//     msg.reply({ embeds: [exampleEmbed] });

// 	exports.name = "image";
// 	}
// }
