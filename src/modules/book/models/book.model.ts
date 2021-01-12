import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
// import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
// import { Types } from 'mongoose'
// import {
//   IsString,
//   MinLength,
//   IsNotEmpty,
//   IsOptional,
//   IsEnum,
// } from 'class-validator'

// import { MIN_STRING_LENGTH } from 'src/utils/constants'
import { Status } from '../models'

export class Book {
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
  @ApiProperty({
    description: "The vault's id",
    // type: Vault.name,
  })
  // @IsOptional()
  // @IsNotEmpty()
  // @IsMongoId()
  readonly vaultId: number

  @ApiProperty({
    description: 'The row where book is located',
  })
  readonly row: number

  @ApiProperty({
    description: 'The shelf where book is located',
  })
  readonly shelf: number

  @ApiProperty({
    description: "The book's number on row",
  })
  readonly number: number

  // @IsEnum(Status)
  // @ApiProperty({
  //   description: 'Is the book missing or in place',
  //   required: true,
  //   enum: Status,
  // })
  readonly status: Status

  // @ApiProperty({
  //   description: 'The reason for the absence',
  // })
  readonly reasonOfMissing: string
}
