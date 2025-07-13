import bcryptjs from "bcryptjs";
import httpstatus from "http-status-codes";
import { envVars } from "../../config/env";
import AppError from "../../errorHelpers/AppError";
import { IUser } from "./user.interface";
import User from "./user.model";

const createUser = async (payload: Partial<IUser>) => {
  const { email, password, ...rest } = payload;

  const isUserExit = await User.findOne({ email });

  if (isUserExit) {
    throw new AppError(httpstatus.BAD_REQUEST, "User Already Exist.");
  }

  const hashedPassword = await bcryptjs.hash(
    password as string,
    Number(envVars.BCRYPT_SALT_ROUND)
  );

  const user = await User.create({ email, password: hashedPassword, ...rest });

  return user;
};

const getAllUsers = async () => {
  const users = await User.find({});
  const totalUsers = await User.countDocuments();

  return {
    data: users,
    meta: {
      total: totalUsers,
    },
  };
};

const getAllTrainers = async () => {
  const users = await User.find({ role: "TRAINER" });
  // const totalUsers = await User.countDocuments();

  return {
    data: users,
    meta: {
      total: users.length,
    },
  };
};

const updateUser = async (userId: string, payload: Partial<IUser>) => {
  const ifUserExist = await User.findById(userId);

  if (!ifUserExist) {
    throw new AppError(httpstatus.NOT_FOUND, "User Not Found");
  }

  const newUpdatedUser = await User.findByIdAndUpdate(userId, payload, {
    new: true,
    runValidators: true,
  });

  return newUpdatedUser;
};

export const UserServices = {
  createUser,
  getAllUsers,
  updateUser,
  getAllTrainers,
};
