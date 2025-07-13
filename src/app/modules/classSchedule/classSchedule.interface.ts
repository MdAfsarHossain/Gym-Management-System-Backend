import { Types } from "mongoose";

export interface IClassSchedule {
  title: string;
  startTime: Date;
  endTime?: Date;
  trainerId: Types.ObjectId | string;
  bookedBy: Types.ObjectId;
}
