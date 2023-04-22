"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const enviorment_1 = __importDefault(require("../enviorments/enviorment"));
const commandManager_1 = __importDefault(require("./managers/commandManager"));
const client = new discord_js_1.Client({ intents: [discord_js_1.GatewayIntentBits.Guilds] });
const commands = new commandManager_1.default();
client.once(discord_js_1.Events.ClientReady, client => {
    console.log(`Logged in as ${client.user.tag}!`);
    commandManager_1.default.load();
});
client.on('interactionCreate', async (interaction) => await commandManager_1.default.execute(interaction));
client.login(enviorment_1.default.TOKEN);
//# sourceMappingURL=main.js.map