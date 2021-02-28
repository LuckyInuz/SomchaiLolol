module.exports = {
    name: "อวาตาร",
    aliases: ['อวต'],
    description: "แสดงโปรไฟล์ผู้ใช้",
    usage: "<ผู้ใช้>",
    execute(client, message, args) {
        let ping = message.mentions.users.first();
        if(!ping) {
            message.channel.send(message.author.displayAvatarURL())
        } else if(ping) {
            message.channel.send(ping.displayAvatarURL())
        }
    }
}
// This is shortest command