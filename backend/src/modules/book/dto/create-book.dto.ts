import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Types } from 'mongoose'
import {
  IsString,
  MinLength,
  IsNotEmpty,
  IsOptional,
  IsMongoId,
} from 'class-validator'
import { MIN_STRING_LENGTH } from 'src/utils/constants'

export class CreateBookDto {
  @ApiProperty({
    description: "The books's name",
    minLength: MIN_STRING_LENGTH,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(MIN_STRING_LENGTH, {
    message: `name should be at least ${MIN_STRING_LENGTH} characters`,
  })
  private readonly name: string

  @ApiProperty({
    description: "The books's author",
    minLength: MIN_STRING_LENGTH,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(MIN_STRING_LENGTH, {
    message: `name should be at least ${MIN_STRING_LENGTH} characters`,
  })
  private readonly author: string

  @ApiPropertyOptional({
    description: "The book's description",
    minLength: MIN_STRING_LENGTH,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MinLength(MIN_STRING_LENGTH, {
    message: `name should be at least ${MIN_STRING_LENGTH} characters`,
  })
  private readonly description: string

  @ApiProperty({
    description: "The vault's id",
  })
  @IsOptional()
  @IsNotEmpty()
  @IsMongoId()
  private readonly vault: Types.ObjectId

  @ApiPropertyOptional({ description: "The book's front image" })
  @IsOptional()
  @IsNotEmpty()
  private readonly frontImage: Buffer

  @ApiPropertyOptional({ description: "The book's side image" })
  @IsOptional()
  @IsNotEmpty()
  private readonly sideImage: Buffer
}
