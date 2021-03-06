module.exports = {
	name: 'ระเบิด',
    aliases: ['เคลียร์ห้อง'],
	description: 'ลบข้อความทุกข้อความ',
	execute: async(client, message, args) => {
		if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("แกไม่มีสิทธิ์ที่จะมาระเบิดห้องคนอื่นเล่น!!");
		if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ผมไม่มีใบอนุญาติในการลบครับ...");
		
		message.channel.clone({ parent: `${message.channel.parentID}`, position: message.channel.rawPosition }).then(ch => { ch.send('โดนระเบิดเรียบร้อย https://i.gifer.com/6Ip.gif'); })
		message.channel.delete();
	  }
	}