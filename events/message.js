const Discord = require('discord.js');
const fs = require('fs');

module.exports = (bot, message) => {
  if (message.author.bot) return;
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: bot.config.prefix
    };
  };
  let prefix = prefixes[message.channel.guild.id].prefixes;
  if (!message.content.toLowerCase().startsWith(prefix)) return;
  let args = message.content.toLowerCase().slice(prefix.length).trim().split(' ');
  let cmd = bot.commands.get(args[0].toLowerCase());
  let cmds = args.shift().toLowerCase();
  if (cmd == undefined) return;
  cmd.run(args, message, bot, cmds);
};