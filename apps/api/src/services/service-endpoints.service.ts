import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceEndpoint } from './entities/service-endpoints.entity';
import { CreateServiceEndpointDto } from './dto/create-service-endpoint.dto';
import { UpdateServiceEndpointDto } from './dto/update-service-endpoint.dto';
import { Service } from './entities/service.entity';

@Injectable()
export class ServiceEndpointsService {
    constructor(
        @InjectRepository(ServiceEndpoint)
        private serviceEndpointRepository: Repository<ServiceEndpoint>,
    ) {}

    async create(createDto: CreateServiceEndpointDto): Promise<ServiceEndpoint> {
        const { service_id, ...createEndpointDto } = createDto;
        const endpoint = this.serviceEndpointRepository.create(createEndpointDto);
        endpoint.service = { id: service_id } as Service;
        return await this.serviceEndpointRepository.save(endpoint);
    }

    async findAll(): Promise<ServiceEndpoint[]> {
        return await this.serviceEndpointRepository.find();
    }

    async findOne(id: string): Promise<ServiceEndpoint> {
        const endpoint = await this.serviceEndpointRepository.findOne({ where: { id } });
        if (!endpoint) {
            throw new NotFoundException(`Service endpoint with ID ${id} not found`);
        }
        return endpoint;
    }

    async update(id: string, updateDto: UpdateServiceEndpointDto): Promise<ServiceEndpoint> {
        const endpoint = await this.findOne(id);
        Object.assign(endpoint, updateDto);
        return await this.serviceEndpointRepository.save(endpoint);
    }

    async remove(id: string): Promise<void> {
        const result = await this.serviceEndpointRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Service endpoint with ID ${id} not found`);
        }
    }
}
