import { ApiProperty } from "@nestjs/swagger";

export class seendMessageDto{
    @ApiProperty()
    message: string

@ApiProperty()
    chatId: number;

    @ApiProperty()
    tokenbot: string;

    @ApiProperty()
    imagens: string[]
     
}