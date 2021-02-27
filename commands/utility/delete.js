module.exports = {
	name: 'ลบ',
	description: 'Prune up to 99 messages.',
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('นั้นดูเหมือนไม่ใช่ตัวเลขนะ');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('ใส่ตัวเลขระหว่าง 1-99');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send("มีขอผิดพลาด!");
		});
	},
};