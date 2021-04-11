exports.start = {
    name: "ส่งผล",
    execute: async(client, message) => {
        const Discord = require("discord.js")
        const DIG = require("discord-image-generation");
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Affect().getImage(avatar);
        let attach = new Discord.MessageAttachment(img, "affect.png");
        message.channel.send(attach)

    }
}