
module.exports = {
    name: 'เล่น',
    aliases: ['ลพ'],
    description: 'เล่นเพลง',
    usage: "[เพลง]",
    execute: async(client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
        const music = args.join(" ")
        client.distube.play(message, music)
    }
            
    }