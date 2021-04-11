exports.start = {
    name: "นำเสนอ",
    execute: async(client, message, args) => {
        const Discord = require("discord.js")
        const DIG = require("discord-image-generation");
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let arg = args.join(" ")
        let img = await new DIG.LisaPresentation().getImage(arg);
        let attach = new Discord.MessageAttachment(img, "generated.png");
        message.channel.send(attach)

    }
}