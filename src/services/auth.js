import bcrypt from "bcrypt";
import createHttpError from "http-errors";
import { randomBytes } from "crypto";

import User from "../db/models/user.js";
import Session from "../db/models/sessions.js";
import { FIFTEEN_MINUTES, ONE_DAY } from "../constants/index.js";

export const registerService = async (payload) => {
  const user = await User.findOne({ email: payload.email });

  if (user) {
    throw createHttpError(401, "Email in already exits");
  }

  const encrypetPassword = await bcrypt.hash(payload.password, 10);

  const newUser = await User.create({ ...payload, password: encrypetPassword });

  const accessToken = randomBytes(30).toString("base64");
  const refreshToken = randomBytes(30).toString("base64");

  const session = await Session.create({
    userId: newUser._id,
    accessToken,
    refreshToken,
    accessTokenValidUntil: new Date(Date.now() + FIFTEEN_MINUTES),
    refreshTokenValidUntil: new Date(Date.now() + ONE_DAY),
  });
  return { session, newUser };
};
export const loginService = async (payload) => {
  const user = await User.findOne({ email: payload.email });

  if (!user) {
    throw createHttpError(401, "There is no user in this email.");
  }
  const compare = bcrypt.compare(payload.password, user.password);

  if (!compare) {
    throw createHttpError(401, "Password is incorrect");
  }
  await Session.deleteOne({ userId: user._id });

  const accessToken = randomBytes(30).toString("base64");
  const refreshToken = randomBytes(30).toString("base64");

  const session = await Session.create({
    userId: user._id,
    accessToken,
    refreshToken,
    accessTokenValidUntil: new Date(Date.now() + FIFTEEN_MINUTES),
    refreshTokenValidUntil: new Date(Date.now() + ONE_DAY),
  });

  return { user, session };
};
export const logoutService = async (id) => {
  await Session.deleteOne({ _id: id });
};
