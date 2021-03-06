import {
  DeleteResult,
  EntityRepository,
  Repository,
  UpdateResult,
} from 'typeorm'

import { Book } from './book.entity'
import { CreateBookDto } from './dto/create-book.dto'
import { UpdateBookDto } from './dto/update-book.dto'

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
  async createBook(createBookDto: CreateBookDto[]): Promise<Book | Book[]> {
    return await this.save(createBookDto)
  }

  async findBookById(id: number): Promise<Book> {
    return this.findOne(id)
  }

  async getAllBooks(): Promise<Book[]> {
    return await this.find({
      relations: ['vault', 'tags'],
      order: {
        name: 'ASC',
      },
    })
  }

  async deleteBookById(id: number): Promise<DeleteResult> {
    return this.delete(id)
  }

  async updateById(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    return this.save({ id, ...updateBookDto })
  }
}
