module.exports = {
    name: 'สัปดาห์',
    aliases: ['อาทิตย์', 'ปจส', 'ปจอ'],
    description: 'ได้รับเงินประจำสัปดาห์',
    execute: async(client, message) => {
        let db = require('quick.db')
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
//check if there is cooldown
	const timeout = 604800000 ; // 1 days in milliseconds, change to the desired cooldown time, in milliseconds
	const cooldown = await db.fetch(`cooldown_week_${message.guild.id}_${message.author.id}`);

	if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
        const time = (timeout - (Date.now() - cooldown));
        var durations =  convertMS(time)
		message.channel.send(`ไม่ต้องรีบ ๆ รออีกแค่ ${durations.day}วัน ${durations.hour}ชม. ${durations.minute}น. ${durations.seconds}วิ. วันเองหน่า!`);
	} else {
        db.add(`bal_${member.id}_${message.guild.id}`, 2500)
        message.channel.send("นายเยี่ยมมาก, เอา 2500 บาทนายไป")
        db.set(`cooldown_week_${message.guild.id}_${message.author.id}`, Date.now());
    }
}
}