import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { DeleteResult } from 'typeorm'

import { BookRepository } from './book.repository'

import { Book } from './book.entity'
import { CreateBookDto } from './dto/create-book.dto'
import { UpdateBookDto } from './dto/update-book.dto'

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

  async createBook(createBookDto: CreateBookDto[]): Promise<Book | Book[]> {
    return await this._bookRepository.createBook(createBookDto)
  }

  async getAllBooks(): Promise<Book[]> {
    return this._bookRepository.getAllBooks()
  }

  async deleteBookById(id: number): Promise<DeleteResult> {
    return this._bookRepository.deleteBookById(id)
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    return this._bookRepository.updateById(id, updateBookDto)
  }
}
