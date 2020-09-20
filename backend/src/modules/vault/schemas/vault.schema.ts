import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Vault extends Document {
  @Prop({ required: true, unique: true, minlength: 2 })
  name: string

  @Prop({ minlength: 2 })
  description: string

  @Prop({ required: true })
  numShelfs: number

  @Prop({ required: true })
  numRows: number
}

export const VaultSchema = SchemaFactory.createForClass(Vault)
