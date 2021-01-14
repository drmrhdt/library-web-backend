import { ApiProperty } from '@nestjs/swagger'

export class CreateTagDto {
  @ApiProperty({
    description: "The tag's name",
  })
  name: string
}
