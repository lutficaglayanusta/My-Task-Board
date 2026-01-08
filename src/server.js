import express from "express";
import cors from "cors";
import pino from "pino-http";

import { env } from "./utils/env.js";
import { notFoundHandler } from "./middleware/notFoundHandler.js";
import { errorHandler } from "./middleware/errorHandler.js";

const startServer = () => {
  const app = express();

  app.use(
    pino({
      transport: {
        target: "pino-pretty",
      },
    })
  );

  app.use(cors()); // buraya site linki ve local linki gelicek credentials true özelliği ile

  app.use(notFoundHandler);

  app.use(errorHandler);

  const PORT = Number(env("PORT", "3000"));

  app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}.`);
  });
};
export default startServer;
