import { Controller, Post, Get, Body } from '@nestjs/common';
import { ShipmentsService } from './shipments.service';
import { Shipment } from './entities/shipment.entity';

@Controller('shipments')
export class ShipmentsController {
    constructor(private readonly shipmentsService: ShipmentsService) {}

    @Post()
    create(@Body() shipmentDto: Shipment) {
        return this.shipmentsService.createShipment(shipmentDto);
    }

    @Get()
    findAll() {
        return this.shipmentsService.listShipments();
    }
}