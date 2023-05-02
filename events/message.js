module.exports = (client, message) => {
  // Ignore all bots
  if (message.author.bot) return;

  if (message.guild) {
    const key = `${message.guild.id}-${message.author.id}`;
    // client.exp.ensure(key, {
    //   user: message.author.id,
    //   guild: message.guild.id,
    //   exp: 0,
    //   level: 0
    // });
    // client.credit.ensure(key, {
    //   user: message.author.id,
    //   guild: message.guild.id,
    //   poly: 0
    // });

    // client.exp.inc(key, "exp");

    // var curLevel;

    // client.config.levels.forEach(level => {
    //   if (client.exp.get(key, "exp") == level.exp){
    //     message.reply(`You've leveled up to level **${level.name}**!`)
    //     curLevel = level.name;
    //     client.exp.set(key, curLevel, "level");
    //   }
    // });

    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(client.config.prefix) !== 0) return;
    // Our standard argument/command name definition.
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);
    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;

    // Run the command
    cmd.run(client, message, args);
  };
}
