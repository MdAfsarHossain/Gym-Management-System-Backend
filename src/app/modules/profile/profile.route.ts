import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import ProfileControllers from "./profile.controller";

const router = Router();

router.post("/:id", checkAuth(Role.TRAINEE), ProfileControllers.createProfile);
router.get("/", checkAuth(Role.ADMIN), ProfileControllers.getAllProfiles);
router.patch("/:id", checkAuth(Role.TRAINEE), ProfileControllers.updateProfile);

export const ProfileRoutes = router;
