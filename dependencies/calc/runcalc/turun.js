const Discord = require("discord.js");
const dungeonxp = require("./dungeonxp.json");
const numberWithCommas = require("./../../../functions/numberWithCommas.js");
exports.run = (message, args, xpleft, level, bot, config, derp) => {
    let finalxptui = Math.round(xpleft/(dungeonxp.tui[0]));
	let finalxptun = Math.round(xpleft/(dungeonxp.tun[0]));
    let finalxptuivip = Math.round(xpleft/(dungeonxp.tui[1]));
    let finalxptunvip = Math.round(xpleft/(dungeonxp.tun[1]));

    const tuxpcalc = new Discord.RichEmbed()
        .setColor("#daa520")
        .setTitle('Runs Calculator')
        .setDescription(`Number of The Underworld runs required to reach level ${parseInt(level)+1} from level ${args[1]}`)
        .setThumbnail(`https://i.imgur.com/B8dDzLN.png`)
        .addField('Total XP needed', `${numberWithCommas(Math.round(xpleft))}`)
        .addField('Insane', `${numberWithCommas(finalxptui)}`, true)
        .addField('Nightmare', `${numberWithCommas(finalxptun)}`, true)
        .addField('Insane (VIP Pass)', `${numberWithCommas(finalxptuivip)}`, true)
		.addField('Nightmare (VIP Pass)', `${numberWithCommas(finalxptunvip)}`, true)
        .setTimestamp()
        .setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL)
    return message.channel.send(tuxpcalc)
};