// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' });
}

// https://github.com/thr3a/gpt-article-generator/blob/b8fc71d2652a5a1f76b69e9d72416a810ac9da7e/src/pages/api/chat.ts
