import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { TestUseCase } from 'src/common/application/use-cases/test-use-case';

@Controller()
export class TestController {
  @Get('/test')
  async handle(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Response> {
    console.log(request);

    response.header('content-type', 'text/json');
    return response.send(new TestUseCase().execute());
  }
}
