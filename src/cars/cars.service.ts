import { Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {

    private cars : Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand:'Jeep',
            model:'Cherokee'
        }
    ];

    public findAll(){
        return [...this.cars];
    }

    public findOneById(id : string){
        return this.cars.find( car => car.id === id);
    }

    public create( body: CreateCarDto){
        const car : Car = {
            id: uuid(),
            ...body
        }
        this.cars.push(car);
        return car;
    }
}
