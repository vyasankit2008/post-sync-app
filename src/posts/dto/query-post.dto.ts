import {
 IsOptional,
 IsNumberString,
 IsString
}
from 'class-validator';

export class QueryPostDto{

    @IsOptional()
    @IsNumberString()
    page?:number;

    @IsOptional()
    @IsNumberString()
    limit?:number;

    @IsOptional()
    @IsString()
    sortBy?:string;

    @IsOptional()
    @IsString()
    order?:'ASC'|'DESC';

}