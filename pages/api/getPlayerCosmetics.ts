import type { NextApiRequest, NextApiResponse } from "next";

type PlayerCosmetics = {
  activeCosmetics?: [
    {
      id: string;
    }
  ];
  dev?: boolean;
  eviePlus?: boolean;
  media?: boolean;
  message: string;
};

type Database = {
  players: {
    [uuid: string]: PlayerCosmetics;
  };
};

// Fake Database until we get a real one
const fakeDatabase: Database = {
  players: {
    "f5e658ea-fe2a-4ea7-8df1-d5c08af78a69": {
      activeCosmetics: [
        {
          id: "SimpleEvieCape",
        },
      ],
      dev: true,
      eviePlus: false,
      media: false,
      message: "",
    },
    "49f49c44-7f79-4631-903b-34ba4156458a": {
      activeCosmetics: [
        {
          id: "SkdiCape",
        },
      ],
      dev: false,
      eviePlus: false,
      media: false,
      message: "",
    },
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PlayerCosmetics>
) {
  const uuid = req.query.uuid as string;
  if (!uuid) {
    res.status(400).json({
      message: "No uuid provided",
    });
    return;
  } else {
    const playerCosmetics = fakeDatabase.players[uuid];
    if (!playerCosmetics) {
      res.status(400).json({
        message: "No player cosmetics found",
      });
      return;
    } else {
      res.status(200).json(playerCosmetics);
    }
  }
}
