import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsOptional, IsUUID } from 'class-validator';

export class CreateServiceConfigurationDto {
    @IsUUID()
    @ApiProperty({
        description: 'Service ID',
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    service_id: string;

    @IsString()
    @ApiProperty({
        description: 'Name of the service configuration',
        example: 'Service Configuration Name'
    })
    name: string;

    @IsString()
    @ApiProperty({
        description: 'Key of the service configuration',
        example: 'service_key'
    })
    key: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        description: 'Description of the service configuration',
        example: 'This is a description',
        required: false
    })
    description?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        description: 'Default value of the service configuration',
        example: 'default_value',
        required: false
    })
    default_value?: string;

    @IsBoolean()
    @ApiProperty({
        description: 'Indicates if the service configuration is required',
        example: true
    })
    required: boolean;

    @IsString()
    @ApiProperty({
        description: 'Type of the service configuration',
        example: 'string'
    })
    type: string;

    @IsBoolean()
    @ApiProperty({
        description: 'Indicates if the service configuration is hidden',
        example: false
    })
    hidden: boolean;
}

export class UpdateServiceConfigurationDto extends CreateServiceConfigurationDto {
    @IsUUID()
    @ApiProperty({
        description: 'ID of the service configuration',
        example: '123e4567-e89b-12d3-a456-426614174001'
    })
    id: string;
}
