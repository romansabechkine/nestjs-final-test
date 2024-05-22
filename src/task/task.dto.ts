import { IsNumber, IsString } from "class-validator"

export class TaskDto {
    @IsString()
    name:string
    @IsString()
    userId:string
    @IsString()
    priority:string
}

export class getTaskDto {
    @IsString()
    name:string
}