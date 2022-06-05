import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCreateDto } from 'src/dbapi/dto/user-create.dto';
//import { User } from 'src/dbapi/dto/user.dto';
import { Repository } from 'typeorm';
import { UsersEntity } from '../../database/entities/users.entity';
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly usersRepository: Repository<UsersEntity>,
    ) { }
    // Возвращаемое значение может быть Promise<UsersEntity|undefined>
    // Озвучить устно, что необходимо отработать крайний случай на уровне выше, если запись не произошла
    async create(user: UserCreateDto) {
        const userEntity = new UsersEntity(); 
        userEntity.firstName = user.firstName; 
        userEntity.lastName = user.lastName; 
        userEntity.email = user.email;
        userEntity.role = user.role;
        return await this.usersRepository.save(userEntity);
    }
    async findById(id: number): Promise<UsersEntity | undefined> {
        return await this.usersRepository.findOne({ id });
    }
}