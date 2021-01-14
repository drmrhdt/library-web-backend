import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { TagsRepository } from './tags.repository'

import { CreateTagDto } from './dto/create-tag.dto'
import { UpdateTagDto } from './dto/update-tag.dto'
import { Tag } from './tag.entity'

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(TagsRepository)
    private _tagsRepository: TagsRepository,
  ) {}

  async create(createTagDto: CreateTagDto): Promise<Tag> {
    return await this._tagsRepository.createAndSave(createTagDto)
  }

  async findAll(): Promise<Tag[]> {
    return this._tagsRepository.findAll()
  }

  async findOne(id: number): Promise<Tag> {
    return await this._tagsRepository.findById(id)
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    return this._tagsRepository.updateById(id, updateTagDto)
  }

  async remove(id: number) {
    return this._tagsRepository.deleteById(id)
  }
}
