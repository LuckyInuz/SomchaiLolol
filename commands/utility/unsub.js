module.exports = {
	name: 'เลิกตาม',
	description: 'Verifying people',
	cooldown: 10,
	execute(message, args) {
		if (message.channel.id === '814315760004497428') {
		let myRole = message.guild.roles.cache.find(role => role.name === "◀️ติดตามการโฆษณา");
if(args = "ขาย") {
        if(message.member.roles.cache.find(r => r.name === "◀️ติดตามการโฆษณา")) {
message.member.roles.remove(myRole)
message.channel.send("ลบบทบาทแล้ว")
        } else if(!message.member.roles.cache.find(r => r.name === "◀️ติดตามการโฆษณา")) {
            message.channel.send("ห่ะ")
        }
} else if(!args.length) {
return;
	}
} else {
  return;
}
}
}
