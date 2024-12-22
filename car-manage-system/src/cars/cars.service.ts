import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './entities/car.entity';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { AvailabilityStatus } from './dto/toggle-availability.dto';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
  ) {}

  findAll(): Promise<Car[]> {
    return this.carRepository.find();
  }

  findOne(id: number): Promise<Car> {
    return this.carRepository.findOneBy({ id });
  }

  async findByRegistrationNo(registrationNo: string): Promise<Car | null> {
    return await this.carRepository
      .createQueryBuilder('car')
      .where('car.registration_no = :registrationNo', { registrationNo })
      .getOne();
  }

  create(createCarDto: CreateCarDto): Promise<Car> {
    const newCar = this.carRepository.create(createCarDto);
    return this.carRepository.save(newCar);
  }

  async update(id: number, updateCarDto: UpdateCarDto): Promise<Car> {
    await this.carRepository.update(id, updateCarDto);
    return this.carRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.carRepository.delete(id);
  }

  async toggleAvailability(id: number, availability: AvailabilityStatus): Promise<Car> {
    const car = await this.carRepository.findOneBy({ id });
    
    if (!car) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }
     car.availability = availability;
    return this.carRepository.save(car);
  }
   async getAvailabilityStatus(id: number): Promise<{ availability: string }> {
    const car = await this.carRepository.findOneBy({ id });
    
    if (!car) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }
     return { availability: car.availability };
  }
}
