import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Types } from 'mongoose'
import {
  IsString,
  MinLength,
  IsNotEmpty,
  IsOptional,
  IsMongoId,
  IsEnum,
} from 'class-validator'

import { MIN_STRING_LENGTH } from 'src/utils/constants'
import { Status } from '../models'

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

  // TODO strange type in swagger
  @ApiProperty({
    description: "The vault's id",
    type: Types.ObjectId,
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

  @IsEnum(Status)
  @ApiProperty({
    description: 'Is the book missing or in place',
    enum: Status,
  })
  private readonly status: Status

  @ApiProperty({
    description: 'The reason for the absence',
  })
  private readonly reasonOfmissing: string
}
