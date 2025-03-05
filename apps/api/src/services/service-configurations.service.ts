import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceConfigurations } from './entities/service-configurations.entity';
import { CreateServiceConfigurationDto, UpdateServiceConfigurationDto } from './dto/service-configuration.dto';
import { Service } from './entities/service.entity';

@Injectable()
export class ServiceConfigurationsService {
    constructor(
        @InjectRepository(ServiceConfigurations)
        private configRepo: Repository<ServiceConfigurations>
    ) {}

    async create(dto: CreateServiceConfigurationDto): Promise<ServiceConfigurations> {
        const config = this.configRepo.create(dto);
        config.service = { id: dto.service_id } as Service;
        return await this.configRepo.save(config);
    }

    async findAll(): Promise<ServiceConfigurations[]> {
        return await this.configRepo.find();
    }

    async findOne(id: string): Promise<ServiceConfigurations> {
        const config = await this.configRepo.findOne({ where: { id } });
        if (!config) throw new NotFoundException('Configuration not found');
        return config;
    }

    async update(id: string, dto: UpdateServiceConfigurationDto): Promise<ServiceConfigurations> {
        const config = await this.findOne(id);
        Object.assign(config, dto);
        return await this.configRepo.save(config);
    }

    async remove(id: string): Promise<void> {
        const config = await this.findOne(id);
        await this.configRepo.remove(config);
    }
}
