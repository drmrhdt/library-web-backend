import {
  IsString,
  MinLength,
  IsInt,
  Min,
  IsNotEmpty,
  IsOptional,
} from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CreateVaultDto {
  @ApiProperty({ description: 'The name of the vault', uniqueItems: true })
  @IsNotEmpty()
  @IsString()
  @MinLength(2, { message: 'name should be at least 2 characters' })
  readonly name: string

  @ApiPropertyOptional({ description: 'The description of the vault' })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MinLength(2, { message: 'description should be at least 2 characters' })
  readonly description: string

  @ApiProperty({
    description: 'The number of shelfs',
    minimum: 1,
    default: 1,
    example: 1,
  })
  @IsNotEmpty()
  @IsInt()
  @Min(1, { message: 'you should set should at least 1 shelf' })
  readonly numShelfs: number

  @ApiProperty({
    description: 'The number of rows on shelf',
    minimum: 1,
    default: 1,
    example: 1,
  })
  @IsNotEmpty()
  @IsInt()
  @Min(1, { message: 'you should set should at least 1 row' })
  readonly numRows: number
}
