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
  axios({
    method: 'POST',
    url: 'http://back:4000/api/users/login',
    data: req.body,
  })
    .then((rep) => console.log(res.json(rep.data)))
    .catch((err) => {
      console.log(err.response);
      res.status(500).send(err);
    });
}
