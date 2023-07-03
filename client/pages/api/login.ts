// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  axios({
    method: 'POST',
    url: 'http://back:4000/api/login'
  })
  .then((rep) => res.json(rep.data))
  .catch((err) => {
    console.log(err.response)
    res.status(500).send(err)
  })
}
