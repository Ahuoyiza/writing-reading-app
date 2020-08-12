import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import User from "../models/Users";

dotenv.config();

export const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select({ password: 0 });

    if (!user) {
      throw new Error(); //fires the code in the catch block..
    }

    req.user = user;

    next();
  } catch (err) {
    res.json({ msg: "Not Authorized" });
  }
};
