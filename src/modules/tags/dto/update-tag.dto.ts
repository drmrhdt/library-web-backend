import { PartialType } from '@nestjs/mapped-types'
import { ApiProperty } from '@nestjs/swagger'
import { CreateTagDto } from './create-tag.dto'

export class UpdateTagDto extends PartialType(CreateTagDto) {
  @ApiProperty({
    description: "The tag's name",
  })
  name: string
}
