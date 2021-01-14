import { EntityRepository, Repository } from 'typeorm'

import { Book } from './book.entity'
import { CreateBookDto } from './dto/create-book.dto'
import { UpdateBookDto } from './dto/update-book.dto'

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
  async createBook(createBookDto: CreateBookDto) {
    return await this.save(createBookDto)
  }

  async findBookById(id: number): Promise<Book> {
    return this.findOne(id)
  }

  async getAllBooks(): Promise<Book[]> {
    return await this.find({ relations: ['vault', 'tags'] })
  }

  async deleteBookById(id: number) {
    return this.delete(id)
  }

  async updateById(id: number, updateBookDto: UpdateBookDto) {
    return this.update(id, updateBookDto)
  }
}
