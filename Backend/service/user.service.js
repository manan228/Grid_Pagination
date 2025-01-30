import Grid from "../models/grid.model.js";

export const getTotalUserNumber = async () => {
  try {
    const totalUsers = await Grid.countDocuments();
    return totalUsers;
  } catch (err) {
    console.log(err);
  }
};

export const getUserInRange = async (page, range) => {
  try {
    const users = await Grid.find()
      .skip((page - 1) * range)
      .limit(range);

    return users;
  } catch (err) {
    console.log(err);
  }
};
