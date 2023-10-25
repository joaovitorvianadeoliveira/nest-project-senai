import { Body, Controller, Post } from "@nestjs/common";
import { TelegramService } from "./telegram.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Telegram')
@Controller()
export class TelegramController{
    constructor( private readonly telegramService: TelegramService){
        
    }
    @Post()
    sendMenssage(@Body() dotMessage: {message: string, chatId: number, tokenbot: string } ){
        this.telegramService.sendtelegrafTeXT(dotMessage)
    }
    }
