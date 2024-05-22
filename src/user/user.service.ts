import { HttpException, HttpStatus, Injectable, NotImplementedException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async addUser(email: string): Promise<User> {
        const res = await this.prisma.user.create({
            data:{
                email: email
            }
        })
        return res
        //throw new NotImplementedException();
    }

    async getUser(email: string): Promise<User> {
        try {
            const res = await this.prisma.user.findFirst({
                where: {email:email}
            })
            return res
        } catch (e) {
            if (e instanceof PrismaClientKnownRequestError){
                throw new HttpException(
                    "The user doesn't exist!",
                    HttpStatus.BAD_REQUEST
                )
            }
        }
        //throw new NotImplementedException();
    }

    async resetData(): Promise<unknown> {
        return await this.prisma.user.deleteMany({})
        //throw new NotImplementedException();
    }
}
