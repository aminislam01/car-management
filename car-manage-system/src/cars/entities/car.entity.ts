import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  model: string;

  @Column({ type: 'varchar', length: 50 })
  manufacture: string;

  @Column({ type: 'varchar', length: 20 })
  registration_no: string;

  @Column({ type: 'varchar', length: 20 })
  type: string;

  @Column({ type: 'int' })
  year: number;

  @Column({
    type: 'enum',
    enum: ['available', 'not_available'],
    default: 'available',
  })
  availability: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}
