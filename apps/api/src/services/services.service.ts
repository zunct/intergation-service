import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './entities/service.entity';

@Injectable()
export class ServicesService {
  constructor(@InjectRepository(Service) private serviceRepository: Repository<Service>) {}

  async create(createServiceDto: CreateServiceDto): Promise<Service> {
    const service = this.serviceRepository.create(createServiceDto);
    return await this.serviceRepository.save(service);
  }

  async findAll(): Promise<Service[]> {
    return await this.serviceRepository.find();
  }

  async findOne(id: string): Promise<Service> {
    return await this.serviceRepository.findOne({ where: { id }, relations: ['endpoints','endpoints.parameters'] });
  }

  async update(id: string, updateServiceDto: UpdateServiceDto): Promise<Service> {
    await this.serviceRepository.update(id, updateServiceDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.serviceRepository.delete(id);
  }
}
