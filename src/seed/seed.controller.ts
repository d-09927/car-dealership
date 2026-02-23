import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeedService } from './seed.service';
import { CardsService } from 'src/cards/cards.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  // @Post()
  // create(@Body() createSeedDto: CreateSeedDto) {
  //   return this.seedService.create(createSeedDto);
  // }

  @Get()
  runSeed() {
    return this.seedService.populateDB();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.seedService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSeedDto: UpdateSeedDto) {
  //   return this.seedService.update(+id, updateSeedDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.seedService.remove(+id);
  // }
}
