import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  IsNotEmpty,
  IsString,
  MinLength,
  IsOptional,
  IsInt,
  Min,
} from 'class-validator'
import { Document } from 'mongoose'

import { MIN_STRING_LENGTH, MIN_NUMBER } from 'src/utils/constants'

@Schema()
export class Vault extends Document {
  @ApiProperty({ description: 'The name of the vault', uniqueItems: true })
  @IsNotEmpty()
  @IsString()
  @MinLength(MIN_STRING_LENGTH, {
    message: `name should be at least ${MIN_STRING_LENGTH} characters`,
  })
  @Prop({ required: true, unique: true, minlength: 2 })
  name: string

  @ApiPropertyOptional({ description: 'The description of the vault' })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MinLength(MIN_STRING_LENGTH, {
    message: `description should be at least ${MIN_STRING_LENGTH} characters`,
  })
  @ApiPropertyOptional()
  @Prop({ minlength: 2 })
  description: string

  @ApiProperty({
    description: 'The number of shelfs',
    minimum: MIN_NUMBER,
    default: MIN_NUMBER,
    example: MIN_NUMBER,
  })
  @IsNotEmpty()
  @IsInt()
  @Min(1, { message: `you should set at least ${MIN_NUMBER} shelf` })
  @Prop({ required: true })
  numShelfs: number

  @ApiProperty({
    description: 'The number of rows on shelf',
    minimum: MIN_NUMBER,
    default: MIN_NUMBER,
    example: MIN_NUMBER,
  })
  @IsNotEmpty()
  @IsInt()
  @Min(1, { message: `you should set at least ${MIN_NUMBER} row` })
  @Prop({ required: true })
  numRows: number

  @ApiProperty({
    description: 'The max number of books',
    minimum: MIN_NUMBER,
    default: MIN_NUMBER,
    example: MIN_NUMBER,
  })
  @IsNotEmpty()
  @IsInt()
  @Min(1, {
    message: `the max number of books should be set at least ${MIN_NUMBER}`,
  })
  @Prop({ required: true })
  maxBooksOnShelf: number
}

export const VaultSchema = SchemaFactory.createForClass(Vault)
