import { Controller,Get,Put,Delete,Post,Param} from '@nestjs/common';
import { MessageService } from './message.service';


@Controller('message')
export class MessageController {

    constructor(private msg:MessageService){}

    @Get()
    async getAll(){
        return this.msg.getAllMsg()
    }

    @Post(":id")
    async getSingleMsg(@Param("id") id:number){
        return this.msg.getSingleMessage(id)
    }

    @Delete(":id")
    async deleteOne(@Param("id") id:number){
       
        

    }


}
