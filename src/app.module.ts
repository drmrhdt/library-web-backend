import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppController } from './app.controller'
import { AppService } from './app.service'

import { VaultModule } from './modules/vault/vault.module'
import { BookModule } from './modules/book/book.module'

import { typeOrmConfig } from './config/typeorm.config'

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), VaultModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
