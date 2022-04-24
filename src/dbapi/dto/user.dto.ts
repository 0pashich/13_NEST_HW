import { IsEmail, IsEnum, Matches } from "class-validator";
export enum SexEnum {
    male = 'male', female = 'female',
}
export class User {
    public firstName!: string;
    public lastName!: string;
    @IsEnum(SexEnum) public sex!: string;
    @Matches(/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm) public email!: string;
    @Matches(/^\$2[ayb]\$[\d]{2}\$[./A-Za-z0-9]{53}$/) public password!: string;
}