
module.exports = {
    name: 'ข้าม',
    aliases: ['ข'],
    description: 'ข้ามเพลง',
    execute: async(client, message) => {
        if (!message.member.voice.channel) return message.channel.send('ต้องอยู่ในห้องเสียง');
        let queue = await client.distube.getQueue(message);

        if(queue) {
            client.distube.skip(message)
    
            message.channel.send('เสร็จสิ้น')
        } else if (!queue) {
            return
        };
    }
            
    }