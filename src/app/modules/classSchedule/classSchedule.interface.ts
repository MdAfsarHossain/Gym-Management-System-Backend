import { Types } from "mongoose";

export interface IClassSchedule {
  // startTime: Date;
  // trainerId: Types.ObjectId;
  // trainees: Types.ObjectId;
  title: string;
  startTime: Date;
  endTime?: Date;
  trainerId: Types.ObjectId | string;
  bookedBy: Types.ObjectId;
}
