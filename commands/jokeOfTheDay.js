const { SlashCommandBuilder } = require('discord.js');
const helper = require('../helper.js');
const logger = require('../logger.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('joke')
		.setDescription('provides the joke of the day'),
	async execute(interaction) {

		try {
			const response = await fetch('https://api.jokes.one/jod');
			const data = await response.json();

			const exampleEmbed = {
				color: helper.getRandomColor(),
				title: 'Joke Of The Day',
				fields: [
					{ name: '', value: `${data.contents.jokes[0].joke.text}` },

				],
				timestamp: new Date().toISOString(),
			};
			interaction.reply({ embeds: [exampleEmbed] });

		}
		catch (error) {
			logger.log('error', error.message);
			interaction.reply({ content: `Error Message: ${error.message}`, ephemeral: true });
		}


	},
};