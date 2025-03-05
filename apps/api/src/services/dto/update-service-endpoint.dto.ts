import { PartialType } from '@nestjs/swagger';
import { CreateServiceEndpointDto } from './create-service-endpoint.dto';

export class UpdateServiceEndpointDto extends PartialType(CreateServiceEndpointDto) {}
