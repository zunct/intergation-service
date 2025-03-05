import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Service } from './service.entity';

@Entity('service_configurations')
export class ServiceConfigurations {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Service, service => service.configurations, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'service_id' })
    service: Service;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    key: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'varchar', length: 512, nullable: true })
    default_value: string;

    @Column({ type: 'boolean', default: false })
    required: boolean;

    @Column({ type: 'varchar', length: 50 })
    type: string; // 'TEXTFIELD', 'BOOLEAN', 'PASSWORD'

    @Column({ type: 'boolean', default: false })
    hidden: boolean;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
}