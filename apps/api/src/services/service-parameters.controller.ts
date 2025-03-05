import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode } from '@nestjs/common';
import { ServiceParametersService } from './service-parameters.service';
import { CreateServiceParameterDto, UpdateServiceParameterDto } from './dto/service-parameter.dto';


@Controller('service-parameters')
export class ServiceParametersController {
    constructor(private readonly paramService: ServiceParametersService) {}

    @Post()
    create(@Body() dto: CreateServiceParameterDto) {
        return this.paramService.create(dto);
    }

    @Get()
    findAll() {
        return this.paramService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.paramService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateServiceParameterDto) {
        return this.paramService.update(id, dto);
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id: string) {
        return this.paramService.remove(id);
    }
}
