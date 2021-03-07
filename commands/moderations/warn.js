const punishments = require('../../model/mod');

module.exports = {
    name: "เตือน",
    usage: "[คนที่จะเตือน]",
    execute: async (client, message, args) => {
    let toWarn = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

    if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.reply("คุณไม่มีสิทธิเตือนคนอื่น")
    }

    if(message.author.id === toWarn.id) return;

    let reason = args.slice(1).join(" ")

    if(!reason) return message.channel.send('ไม่มีเหตุผล')

    let data = await punishments.findOne({
        GuildID: message.guild.id,
        UserID: toWarn.id
    });

    if(data) {
        data.Punishments.unshift({
            PunishType: 'Warn',
            Moderator: message.author.id,
            Reason: reason,
        });
        data.save();

        message.channel.send(`เตือน ${toWarn} เพราะ \`${reason}\``)
    } else if (!data) {
        let newData = new punishments({
            GuildID: message.guild.id,
            UserID: toWarn.id,
            Punishments: [{
                PunishType: 'Warn',
                Moderator: message.author.id,
                Reason: reason,
            }, ],
        });
        newData.save();

        message.channel.send(`เตือน ${toWarn} เพราะ \`${reason}\``)
    }


}
}