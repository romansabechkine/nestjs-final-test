import { Controller, Get, Post, Body, UsePipes, ValidationPipe, HttpCode, Param, ParseIntPipe, HttpException, HttpStatus, Delete } from '@nestjs/common';

import { TaskService } from './task.service';
import { getTaskDto, TaskDto } from './task.dto';
import { isTransformabletoPositiveInt } from './task.verification';


@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getTask(@Body() dto: getTaskDto) {
    const name = dto.name
    return await this.taskService.getTaskByName(name)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(201)
  @Post()
  async addTask(@Body() dto: TaskDto){
    const name = dto.name
    const userId = dto.userId
    const priority = dto.priority
    

    if (!isTransformabletoPositiveInt(priority)) {
        throw new HttpException(
            "Not valid priority!",
            HttpStatus.BAD_REQUEST) 
    }
    return await this.taskService.addTask(name, userId, parseInt(priority))
    }  
  

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Get('/user/:id')
  async getUserTasks( @Param('id') userId: string) {
   
    const tasks = await this.taskService.getUserTasks(userId)
    /*if (tasks.length == 0) {
        throw new HttpException(
            "Not valid user!",
            HttpStatus.BAD_REQUEST
        )
    }*/
    return tasks
  }

  @Delete('/delete')
  async deleteAllTasks() {
    return this.taskService.resetData()
  }
}
