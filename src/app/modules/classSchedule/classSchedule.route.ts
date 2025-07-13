import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import ClassScheduleController from "./classSchedule.controller";

const router = Router();

router.post(
  "/create-schedule",
  checkAuth(Role.ADMIN),
  ClassScheduleController.createClassSchedule
);
router.get(
  "/",
  checkAuth(Role.ADMIN),
  ClassScheduleController.getAllClassSchedule
);
router.get(
  "/:id",
  checkAuth(Role.ADMIN, Role.TRAINER),
  ClassScheduleController.getSpecificTrainerAllClassSchedule
);

export const ClassScheduleRoutes = router;
