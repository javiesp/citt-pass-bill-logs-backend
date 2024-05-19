import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { BillLogService } from './bill_log.service';
import { CreateBillLogDto } from './dto/create-bill_log.dto';
import { UpdateBillLogDto } from './dto/update-bill_log.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('bill-log')
export class BillLogController {
  constructor(private readonly billLogService: BillLogService) {}

  @Post('create-bill-log')
  @MessagePattern("createBillLog")// se comunica con la api por medio de message pattern
  create(@Body() createBillLogDto: CreateBillLogDto) {
    return this.billLogService.createBillLog(createBillLogDto);
  }

  @Get('/find-all-bill-logs')
  @MessagePattern("findAllBillLogs")
  findAll() {
    return this.billLogService.findAllBillLogs();
  }

  @Get('/find-one-bill-log/:id') 
  @MessagePattern('findOneBillLog')
  findOne(id: string) {
    return this.billLogService.findOneBillLog(id);
  }

  @Put('/update-bill-log/:id')
  @MessagePattern('updateBillLog')
  update(payload) { 
    console.log(payload) 
    return this.billLogService.updateBillLog(payload.id, payload.updateBillLogDto);
  }

  @Delete('/delete-bill-log/:id')
  @MessagePattern('removeBillLog')
  remove(id: string) {
    return this.billLogService.removeBillLog(id);
  }
}
