import { IsMongoId, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateOrderDto {
    @IsMongoId()
    @IsNotEmpty()
    readonly productId: string;

    @IsNumber()
    @Min(1)
    readonly quantity: number = 1;
}
