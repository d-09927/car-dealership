import { IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class updateCarDto{

    @IsString({ message: "no puede ser un dato numerico"})
    @IsNotEmpty({ message: "la marca no puede estar vacia"})
    @IsUUID()
    @IsOptional()
    readonly id: string;

    @IsString()
    @IsNotEmpty({ message: "la marca no puede estar vacia"})
    @IsOptional()
    readonly marca: string;

    @IsString({message: "no puede ser un dato numerico"})
    @IsNotEmpty({ message: "la referencia no puede estar vacia"})
    @IsOptional()
    readonly referencia: string;}


