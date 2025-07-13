import httpStatus from "http-status-codes";
import AppError from "../../errorHelpers/AppError";
import User from "../user/user.model";
import { IProfile } from "./profile.interface";
import Profile from "./profile.model";

const createProfile = async (userId: string, payload: Partial<IProfile>) => {
  const { firstName, lastName, phone, address } = payload;

  const userData = await User.findById(userId);
  const newProfile = {
    user: userData,
    firstName,
    lastName,
    phone,
    address,
  };
  // console.log(newProfile);

  const result = await Profile.create(newProfile);
  return result;
};

const getAllProfiles = async () => {
  // const allProfiles = await Profile.find({ "user.role": "TRAINEE" });
  const allProfiles = await Profile.find({});
  return { data: allProfiles, meta: { total: allProfiles.length } };
};

const updateProfile = async (profileId: string, payload: Partial<IProfile>) => {
  const ifProfileExist = await Profile.findById(profileId);

  if (!ifProfileExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Profile Not Found.");
  }

  const newUpdateProfile = await Profile.findByIdAndUpdate(profileId, payload, {
    new: true,
    runValidators: true,
  });

  return newUpdateProfile;
};

export const ProfileService = {
  createProfile,
  getAllProfiles,
  updateProfile,
};
