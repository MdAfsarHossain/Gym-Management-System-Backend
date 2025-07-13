import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../ults/catchAsync";
import { sendResponse } from "../../ults/sendResponse";
import { ProfileService } from "./profile.service";

// Create New Profile
const createProfile = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.id;
    const user = await ProfileService.createProfile(userId, req.body);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "User Profile Created Successfully.",
      data: user,
    });
  }
);

const getAllProfiles = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const allProfiles = await ProfileService.getAllProfiles();

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "All Profiles Retrived Successfully.",
      data: allProfiles.data,
      meta: allProfiles.meta,
    });
  }
);

const updateProfile = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const profileId = req.params.id;
    const payload = req.body;

    const newProfile = await ProfileService.updateProfile(profileId, payload);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Profile Updated Successfully",
      data: newProfile,
    });
  }
);

const ProfileControllers = {
  createProfile,
  getAllProfiles,
  updateProfile,
};

export default ProfileControllers;
