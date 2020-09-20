import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

@Schema()
export class Book extends Document {
  @Prop({ required: true, unique: true, minlength: 2 })
  name: string

  @Prop({ required: true, minlength: 2 })
  author: string

  @Prop({ minlength: 2 })
  description: string

  @Prop({ required: true, type: Types.ObjectId, ref: 'Vault' })
  vault: string

  @Prop()
  frontImage: Buffer

  @Prop()
  sideImage: Buffer
}

export const BookSchema = SchemaFactory.createForClass(Book)
