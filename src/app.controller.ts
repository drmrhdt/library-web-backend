import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor() {}

  @Get('/')
  getDefault(): string {
    return '<div>API</div>'
  }
}
