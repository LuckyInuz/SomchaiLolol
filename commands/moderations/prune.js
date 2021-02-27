module.exports = {
	name: 'ระเบิด',
    aliases: ['เคลียร์ห้อง'],
	description: 'Prune up to 99 messages.',
	execute: async(message, args) => {
		if(!message.member.hasPermission("ADMINISTRATOR")) {
			message.channel.send("คุณไม่มีสิทธิ!")
		}
		async function clearChannel(channel, n = 0, old = false) {
			let collected = await message.channel.messages.fetch();			;
			if (collected.size > 0) {
			  if (old) {
				for (let message of collected.array()) {
				  await message.delete();
				  n++;
				}
			  } else {
				let deleted = await channel.bulkDelete(100, true);
				if (deleted.size < collected.size) old = true;
				n += deleted;
			  }
		  
			  return n + await clearChannel(channel, old);
			} else return 0;
		  }

		let messagesDeleted = await clearChannel(message.channel);

		message.channel.sendMessage("Number of deleted messages: " + messagesDeleted);
		console.log('Number of deleted messages: ' + messagesDeleted)
	  }
	}