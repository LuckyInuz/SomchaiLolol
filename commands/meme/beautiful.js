exports.start = {
    name: "สวย",
    execute: async(client, message) => {
        const Discord = require("discord.js")
        const DIG = require("discord-image-generation");
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Beautiful().getImage(avatar);
        let attach = new Discord.MessageAttachment(img, "generated.png");
        message.channel.send(attach)

    }
}