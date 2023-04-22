import { Client, Collection, Events, GatewayIntentBits } from 'discord.js';
import Enviorment from '../enviorments/enviorment';
import CommandManager from './managers/commandManager';


const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const commands = new CommandManager();

client.once(Events.ClientReady, client => {
	console.log(`Logged in as ${client.user.tag}!`);
	CommandManager.load();
})

client.on('interactionCreate', async (interaction) => await CommandManager.execute(interaction));

client.login(Enviorment.TOKEN);