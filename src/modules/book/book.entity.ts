import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Vault } from '../vault/vault.entity'

import { Status } from './models'

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  // @ApiProperty({
  //     description: "The books's name",
  //     minLength: MIN_STRING_LENGTH,
  //   })
  //   @IsNotEmpty()
  //   @IsString()
  //   @MinLength(MIN_STRING_LENGTH, {
  //     message: `name should be at least ${MIN_STRING_LENGTH} characters`,
  //   })
  //   @Prop({ required: true, minlength: 2 })
  @Column()
  name: string

  //   @ApiPropertyOptional({
  //     description: "The book's description",
  //     minLength: MIN_STRING_LENGTH,
  //   })
  //   @IsOptional()
  //   @IsNotEmpty()
  //   @IsString()
  //   @MinLength(MIN_STRING_LENGTH, {
  //     message: `name should be at least ${MIN_STRING_LENGTH} characters`,
  //   })
  //   @Prop({ minlength: 2 })
  @Column({ nullable: true })
  description: string

  //   @ApiProperty({
  //     description: "The books's author",
  //     minLength: MIN_STRING_LENGTH,
  //   })
  //   @IsNotEmpty()
  //   @IsString()
  //   @MinLength(MIN_STRING_LENGTH, {
  //     message: `name should be at least ${MIN_STRING_LENGTH} characters`,
  //   })
  //   @ApiProperty({
  //     description: "The books's author",
  //     minLength: MIN_STRING_LENGTH,
  //   })
  //   @IsNotEmpty()
  //   @IsString()
  //   @MinLength(MIN_STRING_LENGTH, {
  //     message: `name should be at least ${MIN_STRING_LENGTH} characters`,
  //   })
  //   @Prop({ required: true, minlength: 2 })
  @Column()
  author: string

  // TODO check if i can make them required conditionally, or just keep null, when no value
  //   @ApiProperty({
  //     description: 'The shelf where book is located',
  //   })
  //   @Prop()
  //   shelf: number
  @Column()
  shelf: number

  //   @ApiProperty({
  //     description: 'The row where book is located',
  //   })
  //   @Prop()
  //   row: number
  @Column()
  row: number

  //   @ApiProperty({
  //     description: "The book's number on row",
  //   })
  //   @Prop()
  //   number: number
  @Column()
  number: number

  //   @IsEnum(Status)
  //   @ApiProperty({
  //     description: 'Is the book missing or in place',
  //     required: true,
  //     enum: Status,
  //   })
  //   @Prop({ required: true })
  @Column({ default: Status.InPlace })
  status: Status

  //   @ApiProperty({
  //     description: 'The reason for the absence',
  //   })
  //   @Prop()
  //   reasonOfmissing: string
  @Column()
  reasonOfMissing: string

  //   @ApiProperty({
  //     description: "The vault's id",
  //   })
  //   @IsOptional()
  //   @IsNotEmpty()
  //   @IsMongoId()
  //   @Prop({
  //     type: () => Types.ObjectId,
  //     ref: 'Vault',
  //   })
  //   vault: string
  @ManyToOne(
    type => Vault,
    vault => vault.books,
  )
  vault: Vault
}