import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  })
  app.setGlobalPrefix('v1/api')

  const options = new DocumentBuilder()
    .setTitle('Library')
    .setDescription('The library API description')
    .setVersion('1.0')
    .addTag('library')
    .setContact('daria', 'https://github.com/drmrhdt', 'drmrhdt@mail.ru')
    .setBasePath('v1/api')
    .addServer('http://localhost:3000')
    .addServer('https://library-bcknd.herokuapp.com/')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)
  app.enableCors()

  const PORT = process.env.PORT || 8080
  await app.listen(PORT)
}
bootstrap()
