import { Injectable, NotAcceptableException } from '@nestjs/common';
import {Car} from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { createCarDto } from './dto/create-car.dto';
import { updateCarDto } from './dto/update-car.dto';


@Injectable()
export class CardsService {

    private cards:Car[] =[
        {
            id: uuid(),
            marca: "Toyota",
            referencia: "Corolla"
        },

        {
            id: uuid(),
            marca: "Mazda",
            referencia: "Rx7"
        },

        {
            id: uuid(),
            marca: "Ford",
            referencia: "Focus titanium"
        },

    ];

    create(createCarDto: createCarDto){

        const newCar: Car = {
            id: uuid(),
            ...createCarDto
        };
        this.cards.push(newCar);

        console.log(this.cards);

        return newCar;
    }

    update( id: string, updateCarDto: updateCarDto){

        let carDB= this.findOneById(id);

        this.cards = this.cards.map(car => {
            if (car.id ===id){
                carDB = {...carDB,...updateCarDto, id};
                return carDB;
            }
            return car;
        });

        return carDB;

    }

    findAll() {
    return this.cards;
    }

    findOneById(id:string){
        // return this.cards[id - 1]
        const car = this.cards.find(car => car.id ===id)

        if(!car){
            throw new NotAcceptableException(`El carro con id: ${id} no esta disponible`)
        }
        else{
            console.log ("todo va bien", car)
            return car;
        }

    }



};
