import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { Book } from '../book/book.entity'

@Entity()
export class Vault extends BaseEntity {
  // @ApiProperty({ description: 'The id of the vault', uniqueItems: true })
  // @IsNotEmpty()
  // @IsNumber()
  //   @MinLength(MIN_STRING_LENGTH, {
  //     message: `name should be at least ${MIN_STRING_LENGTH} characters`,
  //   })
  //   @Prop({ required: true, unique: true, minlength: 2 })
  @PrimaryGeneratedColumn()
  id: number

  // @ApiProperty({ description: 'The name of the vault', uniqueItems: true })
  // @IsNotEmpty()
  // @IsString()
  //   @MinLength(MIN_STRING_LENGTH, {
  //     message: `description should be at least ${MIN_STRING_LENGTH} characters`,
  //   })
  //   @ApiPropertyOptional()
  //   @Prop({ minlength: 2 })
  @Column()
  name: string

  // @ApiPropertyOptional({ description: 'The description of the vault' })
  // @IsOptional()
  // @IsNotEmpty()
  // @IsString()
  @Column()
  description: string

  //   @ApiProperty({
  //     description: 'The number of shelfs',
  //     minimum: MIN_NUMBER,
  //     default: MIN_NUMBER,
  //     example: MIN_NUMBER,
  //   })
  //   @IsNotEmpty()
  //   @IsInt()
  //   @Min(1, { message: `you should set at least ${MIN_NUMBER} shelf` })
  //   @Prop({ required: true })
  @Column()
  numShelfs: number

  //   @ApiProperty({
  //     description: 'The number of rows on shelf',
  //     minimum: MIN_NUMBER,
  //     default: MIN_NUMBER,
  //     example: MIN_NUMBER,
  //   })
  //   @IsNotEmpty()
  //   @IsInt()
  //   @Min(1, { message: `you should set at least ${MIN_NUMBER} row` })
  //   @Prop({ required: true })
  @Column()
  numRows: number

  //   @ApiProperty({
  //     description: 'The max number of books',
  //     minimum: MIN_NUMBER,
  //     default: MIN_NUMBER,
  //     example: MIN_NUMBER,
  //   })
  //   @IsNotEmpty()
  //   @IsInt()
  //   @Min(1, {
  //     message: `the max number of books should be set at least ${MIN_NUMBER}`,
  //   })
  //   @Prop({ required: true })
  @Column()
  maxBooksOnShelf: number

  // @Prop({
  //   virtual: 'books',
  //   ref: Book.name,
  //   localField: 'vault',
  //   foreignField: '_id',
  // })
  // books: Book[]

  //   @Prop({
  //     type: () => Types.ObjectId,
  //     ref: Book.name,
  //     localField: 'vault',
  //     foreignField: '_id',
  //     autopopulate: true,
  //   })
  @OneToMany(
    type => Book,
    book => book.vault,
  )
  books: Book[]

  shelfs
}
