import { EntityRepository, Repository } from 'typeorm'

import { Tag } from './tag.entity'
import { CreateTagDto } from './dto/create-tag.dto'
import { UpdateTagDto } from './dto/update-tag.dto'

@EntityRepository(Tag)
export class TagsRepository extends Repository<Tag> {
  async createAndSave(createTagDto: CreateTagDto) {
    return await this.save(createTagDto)
  }

  async findAll() {
    return await this.find()
  }

  async findById(id: number) {
    return await this.findOne(id)
  }

  async deleteById(id: number) {
    return this.delete(id)
  }

  async updateById(id: number, updateTagDto: UpdateTagDto) {
    return this.update(id, updateTagDto)
  }
}
