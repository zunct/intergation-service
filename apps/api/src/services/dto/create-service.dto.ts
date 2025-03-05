import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateServiceDto {
    @IsString()
    @ApiProperty({
        description: 'Service name',
        example: 'Service Name'
    })
    name: string;

    @ApiProperty({
        description: 'Service key',
        example: 'service-key'
    })
    key: string;

    @ApiProperty({
        description: 'Service description',
        example: 'This is a service description'
    })
    description: string;

    @ApiProperty({
        description: 'Service image URL',
        example: 'http://example.com/image.png'
    })
    image: string;

    @ApiProperty({
        description: 'Protocol type',
        example: 'HTTP'
    })
    protocolType: string;

    @ApiProperty({
        description: 'OAuth refresh token interval in seconds',
        example: 3600
    })
    oauthRefreshTokenInterval: number;

    @ApiProperty({
        description: 'Deleted status',
        example: false
    })
    deleted: boolean;
}
