exports.start = {
    name: "เอ็มแอนด์เอ็ม",
    execute: async(client, message) => {
        const Discord = require("discord.js")
        const DIG = require("discord-image-generation");
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Mms().getImage(avatar);
        let attach = new Discord.MessageAttachment(img, "generated.png");
        message.channel.send(attach)

    }
}