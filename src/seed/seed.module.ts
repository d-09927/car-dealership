import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CardsModule } from 'src/cards/cards.module';
import { BrandsModule } from 'src/brands/brands.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [CardsModule],
  // imports:[BrandsModule]
})
export class SeedModule {}
