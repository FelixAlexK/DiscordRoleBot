const { Events, ActivityType } = require('discord.js');
const { botName, botAvatar, botAtivityStatus, botStatus, botActivityType } = require('../config.json');


module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		await client.user.setUsername(botName);
		await client.user.setAvatar(botAvatar);

		await client.user.setActivity(botAtivityStatus, { type: ActivityType.Competing });
		await client.user.setStatus(botStatus);

		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};