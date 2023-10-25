import { Injectable } from '@nestjs/common';
import { Telegraf } from 'telegraf';

@Injectable()
export class TelegramService {
    private bot:  Telegraf;
    private chatId: string;
    constructor() {
        // substitua 'YOUR_BOT_TOKEN' pelo token do seu bot do telegram
       this.bot = new Telegraf("6870940306:AAGC1Iso9_QIsZS1cqEvrJzx0x27LjNp3iU")
       this.chatId = "-1002033466946"

    }

      async sendtelegrafTeXT({message, chatId, tokenbot})  (message: string, chatId?: string, tokenbot: string)
        try {
              cont bot = new Telegraf(tokenbot)
              await bot.telegram.sendMessage(chatId, message)
              console.log("Mensagem enviada ")
              catch(erro){
            console.log("sendTelegrafFtext:", erro )
         }
        }
  
    }

