import express from 'express';
import { TelegramBot } from './bot/index';
import { setRoutes } from './routes/index';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const bot = new TelegramBot();
setRoutes(app);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    bot.start();
});