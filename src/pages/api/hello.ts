// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
}

export type SuccessResponseProps = {
  status: 'ok';
  result: Data;
};

export type ErrorResponseProps = {
  status: 'ng';
  errorMessage: string;
};

export type ResponseProps = SuccessResponseProps | ErrorResponseProps;

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseProps>) {
  // if (req.method !== 'POST') {
  //   res.status(405).send({status: 'ng', errorMessage: 'Method Not Allowed'});
  //   res.end();
  //   return;
  // }

  if (req.query.error === '1') {
    res.status(500).json({
      status: 'ng',
      errorMessage: 'Internal Server Error'
    });
    res.end();
    return;
  }

  res.status(200).json({status: 'ok', result: {name: 'John Smith'}});
  res.end();
}
