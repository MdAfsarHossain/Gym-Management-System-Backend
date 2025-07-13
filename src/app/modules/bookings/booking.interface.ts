import { Types } from "mongoose";

export interface IBookingCreate {
  classId: Types.ObjectId;
  traineeId: Types.ObjectId;
}
