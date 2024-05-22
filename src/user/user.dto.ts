import { HttpStatus } from "@nestjs/common"
import {IsEmail, isEmail, IsString } from "class-validator"

export class UserDto {
    @IsEmail()
    email:string
}