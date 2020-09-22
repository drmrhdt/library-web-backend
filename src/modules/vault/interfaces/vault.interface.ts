import { Document } from 'mongoose'

export interface Vault extends Document {
  id: string
  name: string
  description?: string
  numShelfs: number
  numRows: number
  maxBooksOnShelf: number
}
