import { Controller, Get, Post, Put, Delete, Param, Query, Body } from '@nestjs/common';

@Controller('motos')
export class MotosController {
    @Get()
    getAllMot(){
        return ['cripton', 'fz', 'xtz'];
    }

    @Get(':id')
    getMotById(@Param('id') id:string){
        return `moto con id ${id}`;
    }

    @Get()
    getMotdByBrand(@Query('brand') brand:string){
        return `Buscando motos de la marca: ${brand}`;
    }


    @Post()
    createMot(@Body() body:any){
        return `moto creado con datos: ${JSON.stringify(body)}`;
    }

    @Put()
    updateMot(){
        return 'actualizando moto';
    }


    @Delete()
    deleteCar(){
        return 'moto eliminado'
    }



}
