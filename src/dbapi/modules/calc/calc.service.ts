import { Injectable } from '@nestjs/common';

@Injectable()
export class CalcService {

    plus (a: number, b: number): number{
        return Number(a) + Number(b)
    }
}
