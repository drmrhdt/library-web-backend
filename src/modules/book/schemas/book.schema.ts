import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  IsNotEmpty,
  IsString,
  MinLength,
  IsOptional,
  IsMongoId,
  IsEnum,
} from 'class-validator'
import { Document, Types } from 'mongoose'
import { Vault } from 'src/modules/vault/schemas/vault.schema'
import { MIN_STRING_LENGTH } from 'src/utils/constants'
import { Status } from '../models'

@Schema()
export class Book extends Document {
  @ApiProperty({
    description: "The books's name",
    minLength: MIN_STRING_LENGTH,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(MIN_STRING_LENGTH, {
    message: `name should be at least ${MIN_STRING_LENGTH} characters`,
  })
  @Prop({ required: true, minlength: 2 })
  name: string

  @ApiProperty({
    description: "The books's author",
    minLength: MIN_STRING_LENGTH,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(MIN_STRING_LENGTH, {
    message: `name should be at least ${MIN_STRING_LENGTH} characters`,
  })
  @ApiProperty({
    description: "The books's author",
    minLength: MIN_STRING_LENGTH,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(MIN_STRING_LENGTH, {
    message: `name should be at least ${MIN_STRING_LENGTH} characters`,
  })
  @Prop({ required: true, minlength: 2 })
  author: string

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
  @Prop({ minlength: 2 })
  description: string

  @ApiProperty({
    description: "The vault's id",
    type: Vault.name,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsMongoId()
  @Prop({ type: Types.ObjectId, ref: Vault.name })
  vault: Vault

  // TODO check if i can make them required conditionally, or just keep null, when no value
  @ApiProperty({
    description: 'The shelf where book is located',
  })
  @Prop()
  shelf: number

  @ApiProperty({
    description: 'The row where book is located',
  })
  @Prop()
  row: number

  @ApiProperty({
    description: "The book's number on row",
  })
  @Prop()
  number: number

  @IsEnum(Status)
  @ApiProperty({
    description: 'Is the book missing or in place',
    required: true,
    enum: Status,
  })
  @Prop({ required: true })
  status: Status

  @ApiProperty({
    description: 'The reason for the absence',
  })
  @Prop()
  reasonOfmissing: string
}

export const BookSchema = SchemaFactory.createForClass(Book)
