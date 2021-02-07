import { Controller, Get } from '@nestjs/common';

@Controller('my-first')
export class MyFirstController {
  @Get()
  index() {
    return { teste: 'aa' };
  }
}
