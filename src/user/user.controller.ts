import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { isValidEmail } from './user.verification';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(201)
  async addUser( @Body() dto: UserDto) {
    const email = dto.email
    if (!isValidEmail(email)) {
        throw new HttpException(
            "Invalid email!",
            HttpStatus.BAD_REQUEST,
        )
    }
    try {
      const res = await this.userService.addUser(email)
      return res
    } catch(e){
      if (e instanceof PrismaClientKnownRequestError) {
        throw new HttpException(
          "User already exists!",
          HttpStatus.CONFLICT)
      }
    }
  }

  @Get()
  async getUser(@Body() dto: UserDto) {
    const email = dto.email
    return this.userService.getUser(email)
  }

  @Delete('/delete')
  async deleteAllUsers() {
    return this.userService.resetData()
  }

}
