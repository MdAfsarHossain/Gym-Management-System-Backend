import ClassSchedule from "./classSchedule.model";

const getAllClassSchedule = async () => {
  const result = await ClassSchedule.find({});
  return result;
};

const getSpecificTrainerAllClassSchedule = async (trainerId: string) => {
  const result = await ClassSchedule.find({ trainerId });
  return result;
};

export const ClassScheduleService = {
  getAllClassSchedule,
  getSpecificTrainerAllClassSchedule,
};
