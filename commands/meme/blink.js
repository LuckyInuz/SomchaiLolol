exports.start = {
    name: "บลิ้งก์",
    args: true,
    execute: async(client, message, args) => {
        const Discord = require("discord.js")
        const DIG = require("discord-image-generation");
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        const user = message.mentions.users.first();
        let avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Blink().getImage(avatar, avatar2);
        let attach = new Discord.MessageAttachment(img, "blink.gif");
        message.channel.send(attach)

    }
}