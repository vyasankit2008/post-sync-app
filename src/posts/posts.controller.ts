import {
 Controller,
 Get,
 Post
}
from '@nestjs/common';

import {
 PostsService
}
from './posts.service';

import {
 Query
}
from '@nestjs/common';

import {
 QueryPostDto
}
from './dto/query-post.dto';

@Controller('posts')
export class PostsController{
    constructor(
    private service:PostsService
    ) { }
    
    @Post('sync')
    sync(){
        return this.service.syncPosts();
    }

    @Get()
    getPosts(
    @Query() query:QueryPostDto
    ){
        return this.service.findAll(query);
    }
}