import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shipment } from './entities/shipment.entity';

@Injectable()
export class ShipmentsService {
    constructor(
        @InjectRepository(Shipment)
        private shipmentsRepository: Repository<Shipment>,
    ) {}

    async calculateRate(distance: number): Promise<number> {
        const baseRate = 5; // euros
        const costPerKm = 0.50; // euros
        return baseRate + (distance * costPerKm);
    }

    async createShipment(shipment: Shipment): Promise<Shipment> {
        shipment.rate = await this.calculateRate(shipment.distance);
        return this.shipmentsRepository.save(shipment);
    }

    async listShipments(): Promise<Shipment[]> {
        return this.shipmentsRepository.find();
    }
}
