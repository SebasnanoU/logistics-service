import { ApiProperty } from '@nestjs/swagger';

export class CreateShipmentDto {
    @ApiProperty()
    sender: string;

    @ApiProperty()
    recipient: string;

    @ApiProperty()
    content: string;

    @ApiProperty()
    shippingDate: Date;

    @ApiProperty()
    distance: number;
}
