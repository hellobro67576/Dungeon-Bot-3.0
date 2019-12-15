const Discord = require("discord.js");
const dungeonxp = require("./dungeonxp.json");
const numberWithCommas = require("./../../../functions/numberWithCommas.js");
exports.run = (message, args, xpleft, level, bot, config, derp) => {
    let finalxppii = Math.round(xpleft/(dungeonxp.pii[0]));
	let finalxppin = Math.round(xpleft/(dungeonxp.pin[0]));
    let finalxppiivip = Math.round(xpleft/(dungeonxp.pii[1]));
    let finalxppinvip = Math.round(xpleft/(dungeonxp.pin[1]));
    const pixpcalc = new Discord.RichEmbed()
        .setColor("#daa520")
        .setTitle('Runs Calculator')
        .setDescription(`Number of Pirate Island runs required to reach level ${parseInt(level)+1} from level ${args[1]}`)
        .setThumbnail(`https://i.imgur.com/rtLe7vH.png`)
        .addField('Total XP needed', `${numberWithCommas(Math.round(xpleft))}`)
        .addField('Insane', `${numberWithCommas(finalxppii)}`, true)
        .addField('Nightmare', `${numberWithCommas(finalxppin)}`, true)
        .addField('Insane (VIP Pass)', `${numberWithCommas(finalxppiivip)}`, true)
		.addField('Nightmare (VIP Pass)', `${numberWithCommas(finalxppinvip)}`, true)
        .setTimestamp()
        .setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL)
    return message.channel.send(pixpcalc)
};