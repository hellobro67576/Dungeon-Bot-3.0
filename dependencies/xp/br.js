const Discord = require("discord.js");
const commas = require("./../../functions/numberWithCommas.js");
const dungeonxp = require("./../calc/runcalc/dungeonxp.json");

const brxpembed = new Discord.RichEmbed()
	.setTitle("Boss Raids")
	.setDescription("Xp gained Boss Raids in one run.")
	.setThumbnail(`https://i.imgur.com/VoERvPI.png`)
	.addField('Tier 1-12', commas(dungeonxp.br[0]), true)
	.addField('Tier 1-12 (VIP Pass)', commas(dungeonxp.br[1]), true)
	.addField('Tier 13-20', commas(dungeonxp.br[2]),true)
	.addField('Tier 13-20 (VIP Pass)', commas(dungeonxp.br[3]), true);

exports.run = (message, bot) => {
	brxpembed.setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL)
	.setColor(bot.colors.gold);
	message.channel.send(brxpembed);
};