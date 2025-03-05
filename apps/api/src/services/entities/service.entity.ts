import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ServiceEndpoint } from './service-endpoints.entity';
import { ServiceConfigurations } from './service-configurations.entity';

@Entity('services')
export class Service {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
    key: string;

    @Column({ type: 'text', nullable: true, default: null })
    description: string | null;

    @Column({ type: 'varchar', length: 512, nullable: true, default: null })
    image: string | null;

    @Column({ type: 'enum', enum: ['http', 'https'], nullable: false })
    protocolType: string;

    @Column({ type: 'int', default: 0 })
    oauthRefreshTokenInterval: number;

    @Column({ type: 'boolean', default: false })
    deleted: boolean;

    // Get service endpoints
    @OneToMany(() => ServiceEndpoint, serviceEndpoint => serviceEndpoint.service)
    endpoints: ServiceEndpoint[];
    // get ServiceConfigurations 
    @OneToMany(() => ServiceConfigurations, serviceConfigurations => serviceConfigurations.service)
    configurations: ServiceConfigurations[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}