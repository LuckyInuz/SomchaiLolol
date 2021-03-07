const db = require('quick.db')
module.exports = {
    name: 'ปิง',
    aliases: ['ปง'],
    execute(client, message) {
        message.channel.send(`🏓ปิงตอนนี้คือ ${Date.now() - message.createdTimestamp}มิลลิวินาที. ปิงเอพีไอ ${Math.round(client.ws.ping)}มิลลิวินาที`);
    }
    }