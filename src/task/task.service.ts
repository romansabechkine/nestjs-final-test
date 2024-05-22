import { HttpException, HttpStatus, Injectable, NotImplementedException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Task } from '@prisma/client';
import { isInstance } from 'class-validator';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class TaskService {
    constructor(private prisma: PrismaService){}

    async addTask(name: string, userId: string, priority: number): Promise<Task> {
        return await this.prisma.task.create({
            data: {
                name: name,
                priority: priority,
                user: {
                    connect: {
                        id: userId,
                    }
                }
            }})
         
        //throw new NotImplementedException();
    }

    async getTaskByName(name: string): Promise<Task> {
        return await this.prisma.task.findFirst({
            where: {
                name: name, 
            }
        })
        //throw new NotImplementedException();
    }

    async getUserTasks(userId: string): Promise<Task[]> {
        const user = await this.prisma.user.findFirst({
        where: {
            id: userId
        }})

        if(user == null){
            throw new HttpException(
                "Not valid user!",
                HttpStatus.BAD_REQUEST
            )}
        
        return await this.prisma.task.findMany({
            where: {
              userId:userId,
            }
          })
        //throw new NotImplementedException();
    }

    async resetData(): Promise<unknown> {
        return await this.prisma.task.deleteMany({})
        //throw new NotImplementedException();
    }
}
