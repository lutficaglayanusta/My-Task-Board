import createHttpError from "http-errors";
import Session from "../db/models/sessions.js";
import User from "../db/models/user.js";

export const authenticate = async (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    throw createHttpError(401, "Please provide Authorization header");
  }
  const bearer = authHeader.split(" ")[0];
  const token = authHeader.split(" ")[1];

  if (bearer !== "Bearer" || !token) {
    throw createHttpError(401, "Please provide bearer or token");
  }
  const session = await Session.findOne({ accessToken: token });

  const isExpired = new Date() > new Date(session.accessTokenValidUntil);

  if (isExpired) {
    throw createHttpError(401, "Access token expired");
  }
  const user = await User.findOne({ _id: session.userId });

  if (!user) {
    throw createHttpError(401, "There is no user");
  }

  req.user = user;
  next();
};
