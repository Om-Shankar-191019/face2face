import User from "../models/user.model.js";

export const getUsers = async (req, res, next) => {
  try {
    const loggedInUserId = req.user._id;
    const allUsersExceptMe = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");
    res.status(200).json(allUsersExceptMe);
  } catch (error) {
    next(error);
  }
};
