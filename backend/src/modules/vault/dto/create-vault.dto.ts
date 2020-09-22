import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  IsString,
  MinLength,
  IsInt,
  Min,
  IsNotEmpty,
  IsOptional,
} from 'class-validator'

import { MIN_STRING_LENGTH, MIN_NUMBER } from 'src/utils/constants'

export class CreateVaultDto {
  @ApiProperty({ description: 'The name of the vault', uniqueItems: true })
  @IsNotEmpty()
  @IsString()
  @MinLength(MIN_STRING_LENGTH, {
    message: `name should be at least ${MIN_STRING_LENGTH} characters`,
  })
  readonly name: string

  @ApiPropertyOptional({ description: 'The description of the vault' })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MinLength(MIN_STRING_LENGTH, {
    message: `description should be at least ${MIN_STRING_LENGTH} characters`,
  })
  readonly description: string

  @ApiProperty({
    description: 'The number of shelfs',
    minimum: MIN_NUMBER,
    default: MIN_NUMBER,
    example: MIN_NUMBER,
  })
  @IsNotEmpty()
  @IsInt()
  @Min(1, { message: `you should set at least ${MIN_NUMBER} shelf` })
  readonly numShelfs: number

  @ApiProperty({
    description: 'The number of rows on shelf',
    minimum: MIN_NUMBER,
    default: MIN_NUMBER,
    example: MIN_NUMBER,
  })
  @IsNotEmpty()
  @IsInt()
  @Min(1, { message: `you should set at least ${MIN_NUMBER} row` })
  readonly numRows: number

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
  readonly maxBooksOnShelf: number
}
