exports.start = {
    name: "ดีลีท",
    execute: async(client, message) => {
        const Discord = require("discord.js")
const DIG = require("discord-image-generation");
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Delete().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "delete.png");;
        message.channel.send(attach)

    }
}