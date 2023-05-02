const Discord = require("discord.js");
exports.run = (client, message, args) => {

    const LFG_ROLE = "455117185090846720";

    if (args[0] == "-c") {
        if (message.member.roles.has(LFG_ROLE)) {
            message.channel.send(`Yay, you already have the LFG role!`);
        } else {
            message.channel.send(`Nope, you don't have the LFG role!`);
        }
    }
    
    if (args[0] == "-a") {
        message.member.addRole(LFG_ROLE).catch(console.error);
    }

    if (args[0] == "-r") {
        message.member.removeRole(LFG_ROLE).catch(console.error);
    }

}
