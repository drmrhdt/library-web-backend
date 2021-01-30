import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  constructor() {}

  @Get('/')
  getDefault(): string {
    return '<div>API</div>'
  }
}
