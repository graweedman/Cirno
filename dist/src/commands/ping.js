"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
class Ping {
    constructor() {
        this.data = new builders_1.SlashCommandBuilder()
            .setName('ping')
            .setDescription('Replies with Pong!');
    }
    async execute(interaction) {
        await interaction.reply('Pong!');
    }
}
exports.default = Ping;
//# sourceMappingURL=ping.js.map