import { Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

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
}
