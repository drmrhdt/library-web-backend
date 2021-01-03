import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { Book } from './book.entity'
import { BookService } from './book.service'
import { CreateBookDto } from './dto/create-book.dto'

@ApiTags('book')
@Controller('book')
export class BookController {
  constructor(private readonly _bookService: BookService) {}

  @ApiOperation({ summary: 'Retrieve book by id' })
  @Get('/:id')
  getBookById(@Param('id', ParseIntPipe) id: number): Promise<Book> {
    return this._bookService.getBookById(id)
  }

  @ApiOperation({
    summary: 'Create new book',
  })
  @Post()
  create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this._bookService.createBook(createBookDto)
  }

  @ApiOperation({ summary: 'Retrieve all books' })
  @Get()
  async getAll(): Promise<Book[]> {
    return await this._bookService.getAllBooks()
  }
}
