import { Module } from '@nestjs/common';
import { BillLogService } from './bill_log.service';
import { BillLogController } from './bill_log.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BillLogSchema } from './entities/bill_log.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'BillLog', schema: BillLogSchema }])],
  controllers: [BillLogController],
  providers: [BillLogService],
})
export class BillLogModule {}
