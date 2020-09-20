import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { VaultModule } from './modules/vault/vault.module'
import { BookModule } from './modules/book/book.module'

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://drmrhdt:drmrhdt@cluster0.drvkh.mongodb.net/library?retryWrites=true&w=majority',
    ),
    VaultModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
