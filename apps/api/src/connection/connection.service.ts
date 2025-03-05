import { Injectable } from '@nestjs/common';
import { CreateConnectionDto } from './dto/create-connection.dto';
import { UpdateConnectionDto } from './dto/update-connection.dto';
import { Service } from 'services/entities/service.entity';
import { ServicesService } from 'services/services.service';

@Injectable()
export class ConnectionService {
  constructor(service:ServicesService) {}
 
}
