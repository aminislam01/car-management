import { IsEnum, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';
export enum AvailabilityStatus {
 AVAILABLE = 'available',
 NOT_AVAILABLE = 'not_available',
}

export class ToggleAvailabilityDto {
 @IsEnum(AvailabilityStatus)
 @IsNotEmpty()
 @Transform(({ value }) => {
   return typeof value === 'string' ? value.toLowerCase() : value;
 })
 availability: AvailabilityStatus;
}