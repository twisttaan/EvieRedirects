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
    twisttaan: {
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
    skdi: {
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
    billy: {
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
  const name = req.query.name as string;
  if (!name) {
    res.status(400).json({
      message: "No uuid provided",
    });
    return;
  } else {
    const playerCosmetics = fakeDatabase.players[name];
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
