import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import axios, { AxiosResponse } from "axios";

const prisma = new PrismaClient();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const capeID = req.query.id as string;

  if (req.method === "GET") {
    handleGET(capeID, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

// GET /api/getPlayerCosmetics?name=<username>
async function handleGET(capeID: string, res: NextApiResponse<any>) {
  const capeB64 = await prisma.capeTextures.findFirst({
    where: {
      capeID: String(capeID),
    },
  });

  if (capeB64) {
    const readCapeTexture: Buffer = Buffer.from(capeB64.texture, "base64");
    res.setHeader("Content-Type", "image/png");
    res.status(200).send(readCapeTexture);
  } else {
    res.status(404).json({
      error: "Cape not found",
    });
  }
}
