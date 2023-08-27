// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  data: {
    token: string;
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  axios({
    method: 'GET',
    url: `http://back:4000/api/masterclass/${id}`,
  })
    .then((rep) => console.log(res.json(rep.data)))
    .catch((err) => {
      console.log(err.response);
      res.status(500).send(err);
    });
}
