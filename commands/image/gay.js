exports.start = {
    name: "เกย ์",
    execute: async(client, message) => {
        const Discord = require("discord.js")
        const DIG = require("discord-image-generation");
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Gay().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "gay.png");;
        message.channel.send(attach)

    }
}