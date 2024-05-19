import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type ProductDocument = HydratedDocument<BillLog>;

@Schema()
export class BillLog {

    @Prop()
    proyect_id: number;

    @Prop()
    uid_user: string;

    @Prop()
    item: string[];

    @Prop()
    total_amount: number;

    @Prop()
    d_number: number;

    @Prop()
    log_date: Date;

}

export const BillLogSchema = SchemaFactory.createForClass(BillLog);
