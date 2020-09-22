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

  @ApiProperty({
    description: 'The shelf where book is located',
  })
  private readonly shelf: number

  @ApiProperty({
    description: 'The row where book is located',
  })
  private readonly row: number

  @ApiProperty({
    description: "The book's number on row",
  })
  private readonly number: number

  @ApiProperty({
    description: 'Is the book missing or in place',
  })
  private readonly status: string

  @ApiProperty({
    description: 'The reason for the absence',
  })
  private readonly reasonOfmissing: string

  @ApiPropertyOptional({ description: "The book's front image" })
  @IsOptional()
  @IsNotEmpty()
  private readonly frontImage: Buffer

  @ApiPropertyOptional({ description: "The book's side image" })
  @IsOptional()
  @IsNotEmpty()
  private readonly sideImage: Buffer
}
