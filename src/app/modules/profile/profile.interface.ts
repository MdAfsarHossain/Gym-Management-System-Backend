import { Types } from "mongoose";

export interface IProfile {
  user: {};
  firstName: string;
  lastName: string;
  phone?: string;
  address: string;
}
