import type { NextApiRequest, NextApiResponse } from "next";

const key = "evielikestobepat";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.key !== key) {
    return res.status(401).json({
      message: "Invalid key",
    });
  }
  res.status(200).send(`
# Keep Tweaker so the game can actually launch
-keep class com.evieclient.mixins.EvieTweaker {
   <fields>; 
   <methods>; 
}
`);
}
