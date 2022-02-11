import type { NextApiRequest, NextApiResponse } from "next";

type PlayerCosmetics = {
  activeCosmetics?: {
    cape: {
      id: string;
      type: string;
    };
  };
  dev?: boolean;
  eviePlus?: boolean;
  media?: boolean;
  message?: string;
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
      activeCosmetics: {
        cape: {
          id: "SimpleEvieCape",
          type: "cape",
        },
      },
      dev: true,
      eviePlus: false,
      media: false,
    },
    "49f49c44-7f79-4631-903b-34ba4156458a": {
      activeCosmetics: {
        cape: {
          id: "SkdiCape",
          type: "cape",
        },
      },
      dev: false,
      eviePlus: false,
      media: false,
    },
    "c98187a9-e17b-3f48-8a33-882e62d18d19": {
      activeCosmetics: {
        cape: {
          id: "SimpleEvieCape",
          type: "cape",
        },
      },
      dev: false,
      eviePlus: false,
      media: false,
    },
    "db209190-0290-4652-b42a-7aa0f89eeb90": {
      activeCosmetics: {
        cape: {
          id: "SimpleEvieCape",
          type: "cape",
        },
      },
      dev: false,
      eviePlus: false,
      media: false,
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
