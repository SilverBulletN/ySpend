import { IsString, IsEmail, IsNotEmpty, MinLength, IsDateString } from 'class-validator';

export class CreateUserDto {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  birthday: Date;
  avatar_url: string;
  setting_bits: number;
}

