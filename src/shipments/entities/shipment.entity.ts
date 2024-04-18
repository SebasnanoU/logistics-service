import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Shipment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sender: string;

    @Column()
    recipient: string;

    @Column()
    content: string;

    @Column()
    shippingDate: Date;

    @Column('float')
    distance: number;

    @Column('float')
    rate: number;
}
