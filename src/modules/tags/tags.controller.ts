import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { DeleteResult, UpdateResult } from 'typeorm'

import { TagsService } from './tags.service'

import { Tag } from './tag.entity'
import { CreateTagDto } from './dto/create-tag.dto'
import { UpdateTagDto } from './dto/update-tag.dto'

@ApiTags('tags')
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @ApiOperation({ summary: 'Create new tag' })
  @Post()
  create(@Body() createTagDto: CreateTagDto): Promise<Tag> {
    return this.tagsService.create(createTagDto)
  }

  @ApiOperation({ summary: 'Retrieve all tags' })
  @Get()
  findAll(): Promise<Tag[]> {
    return this.tagsService.findAll()
  }

  @ApiOperation({ summary: 'Retrieve tag by id' })
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Tag> {
    return this.tagsService.findOne(id)
  }

  @ApiOperation({ summary: 'Update tag by id' })
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateTagDto: UpdateTagDto,
  ): Promise<UpdateResult> {
    return this.tagsService.update(id, updateTagDto)
  }

  @ApiOperation({ summary: 'Delete tag by id' })
  @Delete(':id')
  remove(@Param('id') id: number): Promise<DeleteResult> {
    return this.tagsService.remove(id)
  }
}
