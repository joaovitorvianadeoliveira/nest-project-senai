import { Body, Controller, Post } from "@nestjs/common";
import { TelegramService } from "./telegram.service";
import { ApiTags } from "@nestjs/swagger";
import { seendMessageDto } from "./dto/sendMessage.dto";

@ApiTags('Telegram')
@Controller()
export class TelegramController{
    constructor( private readonly telegramService: TelegramService){
        
    }
    @Post()
    sendMenssage(@Body() dotMessage: seendMessageDto){
        this.telegramService.sendtelegrafTeXT({message:dotMessage.message, chatId: dotMessage.chatId, tokenbot: dotMessage.tokenbot})
    }
    }
