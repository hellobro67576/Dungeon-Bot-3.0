const Discord = require("discord.js");
const dungeonxp = require("./dungeonxp.json");
const numberWithCommas = require("./../../../functions/numberWithCommas.js");
exports.run = (message, args, xpleft, level, bot, config, derp) => {
    let finalxpghi = Math.round(xpleft/(dungeonxp.ghi[0]));
	let finalxpghn = Math.round(xpleft/(dungeonxp.ghn[0]));
    let finalxpghivip = Math.round(xpleft/(dungeonxp.ghi[1]));
    let finalxpghnvip = Math.round(xpleft/(dungeonxp.ghn[1]));

    const ghxpcalc = new Discord.RichEmbed()
        .setColor("#daa520")
        .setTitle('Runs Calculator')
        .setDescription(`Number of Ghastly Harbor runs required to reach level ${parseInt(level)+1} from level ${args[1]}`)
        .setThumbnail(`https://i.imgur.com/LVr8lir.png`)
        .addField('Total XP needed', `${numberWithCommas(Math.round(xpleft))}`)
        .addField('Insane', `${numberWithCommas(finalxpghi)}`, true)
        .addField('Nightmare', `${numberWithCommas(finalxpghn)}`, true)
        .addField('Insane (VIP Pass)', `${numberWithCommas(finalxpghivip)}`, true)
		.addField('Nightmare (VIP Pass)', `${numberWithCommas(finalxpghnvip)}`, true)
        .setTimestamp()
        .setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL)
    return message.channel.send(ghxpcalc)
};