import { ONE_DAY } from "../constants/index.js";
import {
  loginService,
  logoutService,
  registerService,
} from "../services/auth.js";

export const registerController = async (req, res) => {
  const { session, newUser } = await registerService(req.body);

  res.cookie("sessionId", session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });

  res.cookie("refreshToken", session.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });

  res.status(201).json({
    status: 201,
    message: "Register successfully",
    data: {
      user: newUser,
      token: session.accessToken,
    },
  });
};
export const loginController = async (req, res) => {
  const { user, session } = await loginService(req.body);

  res.cookie("sessionId", session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });

  res.cookie("refreshToken", session.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });

  res.status(201).json({
    status: 201,
    message: "Login successfully",
    data: {
      user,
      token: session.accessToken,
    },
  });
};
export const logoutController = async (req, res) => {
  console.log(req.cookies.sessionId);
  if (req.cookies.sessionId) {
    await logoutService(req.cookies.sessionId);
  }
  res.clearCookie("sessionId");
  res.clearCookie("refreshToken");

  res.status(204).send();
};
