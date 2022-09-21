import type { NextApiRequest, NextApiResponse } from "next";
import { fetchData } from "../../services/fetchData";
import { Data } from "../../types/data";

/* Fetches a single plant by its index in the array */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | string>
) {
  let index = Number(req.query.plantIndex);
  let validIndex = !isNaN(index);

  if (!validIndex) {
    return res.status(404);
  }

  try {
    const data = await fetchData();
    if (data[index] === undefined) {
      return res.status(404).send("Not Found");
    } else {
      return res.status(200).json(data[index]);
    }
  } catch (err) {
    return res.status(404);
  }
}
