import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  car_name: string;

  @Column()
  sell_price: number;
}