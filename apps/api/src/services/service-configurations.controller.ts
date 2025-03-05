import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode } from '@nestjs/common';
import { ServiceConfigurationsService } from './service-configurations.service';
import { CreateServiceConfigurationDto, UpdateServiceConfigurationDto } from './dto/service-configuration.dto';

@Controller('service-configurations')
export class ServiceConfigurationsController {
    constructor(private readonly configService: ServiceConfigurationsService) {}

    @Post()
    create(@Body() dto: CreateServiceConfigurationDto) {
        return this.configService.create(dto);
    }

    @Get()
    findAll() {
        return this.configService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.configService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateServiceConfigurationDto) {
        return this.configService.update(id, dto);
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id: string) {
        return this.configService.remove(id);
    }
}
