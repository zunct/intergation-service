import { Module } from '@nestjs/common';
import { ConnectionService } from './connection.service';
import { ConnectionController } from './connection.controller';
import { ServicesModule } from 'services/services.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ServicesModule,HttpModule],
  controllers: [ConnectionController],
  providers: [ConnectionService],
})
export class ConnectionModule {}
