exports.start = {
    name: "สีตรงกันข้าม",
    execute: async(client, message) => {
        const Discord = require("discord.js")
        const DIG = require("discord-image-generation");
        let avatar = message.author.AvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Invert().getImage(avatar, 43)
        let attach = new Discord.MessageAttachment(img, "invert.png");;
        message.channel.send(attach)
        console.log(attach)
    }
}