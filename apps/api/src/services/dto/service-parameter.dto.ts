import { IsString, IsBoolean, IsOptional, IsEnum, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ParameterType } from '../enums/parameter-type.enum';
import { DataType } from 'services/enums/data-type.enum';

export class CreateServiceParameterDto {
    @ApiProperty({
        description: 'ID of the service endpoint this parameter belongs to',
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    @IsUUID()
    endpoint_id: string;

    @ApiProperty({
        description: 'Name of the parameter',
        example: 'api_key'
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: 'Type of the parameter (HEADER, QUERY, BODY, PATH)',
        example: ParameterType.HEADER,
        enum: ParameterType
    })
    @IsEnum(ParameterType)
    type: ParameterType;

    @ApiProperty({
        description: 'Description of the parameter',
        example: 'API key for authentication',
        required: false
    })
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty({
        description: 'Whether the parameter is required',
        example: true
    })
    @IsBoolean()
    required: boolean;

    @ApiProperty({
        description: 'Data type of the parameter',
        example: 'string'
    })
    @IsString()
    data_type: DataType;
}

export class UpdateServiceParameterDto extends CreateServiceParameterDto {
    @ApiProperty({
        description: 'ID of the service parameter to update',
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    @IsUUID()
    id: string;
}
