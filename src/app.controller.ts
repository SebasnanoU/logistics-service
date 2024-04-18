import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect('/', 302)
  getHello(): string {
    return 'Welcome to the Logistics Service API! Visit /api for Swagger UI';
  }
}
