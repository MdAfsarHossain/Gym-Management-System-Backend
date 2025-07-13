import { model, Schema } from "mongoose";
import { IProfile } from "./profile.interface";

const profileSchema = new Schema<IProfile>(
  {
    user: {},
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String },
    address: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const Profile = model<IProfile>("Profile", profileSchema);
export default Profile;
