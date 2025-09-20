import { Telegraf } from 'telegraf';

class TelegramBot {
    private bot: Telegraf;

    constructor(token: string) {
        this.bot = new Telegraf(token);
        this.initialize();
    }

    private initialize() {
        this.bot.start((ctx) => ctx.reply('Welcome to the Perfume Shop!'));
        this.bot.help((ctx) => ctx.reply('Send /perfumes to get a list of available perfumes.'));
        this.bot.command('perfumes', this.getAllPerfumes);
        this.bot.launch();
    }

    private getAllPerfumes(ctx) {
        // Logic to fetch and display all perfumes
        ctx.reply('Here is the list of available perfumes...');
    }
}

export default TelegramBot;