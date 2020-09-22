import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { CreateBookDto } from './dto/create-book.dto'
import { Book } from './schemas/book.schema'

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private readonly _bookModel: Model<Book>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this._bookModel(createBookDto)
    return await createdBook.save()
  }

  async findAll(): Promise<Book[]> {
    return await this._bookModel.find()
  }

  async findOne(id: string): Promise<Book> {
    return await this._bookModel.findById(id)
  }
}
