import { Types } from 'mongoose'
import {
  IsString,
  MinLength,
  IsNotEmpty,
  IsOptional,
  IsMongoId,
} from 'class-validator'

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2, { message: 'name should be at least 2 characters' })
  private readonly name: string

  @IsNotEmpty()
  @IsString()
  @MinLength(2, { message: 'name should be at least 2 characters' })
  private readonly author: string

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MinLength(2, { message: 'name should be at least 2 characters' })
  private readonly description: string

  @IsOptional()
  @IsNotEmpty()
  @IsMongoId()
  private readonly vault: Types.ObjectId

  @IsOptional()
  @IsNotEmpty()
  private readonly frontImage: Buffer

  @IsOptional()
  @IsNotEmpty()
  private readonly sideImage: Buffer
}
