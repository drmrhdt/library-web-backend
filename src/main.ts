import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const options = new DocumentBuilder()
    .setTitle('Library')
    .setDescription('The library API description')
    .setVersion('1.0')
    .addTag('library')
    .setContact('daria', 'https://github.com/drmrhdt', 'drmrhdt@mail.ru')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  await app.listen(3000)
}
bootstrap()