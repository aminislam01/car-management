import { Module } from '@nestjs/common';
import { CentralTableService } from './central-table.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CentralTableController } from './central-table.controller';
import { CTable } from './Entities/ctable.entity';
//import { CALogin } from 'src/flight-admin-login/Entities/admin-login.entity';
//import { FlightAdminLoginService } from 'src/flight-admin-login/flight-admin-login.service';

@Module({
  imports: [TypeOrmModule.forFeature([CTable/*, CALogin*/])],
  providers: [CentralTableService/*, FlightAdminLoginService*/],
  controllers: [CentralTableController],
})
export class CentralTableModule {}
