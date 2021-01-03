import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { BookRepository } from './book.repository'
import { Book } from './book.entity'
import { CreateBookDto } from './dto/create-book.dto'

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookRepository) private _bookRepository: BookRepository,
  ) {}

  async getBookById(id: number): Promise<Book> {
    const found = await this._bookRepository.findOne(id)

    if (!found) {
      throw new NotFoundException(`Book with ID ${id} not found`)
    }

    return found
  }

  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    return await this._bookRepository.createBook(createBookDto)
  }

  async getAllBooks(): Promise<Book[]> {
    return this._bookRepository.getAllBooks()
  }
}
