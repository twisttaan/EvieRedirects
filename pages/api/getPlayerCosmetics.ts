import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import axios, { AxiosResponse } from "axios";
import { withSentry } from "@sentry/nextjs";

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
async function handleGET(username: string, res: NextApiResponse<any>) {
  const lookup: AxiosResponse = await axios.get(
    `https://api.mojang.com/users/profiles/minecraft/${username}`
  );

  if (lookup.status === 200) {
    const uuid = lookup.data.id;
    const player = await prisma.playerCosmetics.findFirst({
      where: {
        uuid: String(uuid),
      },
    });

    if (player) {
      res.status(200).json(player);
    } else {
      res.status(404).json({
        error: "Player not found",
      });
    }
  } else {
    res.status(404).json({
      error: "Player not found",
    });
  }
}

export default withSentry(handle);
