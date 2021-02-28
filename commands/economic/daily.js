module.exports = {
    name: 'วัน',
    aliases: ['ปจว'],
    description: 'ได้รับเงินประจำวัน',
    execute: async(client, message) => {
        var member = message.author;
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
        //Cooldowns code thanks to https://support.glitch.com/u/Callum-OKane
let ms = require('ms')
let db = require('quick.db')
//check if there is cooldown
	const timeout = 86400000; // 1 days in milliseconds, change to the desired cooldown time, in milliseconds
	const cooldown = await db.fetch(`cooldown_day_${message.guild.id}_${message.author.id}`);

	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = (timeout - (Date.now() - cooldown));
		var durations =  convertMS(time)
		message.channel.send(`คุณต้องรออีก ${durations.day}วัน ${durations.hour}ชม. ${durations.minute}น. ${durations.seconds}วิ. ก่อนใช่คำสั่งอีกครั้ง!`);
	} else {
        db.add(`bal_${member.id}_${message.guild.id}`, 300)
        message.channel.send("คุณเยี่ยมมาก, เอา 300 บาทคุณไป")
        db.set(`cooldown_day_${message.guild.id}_${message.author.id}`, Date.now());
    }
}
}
