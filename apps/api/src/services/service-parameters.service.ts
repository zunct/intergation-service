import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceParameter } from './entities/service-parameters.entity';
import { CreateServiceParameterDto, UpdateServiceParameterDto } from './dto/service-parameter.dto';
import { ServiceEndpoint } from './entities/service-endpoints.entity';

@Injectable()
export class ServiceParametersService {
    constructor(
        @InjectRepository(ServiceParameter)
        private paramRepo: Repository<ServiceParameter>
    ) {}

    async create(dto: CreateServiceParameterDto): Promise<ServiceParameter> {
        const param = this.paramRepo.create(dto);
        param.endpoint = { id: dto.endpoint_id } as ServiceEndpoint;
        return await this.paramRepo.save(param);
    }

    async findAll(): Promise<ServiceParameter[]> {
        return await this.paramRepo.find();
    }

    async findOne(id: string): Promise<ServiceParameter> {
        const param = await this.paramRepo.findOne({ where: { id } });
        if (!param) throw new NotFoundException('Parameter not found');
        return param;
    }

    async update(id: string, dto: UpdateServiceParameterDto): Promise<ServiceParameter> {
        const param = await this.findOne(id);
        Object.assign(param, dto);
        return await this.paramRepo.save(param);
    }

    async remove(id: string): Promise<void> {
        const param = await this.findOne(id);
        await this.paramRepo.remove(param);
    }
}
