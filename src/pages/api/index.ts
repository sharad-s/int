// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { fetchData } from "../../services/fetchData";
import { Data } from "../../types/data";

const PAGE_LIMIT = 20;

function sliceIntoChunks<T>(arr: T[], chunkSize = PAGE_LIMIT) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

/* Fetches all plants or a page of plants */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[] | Data>
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
