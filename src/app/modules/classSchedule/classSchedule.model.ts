import { model, Schema } from "mongoose";
import { IClassSchedule } from "./classSchedule.interface";

// models/classSchedule.js
const classScheduleSchema = new Schema<IClassSchedule>(
  {
    title: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    trainerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    bookedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true, versionKey: false }
);

const ClassSchedule = model("ClassSchedule", classScheduleSchema);

export default ClassSchedule;
