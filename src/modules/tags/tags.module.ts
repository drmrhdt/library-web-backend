import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { TagsService } from './tags.service'
import { TagsController } from './tags.controller'
import { TagsRepository } from './tags.repository'

@Module({
  imports: [TypeOrmModule.forFeature([TagsRepository])],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
