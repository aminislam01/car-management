import { Controller, Get, Post, Put, Delete, Param, Body, Query, NotFoundException, Patch } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { ToggleAvailabilityDto } from './dto/toggle-availability.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get('search')
async searchCar(@Query('registration_no') registrationNo: string) {
  const car = await this.carsService.findByRegistrationNo(registrationNo);
  if (!car) {
    throw new NotFoundException('Invalid registration number!');
  }
  return car;
}

  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.carsService.findOne(id);
  }

  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.carsService.remove(id);
  }

  @Patch(':id/toggle-availability')  // Make sure this decorator is present
  async toggleAvailability(
    @Param('id') id: number,
    @Body() toggleAvailabilityDto: ToggleAvailabilityDto,
  ) {
    return this.carsService.toggleAvailability(
      id,
      toggleAvailabilityDto.availability,
    );
  }
   @Get(':id/availability')
  async getAvailability(@Param('id') id: number) {
    return this.carsService.getAvailabilityStatus(id);
  }
}
