import { Injectable } from '@nestjs/common';
import { BRAND_SEED } from './data/brand.seed';
import { CARS_SEED } from './data/card.seed';
import { CardsService } from 'src/cards/cards.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {

  constructor(
    private readonly carService: CardsService,
    private readonly brandService: BrandsService
  ){}

  populateDB(){
    // this.carService.fillCarsWithSeedData(CARS_SEED);
    this.brandService.fillBrandWithSeedDate(BRAND_SEED);
    return 'SEED ejecutado con exito'
  }


  // create(createSeedDto: CreateSeedDto) {
  //   return 'This action adds a new seed';
  // }

//   findAll() {
//     return `This action returns all seed`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} seed`;
//   }

//   update(id: number, updateSeedDto: UpdateSeedDto) {
//     return `This action updates a #${id} seed`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} seed`;
//   }
// 
}
