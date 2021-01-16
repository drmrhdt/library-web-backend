import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { UpdateResult } from 'typeorm'

import { Book } from './book.entity'
import { BookService } from './book.service'
import { CreateBookDto } from './dto/create-book.dto'
import { UpdateBookDto } from './dto/update-book.dto'

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
  getAll(): Promise<Book[]> {
    return this._bookService.getAllBooks()
  }

  @ApiOperation({ summary: 'Update book by id' })
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    return this._bookService.update(id, updateBookDto)
  }

  @ApiOperation({ summary: 'Delete book by id' })
  @Delete(':id')
  deleteById(@Param('id', ParseIntPipe) id: number) {
    return this._bookService.deleteBookById(id)
  }
}
