import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  axios
    .get(
      "https://api.github.com/repos/EvieClient/EvieClient-Releases/releases/latest"
    )
    .then(function (response) {
      const data = response.data;
      const downloadURL = data.assets[0].browser_download_url;
      res.status(200).redirect(downloadURL);
    })
    .catch(function (error) {
      console.log(error);
      res.status(200).json({
        error: true,
        message: "Looks like something went wrong here. :-)",
        try: "You could try evie.pw/api/downloads/v2/latest instead.",
      });
    });
}
