import {
  Controller,
  Body,
  Query,
  Post,
} from '@nestjs/common';
import { ConnectionService } from './connection.service';

@Controller('connection')
export class ConnectionController {
  constructor(private readonly connectionService: ConnectionService) {}
  @Post()
  async callApi(@Query('id') id: string, @Body() requestData: any) {
    return await this.connectionService.call(id, requestData);
  }
}
