import { SlashCommandBuilder } from '@discordjs/builders';
import Command from '../types/command';

export default class Ping implements Command{
    public data = new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!');

    public async execute(interaction: any) {
        console.log("ping")
        await interaction.reply('Pong!');
    }
}

