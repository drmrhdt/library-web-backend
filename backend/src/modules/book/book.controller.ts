import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
  NotFoundException,
  Param,
} from '@nestjs/common'
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger'

import { BookService } from './book.service'
import { CreateBookDto } from './dto/create-book.dto'
import { Book } from './schemas/book.schema'

@ApiTags('book')
@Controller('book')
export class BookController {
  constructor(private readonly _bookService: BookService) {}

  @Post()
  @ApiOperation({
    summary: 'Create new book',
  })
  @ApiCreatedResponse({
    description: 'Book has been created successfully',
    type: Book,
  })
  async create(@Body() createBookDto: CreateBookDto) {
    try {
      return {
        response: await this._bookService.create(createBookDto),
      }
    } catch (err) {
      return new BadRequestException(err)
    }
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all books' })
  @ApiOkResponse({
    status: 200,
    description: 'Books have been retrieved successfully',
  })
  async findAll() {
    try {
      return {
        response: await this._bookService.findAll(),
      }
    } catch (err) {
      return new NotFoundException(err)
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve book by id' })
  @ApiOkResponse({
    status: 200,
    description: 'The founded book',
    type: Book,
  })
  @ApiNotFoundResponse({ status: 404, description: 'Could not find book' })
  async findOne(@Param('id') id: string) {
    try {
      return { response: await this._bookService.findOne(id) }
    } catch (err) {
      return new NotFoundException(err)
    }
  }
}
