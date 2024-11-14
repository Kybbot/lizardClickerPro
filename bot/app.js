import { Telegraf, Markup } from "telegraf";

const token = "7857906354:AAHVCAGRdDhH2iFzr7OjsMvgGeKA3D6mCqI";
const webAppUrl = "https://lizard-clicker-pro-14cdd.web.app";

const bot = new Telegraf(token);

bot.command("start", (ctx) => {
	ctx.reply(
		"Hello! Press to start the app",
		Markup.inlineKeyboard([Markup.button.webApp("Open mini app", `${webAppUrl}?ref=${ctx.payload}`)])
	);
});

bot.launch();
