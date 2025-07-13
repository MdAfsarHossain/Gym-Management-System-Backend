import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { sendResponse } from "../../ults/sendResponse";
import ClassSchedule from "../classSchedule/classSchedule.model";
import { Booking } from "./booking.modal";

const createBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { traineeId, classId } = req.body;
  //   console.log(result);

  const classSession = await ClassSchedule.findById(classId);
  if (!classSession) throw new Error("Class Schedule not found");
  if (classSession.bookedBy.length >= 10) {
    throw new Error("Class schedule is full. Maximum 10 trainees allowed");
  }

  const existingBooking = await Booking.findOne({
    traineeId,
    classId: {
      $in: await ClassSchedule.find({
        startTime: classSession.startTime,
        endTime: classSession.endTime,
      }).distinct("_id"),
    },
  });

  if (existingBooking) {
    throw new Error("Cannot book multiple classes in the same time slot");
  }

  const booking = await Booking.create({ traineeId, classId });
  await ClassSchedule.findByIdAndUpdate(classId, {
    $push: { bookedBy: traineeId },
  });
  //   return booking;

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Class Booking Successfully.",
    data: booking,
  });
};

const cancelBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bookingId = req.params.id;
  const { traineeId } = req.body;

  const booking = await Booking.findOneAndDelete({ _id: bookingId });
  if (!booking) throw new Error("Booking not found");
  await ClassSchedule.findByIdAndUpdate(booking.classId, {
    $pull: { bookedBy: traineeId },
  });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Booking Deleted Successfully.",
    data: booking,
  });
};

const allBookings = async (req: Request, res: Response, next: NextFunction) => {
  const bookings = await Booking.find({});

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "All Booking Retrived Successfully.",
    data: bookings,
  });
};

const BookingController = {
  createBooking,
  cancelBooking,
  allBookings,
};

export default BookingController;
