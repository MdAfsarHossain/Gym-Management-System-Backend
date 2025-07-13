import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import moment from "moment";
import AppError from "../../errorHelpers/AppError";
import { sendResponse } from "../../ults/sendResponse";
import ClassSchedule from "./classSchedule.model";
import { ClassScheduleService } from "./classSchedule.service";

const createSchedule = async (
  date: Date,
  startTime: Date,
  endTime: Date,
  trainerId: string
) => {
  // Check if date already has 5 schedules
  const daySchedules = await ClassSchedule.countDocuments({ date });
  if (daySchedules >= 5) {
    throw new AppError(
      400,
      "Schedule limit reached",
      "Maximum 5 schedules allowed per day"
    );
  }

  // Check for time conflicts
  const conflictingSchedule = await ClassSchedule.findOne({
    date,
    $or: [{ startTime: { $lt: endTime }, endTime: { $gt: startTime } }],
  });

  if (conflictingSchedule) {
    throw new AppError(
      400,
      "Time conflict",
      "This time slot overlaps with an existing schedule"
    );
  }

  const schedule = new ClassSchedule({
    date,
    startTime,
    endTime,
    trainer: trainerId,
  });

  return await schedule.save();
};

const getSchedules = async (filter: any = {}) => {
  return await ClassSchedule.find(filter)
    .populate("trainer", "email profile")
    .exec();
};

const createClassSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = req.body;
  // console.log(result);

  // const scheduleDate = moment(result.startTime).startOf("day");
  // const daySchedules = await ClassSchedule.countDocuments({
  //   date: {
  //     $gte: scheduleDate.toDate(),
  //     $lt: scheduleDate.add(1, "day").toDate(),
  //   },
  // });

  // if (daySchedules >= 5) {
  //   return {
  //     success: false,
  //     statusCode: 400,
  //     message: "Schedule limit exceeded. Maximum 5 schedules per day allowed.",
  //   };
  // }

  // console.log("78 Line");

  // // console.log("Schedule Date: ", scheduleDate);
  // // console.log("DaySchedule: ", daySchedules);

  // const startTime = new Date(result.startTime);
  // const endTime = new Date(result.endTime);
  // console.log(startTime, endTime);

  // console.log("86 Line");
  // // Check if duration is 2 hours
  // const duration = (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60);
  // console.log("89 Line");
  // console.log(duration);
  // if (duration !== 2) {
  //   return {
  //     success: false,
  //     statusCode: 400,
  //     message: "Class duration must be exactly 2 hours",
  //     errorDetails: "Each class schedule must last for 2 hours",
  //   };
  // }

  // console.log("97 Line");

  // // Check for time conflicts
  // const conflictingSchedule = await ClassSchedule.findOne({
  //   trainerId: result.trainerId,
  //   $or: [
  //     {
  //       startTime: { $lt: endTime },
  //       endTime: { $gt: startTime },
  //     },
  //   ],
  // });

  // if (conflictingSchedule) {
  //   return {
  //     success: false,
  //     statusCode: 400,
  //     message: "Time conflict detected",
  //     errorDetails: "Trainer already has a class scheduled at this time",
  //   };
  // }

  // console.log("115 Line");

  // const schedule = await ClassSchedule.create({
  //   // ...scheduleData,
  //   // adminId,
  //   result,
  //   date: scheduleDate.toDate(),
  // });

  // const populatedSchedule = await ClassSchedule.findById(schedule._id)
  //   .populate("trainerId", "name email")
  //   .populate("adminId", "name email");

  // return {
  //   success: true,
  //   statusCode: 201,
  //   message: 'Class schedule created successfully',
  //   data: populatedSchedule
  // };

  const startDate = moment(result.startTime).startOf("day");
  const classCount = await ClassSchedule.countDocuments({
    startTime: {
      $gte: startDate.toDate(),
      $lt: startDate.add(1, "day").toDate(),
    },
  });

  if (classCount >= 5) {
    throw new Error("Maximum 5 classes per day allowed");
  }

  const endTime = moment(result.startTime).add(2, "hours").toDate();
  const populatedSchedule = await ClassSchedule.create({ ...result, endTime });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Class Schedule Created Successfully.",
    data: populatedSchedule,
  });
};

const getAllClassSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const trainerId = req.params.id;

  const result = await ClassScheduleService.getAllClassSchedule();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "All Classes Schedule Retrived Successfully.",
    data: result,
  });
};

const getSpecificTrainerAllClassSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const trainerId = req.params.id;

  const result = await ClassScheduleService.getSpecificTrainerAllClassSchedule(
    trainerId
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Retrived Specific Trainer All Classes Successfully.",
    data: result,
  });
};

const ClassScheduleController = {
  createSchedule,
  createClassSchedule,
  getAllClassSchedule,
  getSpecificTrainerAllClassSchedule,
};

export default ClassScheduleController;
