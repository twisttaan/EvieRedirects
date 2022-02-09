import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
const fsPromises = fs.promises;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;
  if (!id) {
    res.status(400).json({
      message: "No cape id provided",
    });
    return;
  } else {
    // fiind the cape texture for the given id in the folder assets/textures/capes
    const capeTexture = `./pages/api/assets/textures/capes/${id}.png`;

    // if the cape texture is not found, return a 404
    if (!fs.existsSync(capeTexture)) {
      res.status(404).json({
        message: "Cape texture not found",
      });
      return;
    }

    // if the cape texture is found, return it
    const readCapeTexture = await fsPromises.readFile(capeTexture);
    res.setHeader("Content-Type", "image/png");
    res.status(200).send(readCapeTexture);
  }
}
