import {IsNumber, IsNotEmpty, IsEnum, validate, validateOrReject, IsOptional} from "class-validator";
import {Rating, AccessType} from "../models/rating.model";

export interface ICreateRatingDto extends Omit<Rating, 'id'> {
}

export class CreateRatingDto implements ICreateRatingDto {

    @IsEnum(AccessType)
    @IsOptional()
    access!: AccessType;
    @IsNumber()
    @IsNotEmpty()
    count!: number;

    @IsNumber()
    @IsNotEmpty()
    rate!: number;

}

(async () => {
    try {
        const dto = new CreateRatingDto();
        dto.rate = 1;
        await validateOrReject(dto)
    } catch (error) {
        console.log(error)
    }

})();