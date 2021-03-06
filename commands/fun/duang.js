module.exports = {
    name: 'ดวง',
    aliases: ['ดง'],
    description: 'ดูดวงวันนี้ของคุณ',
    execute: async(client, message) => {
    const { MessageEmbed } = require('discord.js')
    function convertMS( milliseconds ) {
        var day, hour, minute, seconds;
        seconds = Math.floor(milliseconds / 1000);
        minute = Math.floor(seconds / 60);
        seconds = seconds % 60;
        hour = Math.floor(minute / 60);
        minute = minute % 60;
        day = Math.floor(hour / 24);
        hour = hour % 24;
        return {
            day: day,
            hour: hour,
            minute: minute,
            seconds: seconds
        };
    }
        function RANDOM() {
            let banswer = [
                "ดีเยี่ยม!",
                "ดีมาก ๆ",
                "ดี",
                "ปกติ",
                "ค่อนข้างแย่",
                "แย่", 
                "แย่มาก ๆ",
                "นรกชัด ๆ"
            ]
            return banswer[Math.floor(Math.random() * banswer.length)]
        }
        let ms = require('ms')
       let db = require('quick.db')
//check if there is cooldown
	const timeout = 86400000; // 1 days in milliseconds, change to the desired cooldown time, in milliseconds
	const cooldown = await db.fetch(`coolduang_${message.author.id}`);

	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = (timeout - (Date.now() - cooldown));
		var durations =  convertMS(time)
		message.channel.send(`คุณต้องรออีก ${durations.day}วัน ${durations.hour}ชม. ${durations.minute}น. ${durations.seconds}วิ. ก่อนใช่คำสั่งอีกครั้ง!`);
	} else {
        let embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setDescription("🔮 วันนี้ดวงคุณนั้น" + RANDOM())
        .setTimestamp()
        await message.channel.send(embed)
    }
    }
    }
