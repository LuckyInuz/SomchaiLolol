exports.start = {
    name: "hitler",
    execute: async(client, message) => {
        const DIG = require("discord-image-generation");
        let avatar = message.author.avatarURL({ dynamic: true, format: 'png' });
        let img = await new DIG.Hitler().getImage(avatar);
        let attach = new MessageAttachment(img, "generated.png");
        message.channel.send(attach)

    }
}