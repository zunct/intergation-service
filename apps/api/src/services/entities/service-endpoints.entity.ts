import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Service } from './service.entity';
import { HttpMethod } from 'services/enums/http-method.enum';
import { ServiceParameter } from './service-parameters.entity';

@Entity('service_endpoints')
export class ServiceEndpoint {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Service, (service) => service.endpoints, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'service_id' })
  service: Service;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 512, nullable: false })
  path: string;

  @Column({ type: 'enum', enum: HttpMethod, nullable: false })
  method: HttpMethod;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column({ type: 'varchar', length: 255, default: 'application/json' })
  response_content_type: string;

  @OneToMany(
    () => ServiceParameter,
    (serviceParameter) => serviceParameter.endpoint,
  )
  parameters: ServiceParameter[];

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
