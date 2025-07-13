import { model, Schema } from "mongoose";
import { IBookingCreate } from "./booking.interface";

const bookingSchema = new Schema<IBookingCreate>(
  {
    classId: {
      type: Schema.Types.ObjectId,
      ref: "ClassSchedule",
      required: true,
    },
    traineeId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true, versionKey: false }
);

export const Booking = model<IBookingCreate>("Booking", bookingSchema);
