import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import axios, { AxiosResponse } from "axios";
import { withSentry } from "@sentry/nextjs";

type PlayerCosmetics = {
  activeCosmetics?: any;
  dev?: boolean;
  eviePlus?: boolean;
  media?: boolean;
  message?: string;
};

const prisma = new PrismaClient();

async function handle(req: NextApiRequest, res: NextApiResponse) {
  const username = req.query.name as string;

  if (req.method === "GET") {
    handleGET(username, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

// GET /api/getPlayerCosmetics?name=<username>
async function handleGET(
  username: string,
  res: NextApiResponse<PlayerCosmetics>
) {
  res.status(404).json({
    message: "Player not found",
  });
}

export default withSentry(handle);
