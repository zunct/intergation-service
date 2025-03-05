import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { ParameterType } from 'services/enums/parameter-type.enum';
import { ServiceEndpoint } from './service-endpoints.entity';

@Entity('service_parameters')
export class ServiceParameter {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => ServiceEndpoint, serviceEndpoint => serviceEndpoint.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'endpoint_id' })
    endpoint: ServiceEndpoint;

    @Column({ type: 'varchar', length: 255, nullable: false })
    name: string;

    @Column({ type: 'enum', enum: ParameterType, nullable: false })
    type: ParameterType;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'boolean', default: false })
    required: boolean;

    @Column({ type: 'varchar', length: 50, nullable: false })
    data_type: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
    param: { id: string; };
}