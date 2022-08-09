import {IsString, IsNotEmpty, IsOptional, IsUUID, IsInt } from 'class-validator';
export class CreateBrandDto {

    @IsUUID()
    @IsString()
    readonly id: string;

    @IsString()
    @IsNotEmpty()
    readonly brand: string;

    @IsInt()
    @IsNotEmpty()
    readonly createdAt: number;

    @IsInt()
    @IsOptional()
    readonly updatedAt?: number;
}
