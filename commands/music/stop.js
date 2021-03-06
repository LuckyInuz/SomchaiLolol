
module.exports = {
    name: 'หยุด',
    aliases: ['หย'],
    description: 'หยุดเพลง',
    execute: async(client, message) => {
        if (!message.member.voice.channel) return message.channel.send('คุณต้องอยู่ในห้องเสียง');
        let queue = await client.distube.getQueue(message);

        if(queue) {
            client.distube.stop(message)
    
            message.channel.send('เสร็จสิ้น')
        } else if (!queue) {
            return
        };
    }
            
    }