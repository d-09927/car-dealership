import { Controller, Get, Post, Put, Delete, Param, Query, Body, ParseIntPipe, UsePipes, ValidationPipe, Patch, ParseUUIDPipe  } from '@nestjs/common';
import { CardsService } from './cards.service';
import { createCarDto } from './dto/create-car.dto';
import { updateCarDto } from './dto/update-car.dto';

@Controller('cards')
@UsePipes(ValidationPipe)
export class CardsController {
    // @Get()
    // getAllCar(){
    //     return ['mazda', 'ford', 'toyota'];
    // }

    // @Get(':id')
    // getCarById(@Param('id') id:string){
    //     return `carro con id ${id}`;
    // }

    // @Get()
    // getCardByBrand(@Query('brand') brand:string){
    //     return `Buscando carros de la marca: ${brand}`;
    // }



    // @Put()
    // updateCar(){
    //     return 'actualizando coche';
    // }







    // private cards = ['Mazda', 'Toyota', 'Ford'];

    constructor(
        private readonly cardServices:CardsService
    ){}

    @Get()
    getAllCars(){
        return this.cardServices.findAll();
    }

    @Get(':id')
    getCardById(@Param('id', ParseUUIDPipe) id:string){                //se le palica el filtro y se le da formato de numeero
        // const idCar = Number(id);
        // const cards = this.cards[idCar];
        console.log(typeof(id));
        return this.cardServices.findOneById(id)
        // return `el carro con id ${id} es: ${this.cardServices[+id - 1]}`;
    }



    @Post()
    create(@Body() createCarDto:createCarDto){
        return this.cardServices.create(createCarDto);
    };

    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe) id:string,
        @Body()updateCarDto:updateCarDto
    ){
        return this.cardServices.create(updateCarDto);
    }


    @Delete(':id')
    deleteCar(@Param('id') id: string) {
    return 'coche eliminado';
    }

}

