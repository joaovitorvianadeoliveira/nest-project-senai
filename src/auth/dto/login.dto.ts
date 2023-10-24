import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({example: "dener@mail.com"})
  email: string;

  @ApiProperty({example: "@@Ab123F"})
  password: string;
}
