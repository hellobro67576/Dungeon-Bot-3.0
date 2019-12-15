const Discord = require("discord.js");
const dungeonxp = require("./dungeonxp.json");
const numberWithCommas = require("./../../../functions/numberWithCommas.js");
exports.run = (message, args, xpleft, level, bot, config, derp) => {
  var finalxpbr = Math.round(xpleft/(dungeonxp.br[2]));    
  var finalxpbrvip = Math.round(xpleft/(dungeonxp.br[3]));
  const brxpcalc = new Discord.RichEmbed()
    .setColor("#daa520")
    .setTitle('Round Calculator')
    .setDescription(`Number of Boss Raid runs required to reach level ${parseInt(level)+1} from level ${args[1]}`)
    .setThumbnail(`https://vignette.wikia.nocookie.net/dungeonquestroblox/images/4/47/RaidKey.png/revision/latest/zoom-crop/width/240/height/240?cb=20191103123705`)
    .addField('Total XP needed', `${numberWithCommas(Math.round(xpleft))}`)
    .addField('Boss Raids', `${numberWithCommas(finalxpbr)}`, true)
    .addField('Boss Raids (VIP Pass)', `${numberWithCommas(finalxpbrvip)}`, true)
    .setTimestamp()
    .setFooter(`• Requested By: ${message.author.tag}`, message.author.avatarURL)
  return message.channel.send(brxpcalc);
};
