import {
 Injectable,
 OnModuleInit
}
from '@nestjs/common';

import {
 InjectRepository
}
from '@nestjs/typeorm';

import {
 Repository
}
from 'typeorm';

import axios from 'axios';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService implements OnModuleInit {
  constructor(
    @InjectRepository(Post)
    private repo: Repository<Post>
  ) { }
  
  async onModuleInit() {
    const count =
      await this.repo.count();
    if (count === 0) {
      await this.syncPosts();
    }
  }

  async syncPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = response.data;
    await this.repo.save(data);
  
    return {
      message: 'Posts imported',
      total: data.length
    };
  }

  async findAll(query) {
    let {
      page = 1,
      limit = 10,
      sortBy = 'id',
      order = 'ASC'
    } = query;

    const skip = (page - 1) * limit;

    const allowedSort = [
      'id',
      'userId',
      'title',
      'createdAt'
    ];

    if (!allowedSort.includes(sortBy)) { sortBy = 'id'; }

    const [data, total] = await this.repo.findAndCount({ skip, take: +limit, order: { [sortBy]: order } });
  
    return {
      page: +page,
      limit: +limit,
      total,
      pages: Math.ceil(total / limit),
      data
    };
  }
}