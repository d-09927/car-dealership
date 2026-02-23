import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateBrandDto {
    @IsString({message: "Esta esperando un dato string"})
    @MinLength(1, {message: "debe tener mas de un caracter"})
    @MaxLength(5, {message: "debe tener maximo 5 letras"})
    name: string;
}
