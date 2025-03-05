import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { ServiceParametersController } from './service-parameters.controller';
import { ServiceConfigurationsController } from './service-configurations.controller';
import { ServiceParametersService } from './service-parameters.service';
import { ServiceConfigurationsService } from './service-configurations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { ServiceParameter } from './entities/service-parameters.entity';
import { ServiceConfigurations } from './entities/service-configurations.entity';
import { ServiceEndpoint } from './entities/service-endpoints.entity';
import { ServiceEndpointsController } from './service-endpoints.controller';
import { ServiceEndpointsService } from './service-endpoints.service';

@Module({
  imports: [TypeOrmModule.forFeature([Service,ServiceParameter,ServiceConfigurations,ServiceEndpoint])],
  controllers: [ServicesController,ServiceParametersController,ServiceConfigurationsController,ServiceEndpointsController],
  providers: [ServicesService,ServiceParametersService,ServiceConfigurationsService,ServiceEndpointsService],
})
export class ServicesModule {}
