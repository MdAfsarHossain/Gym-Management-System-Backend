import { model, Schema, Types } from "mongoose";
import { IBookingCreate } from "./booking.interface";

const bookingSchema = new Schema<IBookingCreate>(
  {
    classId: { type: Types.ObjectId, ref: "ClassSchedule", required: true },
    traineeId: { type: Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true, versionKey: false }
);

export const Booking = model<IBookingCreate>("Booking", bookingSchema);
