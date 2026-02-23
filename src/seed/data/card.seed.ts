import { Car } from "src/cards/interfaces/car.interface";
import { v4 as uuid } from "uuid";

export const CARS_SEED: Car[]=[
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
]