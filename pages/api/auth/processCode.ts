import { MicrosoftAccount, MicrosoftAuth } from "minecraft-auth";
import type { NextApiRequest, NextApiResponse } from "next";
type oauth_token = {
  token_type?: string;
  expires_in?: number;
  scope?: string;
  access_token?: string;
  refresh_token?: string;
  user_id?: string;
  foci?: string;
  error?: string;
  username?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<oauth_token>
) {
  const code = req.query.code as string;
  if (!code) {
    res.status(400).json({
      error: "No code provided",
    });
    return;
  } else {
    let appID = "79d63740-a433-4f6d-8c3d-19f997d868b8";
    let appSecret = process.env.AZURE_SECRET;
    MicrosoftAuth.setup(appID, appSecret, null);
    const account = new MicrosoftAccount();
    await account.authFlow(code);
    await account.getProfile();
    res.status(200).json({
      token_type: "bearer",
      expires_in: 86400,
      scope: "XboxLive.signin",
      access_token: account.accessToken,
      refresh_token: account.refreshToken,
      user_id: account.uuid,
      foci: "1",
      username: account.username,
    });
  }
}
