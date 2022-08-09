import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from './dto';
import { v4 as uuid } from 'uuid';
import { Brand as BrandInterface } from './interfaces/brand.interface';
import { Brand as BrandEntity } from './entities/brand.entity';

@Injectable()
export class BrandService {

  private brands : BrandInterface[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime()
    }
  ]

  create(createBrandDto: CreateBrandDto) {
    const brand: BrandInterface = {
      id: uuid(),
      ...createBrandDto,
    }
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    return this.brands.find( car => car.id === id);
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let carDB = this.findOne(id);

    if( updateBrandDto.id && updateBrandDto.id !== id)
      throw new BadRequestException(`Car id is not valid inside body`);
    
    this.brands = this.brands.map( car => {
      if(car.id === id){
        carDB = {...carDB,...updateBrandDto,id}
        return carDB;
      }
      return car;
    })
    return carDB;
  }

  remove(id: string) {
    const car = this.findOne(id);
    this.brands = this.brands.filter(car => car.id != id);
  }
}
