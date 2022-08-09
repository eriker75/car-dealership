import { 
  Body, 
  Controller, 
  Delete, 
  Get, 
  NotFoundException, 
  Param, 
  ParseUUIDPipe, 
  Patch, 
  Post 
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

  public constructor(private readonly carService : CarsService){}

  @Get()
  getAllcars() {
    return this.carService.findAll();
  }

  @Get(':id')
  getCardById(@Param('id', new ParseUUIDPipe({version: "4"})) id : string){
    const car = this.carService.findOneById(id);
    if(!car) throw new NotFoundException(`Car with id '${id}' not found`);
    return car;
  }

  @Post()
  createCar( @Body() body: any ) {
    return body;
  }

  @Patch(':id')
  updateCar( 
    @Param('id', new ParseUUIDPipe({version: "4"})) id: number, 
    @Body() body: any ) 
  {
    return body;
  }

  @Delete(':id')
  deleteCar( @Param('id', new ParseUUIDPipe({version: "4"}) ) id: number ) {
    return {
      method: 'delete',
      id
    };
  }

}
