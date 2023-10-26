import { Injectable } from '@nestjs/common';
import { buffer } from 'stream/consumers';
import { Telegraf } from 'telegraf';
import { MediaGroup } from 'telegraf/typings/telegram-types';
import { seendMessageDto } from './dto/sendMessage.dto';

@Injectable()
export class TelegramService {
  private bot: Telegraf;
  private chatId: string;
  constructor() {
    // substitua 'YOUR_BOT_TOKEN' pelo token do seu bot do telegram
   // this.bot = new Telegraf("6870940306:AAGC1Iso9_QIsZS1cqEvrJzx0x27LjNp3iU")
   // this.chatId = "-1002033466946";
   //}
  }

  base64ToImage(base64: string): Buffer{

    const base64Data = base64.replace(/^data:imagem\/jpeg;base64,/, '')
    return Buffer.from(base64Data,'base64')
   }

  async sendtelegrafTeXT({ message, chatId, tokenbot }: { message: string, chatId: number, tokenbot: string }) {
    try {
      const bot = new Telegraf(tokenbot)
      await bot.telegram.sendMessage(chatId, message)
      console.log("Mensagem enviada ")
    }
    catch (erro) {
      console.log("sendTelegrafFtext:", erro)
    }
  }

  async sendtelegrafMedia(
    {message,
    chatId,
    tokenbot,
    imagens }:seendMessageDto
  ) {

    const bot = new Telegraf(tokenbot)
    const media: MediaGroup = imagens.map((image) => ({
      type: "photo",
      media: { source: this.base64ToImage(image) },
      caption: '',
    }));
    media[media.length -1].caption = message;
    await bot.telegram.sendMediaGroup(chatId, media)
    console.log('Mensagem enviada')
  }
 

}

