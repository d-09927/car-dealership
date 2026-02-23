// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';

import { IsString, MaxLength, MinLength } from "class-validator";

export class UpdateBrandDto {
    @IsString({message: "Esta esperando un dato string"})
    @MinLength(1, {message: "debe tener mas de un caracter"})
    @MaxLength(10, {message: "debe tener maximo 10 letras"})
    name: string;
}
