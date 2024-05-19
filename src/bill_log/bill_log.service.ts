import { Injectable } from '@nestjs/common';
import { CreateBillLogDto } from './dto/create-bill_log.dto';
import { UpdateBillLogDto } from './dto/update-bill_log.dto';
import { BillLog } from './entities/bill_log.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BillLogService {
  constructor(@InjectModel(BillLog.name) private readonly billLogModel: Model<BillLog>) {}

  async createBillLog(createBillLogDto: CreateBillLogDto): Promise<BillLog> {
    const createdBillLog = new this.billLogModel(createBillLogDto).save();
    console.log(createBillLogDto)
    return createdBillLog;
  }

  async findAllBillLogs() : Promise<BillLog[]>{
    return await this.billLogModel.find().exec();
  }

  async findOneBillLog(id: string): Promise<BillLog> {
    return await this.billLogModel.findById(id).exec();
  }

  async updateBillLog(id: string, updateBillLogDto: UpdateBillLogDto): Promise<BillLog> {
    return await this.billLogModel.findByIdAndUpdate(id, updateBillLogDto, { new: true }).exec();
  }

  async removeBillLog(id: string): Promise<BillLog> {
    return await this.billLogModel.findByIdAndDelete(id).exec();
  }
}
