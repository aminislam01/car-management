import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { CarsModule } from './cars/cars.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { Car } from './cars/entities/car.entity';
import { CentralTableModule } from './central-table/central-table.module';
import { CTable } from './central-table/Entities/ctable.entity';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', 
      password: '0000', 
      database: 'car_db', 
      entities: [Car,CTable,User],
      synchronize: true, 
      logging: true,
    }),
    UserModule,
    AuthModule,
    CarsModule,
    CentralTableModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
