import { Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm"
import { MessageEntity } from './message.entity';
import {Repository} from 'typeorm'


@Injectable()
export class MessageService {

    constructor(@InjectRepository(MessageEntity) private message:Repository<MessageEntity>){}

   async createMessage(msg:MessageEntity){
   
    const createdMsg=await this.message.create(msg)

    return createdMsg


    }

   async getAllMsg(){

    const getAllMsg=await this.message.find({})

    return getAllMsg

    }

   async getSingleMessage(id:number){

    const singleMsg=await this.message.findOne({where:{id}})

    }

    async updateMsg(id:number,msg:MessageEntity){

        const updatedMsg=await this.message.update(id,msg)

        return updatedMsg

    }

    async deleteMsg(id:number){

        const deletedMsg=await this.message.delete(id)

        

    }










}
