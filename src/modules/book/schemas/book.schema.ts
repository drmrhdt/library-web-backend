import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'
import { Status } from '../models'

@Schema()
export class Book extends Document {
  @Prop({ required: true, minlength: 2 })
  name: string

  @Prop({ required: true, minlength: 2 })
  author: string

  @Prop({ minlength: 2 })
  description: string

  @Prop({ required: true, type: Types.ObjectId, ref: 'Vault' })
  vault: Types.ObjectId

  // TODO check if i can make them required conditionally, or just keep null, when no value
  @Prop()
  shelf: number

  @Prop()
  row: number

  @Prop()
  number: number

  @Prop({ required: true })
  status: Status

  @Prop()
  reasonOfmissing: string
}

export const BookSchema = SchemaFactory.createForClass(Book)
