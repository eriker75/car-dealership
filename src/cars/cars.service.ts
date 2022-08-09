import { BadRequestException, Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

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

    public createCar( body: CreateCarDto){
        const car : Car = {
            id: uuid(),
            ...body
        }
        this.cars.push(car);
        return car;
    }

    public updateCar( id: string, body: UpdateCarDto){

        let carDB = this.findOneById(id);

        if( body.id && body.id !== id)
            throw new BadRequestException(`Car id is not valid inside body`);
        this.cars = this.cars.map( car => {
            if(car.id === id){
                carDB = {...carDB,...body,id}
                return carDB;
            }
            return car;
        })
        return carDB;
    }

    public deleteCar(id : string){
        const car = this.findOneById(id);
        this.cars = this.cars.filter(car => car.id != id);
    }
}
