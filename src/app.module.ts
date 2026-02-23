import { Module } from '@nestjs/common';
import { CardsModule } from './cards/cards.module';
import { MotosModule } from './motos/motos.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    CardsModule,
    MotosModule,
    BrandsModule,
    SeedModule
  ], 
  exports:[], //permite que otros modules usen este module
  controllers: [],  //definien los  controladores del modulo
  providers: [], //definien los serviciones o proveedores
})
export class AppModule {} //declaramos el modulo
