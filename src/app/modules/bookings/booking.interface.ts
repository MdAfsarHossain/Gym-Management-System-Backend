import { Types } from "mongoose";

export interface IBookingCreate {
  classId: Types.ObjectId | any;
  traineeId: Types.ObjectId | any;
}
