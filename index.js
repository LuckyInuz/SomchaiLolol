require('dotenv').config()
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client()
client.commands = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands');
let prefix = process.env.PREFIX
const Level = require('discord-xp')
Level.setURL("mongodb+srv://Somchai:SQA8bahqZ1C3C1Pq@somchai-cluster.3rerz.mongodb.net/test")
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Somchai:SQA8bahqZ1C3C1Pq@somchai-cluster.3rerz.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true, })
mongoose.set('useFindAndModify', false);

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}
const cooldowns = new Discord.Collection();
client.once('ready', () => {
	const activities_list = [
		"sm!คำสั่ง เพื่อแสดงคำสั่ง", 
		`บอตถูกใช้ใน ${client.guilds.cache.size} เซอร์เวอร์!`,
		"กับคุณ", 
		"Half-life 3"
		];
	console.log(`${prefix}`);
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 3000); // Runs this every 10 seconds.
});

client.on('message', async message => {
	
client.snipe = new Discord.Collection()
	if (message.author.bot || !message.guild) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const randomXp = Math.trunc(Math.random() * 10) - 1;
	const hasLevelUp = await Level.appendXp(message.author.id, message.guild.id, randomXp)
	function RandomMessage() {
		let msgr = ['That\'s awesome!', 'Keep going!', 'How nice!', 'Very cool!', 'You are chatting experts!']
		return msgr[Math.floor(Math.random() * msgr.length)]
	}
	if(hasLevelUp) {
		const user = await Level.fetch(message.author.id, message.guild.id)
		message.channel.send(`<@${message.author.id}> has now level up to ${user.level}!` + RandomMessage())
	}

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('ไม่สามารถสั่งคำสั่งภายใน Direct Message ได้');
	}
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`โปรดรออีก ${timeLeft.toFixed(1)} วินาทีก่อนจะใช้คำสั่ง \`${command.name}\``);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(client, message, args);
	} catch (error) {
		console.error(error);
		message.channel.send("มีการผิดพลาด!");
	}
	
	
});

client.login(process.env.TOKEN);
