const commando = require('discord.js-commando');
const Bot = new commando.Client();

Bot.registry.registerGroup('random', 'Random');
Bot.registry.registerDefaults();
Bot.registry.registerCommandsIn(__dirname + "/commands");


Bot.login('NDY0NzU0MTEzOTQzNTY4Mzg0.DiTPNw.HE1CKvtLHI9547Vvqn6ZyJvefMM');
