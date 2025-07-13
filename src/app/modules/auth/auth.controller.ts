import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../ults/catchAsync";
import { sendResponse } from "../../ults/sendResponse";
import { AuthServices } from "./auth.service";

const credentialsLogin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const loginInfo = await AuthServices.credentialsLogin(req.body);

    // res.cookie("accessToken", loginInfo.accessToken, {
    //     httpOnly: true,
    //     secure: false
    // })

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "User Logged In Successfully",
      data: loginInfo,
    });
  }
);

export const AuthControllers = {
  credentialsLogin,
};
