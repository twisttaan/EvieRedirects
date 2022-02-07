import type { NextApiRequest, NextApiResponse } from "next";

type Post = {
  id: number;
  title: string;
  imageURL: string;
  description: string;
  date: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  res.status(200).json([
    {
      id: 1,
      title: "Testing News API",
      imageURL: "https://evie.pw/Banner.png",
      description:
        "Hey there, this is a test post. If you see this, it means the news API is working, it also means you're a cool person.",
      date: "2020-06-13T11:13:12+01:00",
    },
  ]);
}
