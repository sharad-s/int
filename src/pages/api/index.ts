// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Data } from "../../types/data";

const URL =
  "https://gist.githubusercontent.com/m5rk/5dbdb4f8dbb9d2a84b46b6f9cfec82ad/raw/c142410765bb2eec0d3c94cdd37e8687a81f451b/plant_care.json";

const PAGE_LIMIT = 20;

export const fetchData = async () => {
  return fetch(URL)
    .then((response) => response.json())
    .then((res: Data[]) => {
      return res;
    });
};

function sliceIntoChunks<T>(arr: T[], chunkSize = PAGE_LIMIT) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  let page = Number(req.query.page);
  let shouldPaginate = !isNaN(page);

  try {
    const data = await fetchData();

    if (shouldPaginate) {
      const paginated = sliceIntoChunks(data)[page];
      res.status(200).json(paginated);
    } else {
      res.status(200).json(data);
    }
  } catch (err) {
    res.status(500);
  }
}
