import { 
  Body, 
  Controller, 
  Delete, 
  Get, 
  NotFoundException, 
  Param, 
  ParseUUIDPipe, 
  Patch, 
  Post, 
  //UsePipes,
  //ValidationPipe
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

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
  //@UsePipes(ValidationPipe) We are replace that with a more global option
  createCar( @Body() body: CreateCarDto ) {
    return body;
  }

  @Patch(':id')
  updateCar( 
    @Param('id', new ParseUUIDPipe({version: "4"})) id: number, 
    @Body() body: CreateCarDto ) 
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
