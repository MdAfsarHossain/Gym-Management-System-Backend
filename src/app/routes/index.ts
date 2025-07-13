import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { BookingRoutes } from "../modules/bookings/booking.route";
import { ClassScheduleRoutes } from "../modules/classSchedule/classSchedule.route";
import { ProfileRoutes } from "../modules/profile/profile.route";
import { UserRoutes } from "../modules/user/user.route";

export const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/class-schedule",
    route: ClassScheduleRoutes,
  },
  {
    path: "/booking",
    route: BookingRoutes,
  },
  {
    path: "/profile",
    route: ProfileRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  // {
  //     path: "/tour",
  //     route: TourRoutes
  // },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

// router.use("/user", UserRoutes)
// router.use("/tour", TourRoutes)
// router.use("/division", DivisionRoutes)
// router.use("/booking", BookingRoutes)
// router.use("/user", UserRoutes)
