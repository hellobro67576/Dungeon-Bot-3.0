const Discord = require("discord.js");
const dungeonxp = require("./dungeonxp.json");
const numberWithCommas = require("./../../../functions/numberWithCommas.js");
exports.run = (message, args, xpleft, level, bot, config, derp) => {
    let finalxpspi = Math.round(xpleft/(dungeonxp.spi[0]));
	let finalxpspn = Math.round(xpleft/(dungeonxp.spn[0]));
    let finalxpspivip = Math.round(xpleft/(dungeonxp.spi[1]));
    let finalxpspnvip = Math.round(xpleft/(dungeonxp.spn[1]));

    const spxpcalc = new Discord.RichEmbed()
        .setColor("#daa520")
        .setTitle('Runs Calculator')
        .setDescription(`Number of Samurai Palace runs required to reach level ${parseInt(level)+1} from level ${args[1]}`)
        .setThumbnail(`https://i.imgur.com/e0tlfOu.png`)
        .addField('Total XP needed', `${numberWithCommas(Math.round(xpleft))}`)
        .addField('Insane', `${numberWithCommas(finalxpspi)}`, true)
        .addField('Nightmare', `${numberWithCommas(finalxpspn)}`, true)
        .addField('Insane (VIP Pass)', `${numberWithCommas(finalxpspivip)}`, true)
		.addField('Nightmare (VIP Pass)', `${numberWithCommas(finalxpspnvip)}`, true)
        .setTimestamp()
        .setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL)
    return message.channel.send(spxpcalc)
};