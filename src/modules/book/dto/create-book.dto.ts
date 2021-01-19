import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsEnum } from 'class-validator'
// import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
// import { Types } from 'mongoose'
// import {
//   IsString,
//   MinLength,
//   IsNotEmpty,
//   IsOptional,
//   IsMongoId,
//   IsEnum,
// } from 'class-validator'

// import { MIN_STRING_LENGTH } from 'src/utils/constants'
import { Status } from '../models'

export class CreateBookDto {
  @ApiProperty({
    description: "The book's name",
    // minLength: MIN_STRING_LENGTH,
  })
  // @IsNotEmpty()
  // @IsString()
  // @MinLength(MIN_STRING_LENGTH, {
  //   message: `name should be at least ${MIN_STRING_LENGTH} characters`,
  // })
  readonly name: string

  @ApiProperty({
    description: "The book's author",
    // minLength: MIN_STRING_LENGTH,
  })
  // @IsNotEmpty()
  // @IsString()
  // @MinLength(MIN_STRING_LENGTH, {
  //   message: `name should be at least ${MIN_STRING_LENGTH} characters`,
  // })
  readonly author: string

  @ApiPropertyOptional({
    description: "The book's description",
    // minLength: MIN_STRING_LENGTH,
  })
  // @IsOptional()
  // @IsNotEmpty()
  // @IsString()
  // @MinLength(MIN_STRING_LENGTH, {
  //   message: `name should be at least ${MIN_STRING_LENGTH} characters`,
  // })
  readonly description: string

  // TODO strange type in swagger
  @ApiPropertyOptional({
    description: "The vault's id",
    // type: Vault.name,
  })
  // @IsOptional()
  // @IsNotEmpty()
  readonly vaultId: number

  @ApiPropertyOptional({
    description: 'The row where book is located',
  })
  readonly row: number

  @ApiPropertyOptional({
    description: 'The shelf where book is located',
  })
  readonly shelf: number

  @ApiPropertyOptional({
    description: "The book's number on row",
  })
  readonly number: number

  @IsEnum(Status)
  @ApiProperty({
    description: 'Is the book missing or in place',
    required: true,
    enum: Status,
  })
  readonly status: Status

  @ApiProperty({
    description: 'The reason for the absence',
  })
  readonly reasonOfMissing: string
}
