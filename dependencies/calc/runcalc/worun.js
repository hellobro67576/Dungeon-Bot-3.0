const Discord = require("discord.js");
const dungeonxp = require("./dungeonxp.json");
const numberWithCommas = require("./../../../functions/numberWithCommas.js");

exports.run = (message, args, xpleft, level, bot, config, derp) => {
    let finalxpwoe = Math.round(xpleft/(dungeonxp.woe[0]));
    let finalxpwom = Math.round(xpleft/(dungeonxp.wom[0]));
    let finalxpwoh = Math.round(xpleft/(dungeonxp.woh[0]));
    let finalxpwoi = Math.round(xpleft/(dungeonxp.woi[0]));
    let finalxpwon = Math.round(xpleft/(dungeonxp.won[0]));
    let finalxpwoevip = Math.round(xpleft/(dungeonxp.woe[1]));
    let finalxpwomvip = Math.round(xpleft/(dungeonxp.wom[1]));
    let finalxpwohvip = Math.round(xpleft/(dungeonxp.woh[1]));
    let finalxpwoivip = Math.round(xpleft/(dungeonxp.woi[1]));
    let finalxpwonvip = Math.round(xpleft/(dungeonxp.won[1]));

    const woxpcalc = new Discord.RichEmbed()
        .setColor("#daa520")
        .setTitle('XP Calculator')
        .setDescription(`Number of Winter Outpost runs required to reach level ${parseInt(level)+1} from level ${args[1]}`)
        .setThumbnail(`https://i.imgur.com/ITszQas.png`)
        .addField('Total XP needed', `${numberWithCommas(Math.round(xpleft))}`)
        .addField('Easy', `${numberWithCommas(finalxpwoe)}`, true)
        .addField('Medium', `${numberWithCommas(finalxpwom)}`, true)
        .addField('Hard', `${numberWithCommas(finalxpwoh)}`, true)
        .addField('Insane', `${numberWithCommas(finalxpwoi)}`, true)
        .addField('Nightmare', `${numberWithCommas(finalxpwon)}`, true)
        .addField('Easy (VIP Pass)', `${numberWithCommas(finalxpwoevip)}`, true)
        .addField('Medium (VIP Pass)', `${numberWithCommas(finalxpwomvip)}`, true)
        .addField('Hard (VIP Pass)', `${numberWithCommas(finalxpwohvip)}`, true)
		.addField('Insane (VIP Pass)', `${numberWithCommas(finalxpwoivip)}`, true)
		.addField('Nightmare (VIP Pass)', `${numberWithCommas(finalxpwonvip)}`, true)
        .setTimestamp()
        .setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL);
    return message.channel.send(woxpcalc)
};