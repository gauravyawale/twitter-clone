// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../db/data.json";

type Data = {
  data: any;
};

// type UserTweets = {
//   message: string
//   file: string
//   username: string
//   userProfile: string
//   createdAt: any
//   likes: number
//   dislikes: number
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ data: data });
}
