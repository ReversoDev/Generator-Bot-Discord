const Keyv = require('keyv')

module.exports = {
	name: 'prefix',
	description: 'Sets a guild specific prefix',
	aliases: [''],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const prefixDb = new Keyv('sqlite://./settings/prefix.sqlite');
	},
};