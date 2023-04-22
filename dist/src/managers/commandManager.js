"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const enviorment_1 = __importDefault(require("../../enviorments/enviorment"));
const ping_1 = __importDefault(require("../commands/ping"));
class CommandManager {
    constructor() {
        CommandManager.commands.set('ping', new ping_1.default());
    }
    static async load() {
        const rest = new discord_js_1.REST().setToken(enviorment_1.default.TOKEN);
        const data = CommandManager.commands.map((command) => command.data.toJSON());
        try {
            await rest.put(discord_js_1.Routes.applicationGuildCommands(enviorment_1.default.CLIENT_ID, enviorment_1.default.GUILD_ID), { body: data });
            console.log(`Successfully reloaded ${data.length} application (/) commands.`);
        }
        catch (error) {
            console.error(error);
        }
    }
    static async execute(interaction) {
        const command = this.commands.get(interaction.commandName);
        if (!command)
            return;
        try {
            await command.execute(interaction);
        }
        catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }
}
CommandManager.commands = new discord_js_1.Collection();
exports.default = CommandManager;
//# sourceMappingURL=commandManager.js.map