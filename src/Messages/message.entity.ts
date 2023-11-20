import { Entity ,PrimaryGeneratedColumn,Column} from "typeorm";
import {IsString} from "class-validator"

@Entity()
export class MessageEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    @IsString()
    messsage:string


}