const Discord = require("discord.js");
const dungeonxp = require("./dungeonxp.json");
const numberWithCommas = require("./../../../functions/numberWithCommas.js");
exports.run = (message, args, xpleft, level, bot, config, derp) => {
    let finalxpkci = Math.round(xpleft/(dungeonxp.kci[0]));
	let finalxpkcn = Math.round(xpleft/(dungeonxp.kcn[0]));
    let finalxpkcivip = Math.round(xpleft/(dungeonxp.kci[1]));
    let finalxpkcnvip = Math.round(xpleft/(dungeonxp.kcn[1]));

    const kcxpcalc = new Discord.RichEmbed()
        .setColor("#daa520")
        .setTitle('Runs Calculator')
        .setDescription(`Number of Kings Castle runs required to reach level ${parseInt(level)+1} from level ${args[1]}`)
        .setThumbnail(`https://i.imgur.com/r5a49IH.png`)
        .addField('Total XP needed', `${numberWithCommas(Math.round(xpleft))}`)
        .addField('Insane', `${numberWithCommas(finalxpkci)}`, true)
        .addField('Nightmare', `${numberWithCommas(finalxpkcn)}`, true)
        .addField('Insane (VIP Pass)', `${numberWithCommas(finalxpkcivip)}`, true)
		.addField('Nightmare (VIP Pass)', `${numberWithCommas(finalxpkcnvip)}`, true)
        .setTimestamp()
        .setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL)
    return message.channel.send(kcxpcalc)
};