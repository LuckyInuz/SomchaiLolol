exports.start = {
    name: "โมษณา",
    execute: async(client, message) => {
        const Discord = require("discord.js")
        const DIGG = require("discord-image-generation");
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIGG.Ad().getImage(avatar);
        let attach = new Discord.MessageAttachment(img, "ad.png");
        message.channel.send(attach)

    }
}