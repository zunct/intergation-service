import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServiceEndpointsService } from './service-endpoints.service';
import { CreateServiceEndpointDto } from './dto/create-service-endpoint.dto';
import { UpdateServiceEndpointDto } from './dto/update-service-endpoint.dto';

@Controller('service-endpoints')
export class ServiceEndpointsController {
    constructor(private readonly serviceEndpointsService: ServiceEndpointsService) {}

    @Post()
    create(@Body() createDto: CreateServiceEndpointDto) {
        return this.serviceEndpointsService.create(createDto);
    }

    @Get()
    findAll() {
        return this.serviceEndpointsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.serviceEndpointsService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateDto: UpdateServiceEndpointDto) {
        return this.serviceEndpointsService.update(id, updateDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.serviceEndpointsService.remove(id);
    }
}
