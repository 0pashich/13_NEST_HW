import { Controller, Patch, Post, Put, Query, Req } from '@nestjs/common';
import { CalcService } from '../modules/calc/calc.service';
import { Request } from 'express';

@Controller('calc')
export class CalcController {
    constructor(private calcService: CalcService) {}
    
    
        @Put() 
        async calc(@Req() request: Request, @Query() query: { key1: number , key2: number }): Promise<number| undefined> {
        if ( request.headers['type-operation'] === 'plus' ) return this.calcService.plus(query.key1, query.key2);
        return undefined;
        }

        @Patch()
        async pcalc(@Req() request: Request, @Query() query: { key1: number , key2: number }): Promise<number| undefined> {
        if ( request.headers['type-operation'] === 'plus' ) return this.calcService.plus(query.key1, query.key2);
        return undefined;
        }

}
