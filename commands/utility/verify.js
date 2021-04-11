module.exports = {
	name: 'ยืนยัน',
	description: 'Verifying people',
	cooldown: 10,
	execute: async (message) => {
		let myRole = message.guild.roles.cache.find(role => role.name === "🟢สมาชิก");
        if(message.member.roles.cache.find(r => r.name === "🟢สมาชิก")) {
            return;
        } else if(!message.member.roles.cache.find(r => r.name === "🟢สมาชิก")) {
			function makeid(length) {
				var result           = [];
				var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\\/-+"\'!@#$%^&*()_';
				var charactersLength = characters.length;
				for ( var i = 0; i < length; i++ ) {
				  result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
			   }
			   return result.join('');
			}
			let auth = makeid(10)
			message.channel.send("พิมพ์ข้อความต่อไปนี้ : " + "`" + auth + "`")
			if(message.content === auth && message.author) {
				            message.member.roles.add(myRole)
			} else {
				message.channel.send("ลองดูใหม่")
			}
        }
	},
};
