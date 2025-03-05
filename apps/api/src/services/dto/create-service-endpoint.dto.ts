import { IsString, IsEnum, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { HttpMethod } from '../enums/http-method.enum';

export class CreateServiceEndpointDto {
    @ApiProperty({
        description: 'The ID of the service',
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    @IsString()
    @IsNotEmpty()
    service_id: string;

    @ApiProperty({
        description: 'Name of the endpoint',
        example: 'getUsers'
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: 'The endpoint path',
        example: '/api/users'
    })
    @IsString()
    @IsNotEmpty()
    path: string;

    @ApiProperty({
        description: 'HTTP method',
        enum: HttpMethod,
        example: HttpMethod.GET
    })
    @IsEnum(HttpMethod)
    method: HttpMethod;

    @ApiProperty({
        description: 'Description of the endpoint',
        required: false,
        example: 'Retrieves a list of users'
    })
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty({
        description: 'Response content type',
        required: false,
        example: 'application/json'
    })
    @IsString()
    @IsOptional()
    response_content_type?: string;
}
