module.exports = {
    name: 'รัก',
    aliases: ['ร'],
    description: 'ดูคำสั่งทั้งหมด',
    execute: async(message, args) => {
        let ping = message.mentions.users.first();
        if(!ping) return;
        message.delete()
        await message.channel.send(`${message.author.username} นั้นรัก ${ping.username}`)
    }

    }