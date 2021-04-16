module.exports = {
    name: "พจนานุกรม",
    usage: '[คำศัพท์อังกฤษ]',
    execute: async(client, message, args) => {
		const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);

        if (!args.length) {
			return message.channel.send('จะหาอะไรหล่ะ?');
		}
		var querystring = require('querystring');
		const fetch = require("node-fetch");

		const query = querystring.stringify({ term: args.join(' ') });

		const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
		if (!list.length || list === "" || !list || list === null) {
			return message.channel.send(`หา **${args.join(' ')}** ไม่เจอ, ลองพิมพ์ดี ๆ ซิ`);
	} 

		const [answer] = list;
const { MessageEmbed } = require('discord.js')
		const embed = new MessageEmbed()
			.setColor('#EFFF00')
			.setTitle(answer.word)
			.setURL(answer.permalink)
			.addField('ความหมาย', trim(answer.definition, 1024))
			.addField('ความชอบ', `${answer.thumbs_up} ชอบและ ${answer.thumbs_down} ไม่ชอบ`);
		message.channel.send(embed);

     }
}