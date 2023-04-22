import { SlashCommandBuilder } from "@discordjs/builders";

export default interface Command {
    data: SlashCommandBuilder;
    execute(interaction: any): Promise<void>;
}