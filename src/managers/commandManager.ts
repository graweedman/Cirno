import { Collection, REST, Routes } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";
import enviorment from "../../enviorments/enviorment";

import Command from "../types/command"
import Ping from "../commands/ping"


export default class CommandManager {
    public static commands = new Collection<string, Command>();

    constructor() {
        CommandManager.commands.set('ping', new Ping());
    }

    public static async load():Promise<any> {
        const rest:REST = new REST().setToken(enviorment.TOKEN);
        const data = CommandManager.commands.map((command: Command) => command.data.toJSON());
        try {
            await rest.put(
                Routes.applicationGuildCommands(enviorment.CLIENT_ID, enviorment.GUILD_ID),
                { body: data }
            );
            console.log(`Successfully reloaded ${data.length} application (/) commands.`);
        } catch (error) {
            console.error(error);
        }
        
    }

    public static async execute(interaction: any):Promise<void> {
        const command: Command = this.commands.get(interaction.commandName) as Command;
        if (!command) return;
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }

}


