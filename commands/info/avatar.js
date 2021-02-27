module.exports = {
    name: "อวาตาร",
    aliases: ['อวต'],
    execute(message, args) {
        let ping = message.mentions.users.first();
        if(!ping) {
            message.channel.send(message.author.displayAvatarURL())
        } else if(ping) {
            message.channel.send(ping.displayAvatarURL())
        }
    }
}
// This is shortest command