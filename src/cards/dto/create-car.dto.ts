import { IsNotEmpty, IsString } from "class-validator";

export class createCarDto{
    @IsString()
    @IsNotEmpty({ message: "la marca no puede estar vacia"})
    readonly marca: string;

    @IsString({message: "no puede ser un dato numerico"})
    @IsNotEmpty({ message: "la referencia no puede estar vacia"})
    readonly referencia: string;}


