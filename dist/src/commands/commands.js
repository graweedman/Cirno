"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const ping_1 = __importDefault(require("./ping"));
class CommandManager {
    constructor() {
        CommandManager.commands.set('ping', ping_1.default);
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
//# sourceMappingURL=commands.js.map