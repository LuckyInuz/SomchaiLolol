exports.start = {
    name: "ทริกเกอร์",
    execute: async(client, message) => {
        const Discord = require("discord.js")
        const DIG = require("discord-image-generation");
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Triggered().getImage(avatar);
        let attach = new Discord.MessageAttachment(img, "triggered.gif");
        message.channel.send(attach)

    }
}