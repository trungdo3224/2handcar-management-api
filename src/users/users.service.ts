import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(email: string, password: string) {
    const user = this.repo.create({ email, password });
 
    return this.repo.save(user);
  }

  async findOne(id: number) {
    const findOptions = {
      where: {
        id,
      }
    }
    const user = await this.repo.findOne(findOptions);
    return user;
  }
  
  find(email: string) {
    const findOptions = {
      where: {
        email
      }
    }
    return this.repo.find(findOptions)
  }

  update(id: number) {}

  remove(id: number) {}

}
