import { Body, Controller, Post } from "@nestjs/common";
import { TelegramService } from "./telegram.service";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { seendMessageDto } from "./dto/sendMessage.dto";

@ApiTags('Telegram')
@Controller()
export class TelegramController{
    constructor( private readonly telegramService: TelegramService){
        
    }
    @Post('send')
    @ApiOperation({summary:'enviar mensagem telegram'})
    sendMessage(
        @Body() dotMessage: seendMessageDto){
    
        this.telegramService.sendtelegrafTeXT({message:dotMessage.message, chatId: dotMessage.chatId, tokenbot: dotMessage.tokenbot})
    }

    @Post('send-media')
    @ApiOperation({summary:'enviar mensagem telegram com imagem'})
    async sendMessageMedia(@Body() dtoMessage: seendMessageDto){
    await this.telegramService.sendtelegrafMedia(dtoMessage)
    }
}