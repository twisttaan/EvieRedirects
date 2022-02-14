import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).redirect("https://www.youtube.com/watch?v=-pHhb4biR9k");
}
