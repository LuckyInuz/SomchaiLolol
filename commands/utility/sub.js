module.exports = {
	name: 'ตาม',
	description: 'Verifying people',
	cooldown: 10,
	execute(message, args) {
		if (message.channel.id === '814315760004497428') {
		let myRole = message.guild.roles.cache.find(role => role.name === "◀️ติดตามการโฆษณา");
if(args = "ขาย") {
        if(message.member.roles.cache.find(r => r.name === "◀️ติดตามการโฆษณา")) {
message.channel.send("มีบทบาทแล้ว")
        } else if(!message.member.roles.cache.find(r => r.name === "◀️ติดตามการโฆษณา")) {
            message.member.roles.add(myRole)
message.channel.send("เสร็จสิ้นการให้บทบาท")
        }
} else if(!args.length) {
return;
	}
} else {
   return;
}
}
}
