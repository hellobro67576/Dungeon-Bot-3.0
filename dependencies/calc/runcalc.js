const Discord = require("discord.js");
const fs = require('fs');

const numberWithCommas = require("./../../functions/numberWithCommas.js");

exports.run = (message, args, bot, cmds) => {
    if(args[1] != null && args[2] != null && args[3] != null) {
        var scd = '';
        if (args[4] != null) scd = args[4];
        if(!isNaN(args[2]) && Number(args[2]) >= 0) {
            if(!isNaN(args[1]) && Number(args[1]) >= 0) {
                if(args[1] <= 333) {
                    let level = args[1];
                    let dungeon = [args[3], scd];
                    const dname = dungeon.join('');
                    let levelcalc = Math.round(84*Math.pow(1.13,(level-1)));
                    let currentxp = args[2];
                    let xpleft = levelcalc - currentxp;
                    if (currentxp <= levelcalc) {
                        if (dname == 'dt' || dname == 'deserttemple') bot.commands.get('dtrun').run(message, args, xpleft, level, bot, bot.config, derp);
                        else if (dname == 'wo' || dname == 'winteroutpost') bot.commands.get('worun').run(message, args, xpleft, level, bot, bot.config, derp);
                        else if (dname == 'pi' || dname == 'pirateisland') bot.commands.get('pirun').run(message, args, xpleft, level, bot, bot.config, derp);
                        else if (dname == 'kc' || dname == 'kingscastle') bot.commands.get('kcrun').run(message, args, xpleft, level, bot, bot.config, derp);
                        else if (dname == 'tu' || dname == 'theunderworld') bot.commands.get('turun').run(message, args, xpleft, level, bot, bot.config, derp);
                        else if (dname == 'sp' || dname == 'samuraipalace') bot.commands.get('sprun').run(message, args, xpleft, level, bot, bot.config, derp);
                        else if (dname == 'tc' || dname == 'thecanals') bot.commands.get('tcrun').run(message, args, xpleft, level, bot, bot.config, derp);
                        else if (dname == 'gh' || dname == 'ghastlyharbor') bot.commands.get('ghrun').run(message, args, xpleft, level, bot, bot.config, derp);
                        else if (dname == 'ss' || dname == 'steampunksewers') bot.commands.get('ssrun').run(message, args, xpleft, level, bot, bot.config, derp);
                        else if (dname == 'br' || dname == 'bossraids') bot.commands.get('brrun').execute(message, args, xpleft, level, bot, bot.config, derp);
                        else {
                            const arg3error = new Discord.RichEmbed()
                                .setColor(bot.colors.red_dark)
                                .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                                .setDescription(`:x: **Error** :x:\n\n${message.author.username} the **${args[3]}** Dungeon does not exist.\nPlease enter a valid Dungeon!`)
                                .setTimestamp()
                                .setFooter("Dungeon Quest • Error")
                            return message.channel.send(arg3error);
                        };
                    } else {
                        const Errorembed = new Discord.RichEmbed()
                            .setColor(bot.colors.red_dark)
                            .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                            .setDescription(`:x: **Error** :x:\n\nYour current xp (${numberWithCommas(currentxp)}) cannot be more than the maximum xp (${numberWithCommas(levelcalc)}) of level ${level}`)
                            .setTimestamp()
                            .setFooter("Dungeon Quest • Error")
                          return message.channel.send(Errorembed);
                    };
                } else {
                    const lvlerror = new Discord.RichEmbed()
                        .setColor(bot.colors.red_dark)
                        .setTitle(':x: **Error** :x:')
                        .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                        .setDescription(`${message.author.username}, your level must be lower than **Level 333**`)
                        .setTimestamp()
                        .setFooter("Dungeon Quest • Error")
                    return message.channel.send(lvlerror);
                };
            } else {
                const arg1error = new Discord.RichEmbed()
                    .setColor(bot.colors.red_dark)
                    .setTitle(':x: **Error** :x:')
                    .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                    .setDescription(`${message.author.username}, your input **${args[1]}** has to be a positive integer\nKindly use an integer`)
                    .setTimestamp()
                    .setFooter("Dungeon Quest • Error")
                return message.channel.send(arg1error);
            };
        } else {
            const arg2error = new Discord.RichEmbed()
                .setColor(bot.colors.red_dark)
                .setTitle(':x: **Error** :x:')
                .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
                .setDescription(`${message.author.username}, your input **${args[2]}** has to be a positive integer\nKindly use an integer`)
                .setTimestamp()
                .setFooter("Dungeon Quest • Error")
            return message.channel.send(arg2error);
        };
    } else {
        const arg1error = new Discord.RichEmbed()
            .setColor(bot.colors.red_dark)
            .setTitle(':x: **Error** :x:')
            .setThumbnail('https://media.discordapp.net/attachments/648654014593892369/649501213787684865/DQbot_errror_icon.png')
            .addField(`Error Using ${cmds} Command!`,`**Expected usage:**\n-> ${bot.config.prefix}calc runs [Level] [yourXP] [dungeon] `)
            .setTimestamp()
            .setFooter("Dungeon Quest • Error")
        return message.channel.send(arg1error);
    };
};
