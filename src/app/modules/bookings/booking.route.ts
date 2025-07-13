import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import BookingController from "./booking.controller";
// import ClassScheduleController from "./classSchedule.controller";

const router = Router();

router.post(
  "/create-booking",
  checkAuth(Role.TRAINEE),
  BookingController.createBooking
);
router.delete(
  "/cancel-booking/:id",
  checkAuth(Role.TRAINEE),
  BookingController.cancelBooking
);
router.get(
  "/all-bookings",
  checkAuth(Role.ADMIN),
  BookingController.allBookings
);

export const BookingRoutes = router;
