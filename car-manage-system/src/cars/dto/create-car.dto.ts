import { IsString, IsNumber, IsEnum, IsInt, Min, Max } from 'class-validator';

export class CreateCarDto {
  @IsString()
  model: string;

  @IsString()
  manufacture: string;

  @IsString()
  registration_no: string;

  @IsString()
  type: string;

  @IsInt()
  @Min(1886)
  @Max(new Date().getFullYear())
  year: number;

  @IsEnum(['available', 'not_available'])
  availability: string;

  @IsNumber()
  @Min(0)
  price: number;
}
