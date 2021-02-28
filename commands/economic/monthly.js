module.exports = {
    name: 'เดือน',
    aliases: ['ปจด'],
    description: 'ได้รับเงินประจำเดือน',
    execute: async(client, message) => {
        var member = message.author;
        //Convert ms https://gist.github.com/Erichain/6d2c2bf16fe01edfcffa
        //Cooldowns code thanks to https://support.glitch.com/u/Callum-OKane
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
        let ms = require('ms')
let db = require('quick.db')
//check if there is cooldown
	const timeout = 2629800000; // 1 month in milliseconds, change to the desired cooldown time, in milliseconds
	const cooldown = await db.fetch(`cooldown_month_${message.guild.id}_${message.author.id}`);

	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		const time = (timeout - (Date.now() - cooldown));
        var durations =  convertMS(time)
		message.channel.send(`คุณต้องรออีก ${durations.day}วัน ${durations.hour}ชม. ${durations.minute}น. ${durations.seconds}วิ. ก่อนใช่คำสั่งอีกครั้ง!`);
	} else {
        db.add(`bal_${member.id}_${message.guild.id}`, 15000)
        message.channel.send("คุณเยี่ยมมาก, เอา 15000 บาทคุณไป")
        db.set(`cooldown_month_${message.guild.id}_${message.author.id}`, Date.now());
    }
}
}
