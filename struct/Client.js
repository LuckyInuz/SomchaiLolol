const { Client, Collection } = require('discord.js');

module.exports = class extends Client {
	constructor(config) {
		super({
			disableMentions: 'everyone',
            token: 'ODA2ODI3Mjc1NTY3NjI4Mjk5.YBvGdA.1D4K7u_GzZK1uax92OfZNOdqKfs',
            prefix: 'x!'
		});

		this.commands = new Collection();

		this.cooldowns = new Collection();

		this.queue = new Map();

		this.config = config;
	}
};