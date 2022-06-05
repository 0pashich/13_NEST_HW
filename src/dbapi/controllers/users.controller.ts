import { Body, Controller, Post } from '@nestjs/common'; 
import { UsersService } from '../modules/users/users.service';
import { UsersEntity } from '../database/entities/users.entity';
import { UserCreateDto } from '../dto/user-create.dto';
@Controller('users')
export class UsersController {
constructor(private readonly usersService: UsersService) {}

@Post()
async create(@Body() user: UserCreateDto): Promise<UsersEntity> {
return this.usersService.create(user); }
}