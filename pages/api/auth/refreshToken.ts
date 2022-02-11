import { MicrosoftAccount, MicrosoftAuth } from "minecraft-auth";
import type { NextApiRequest, NextApiResponse } from "next";
type refresh_token = {
  refresh_token?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<refresh_token>
) {
  const refresh = req.query.refresh as string;
  if (!refresh) {
    res.status(400).json({
      error: "No refresh token provided",
    });
    return;
  } else {
    const appID = "79d63740-a433-4f6d-8c3d-19f997d868b8";
    const appSecret = process.env.AZURE_SECRET;
    MicrosoftAuth.setup(
      appID,
      appSecret,
      "http://localhost:9998/auth/microsoft"
    );
    const account = new MicrosoftAccount();
    try {
      account.refreshToken = refresh;
      await account.refresh();
    } catch (e: any) {
      res.status(400).json({
        error: "Something went wrong",
      });
      return;
    }

    res.status(200).json({
      refresh_token: account.refreshToken,
    });
  }
}
