import { getEthereumClient } from '@/lib/ethereum-client'

import type { NextApiRequest, NextApiResponse } from 'next'

export type EnsResponse = {
  publicKey: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EnsResponse>
) {
  const { ensName, compress } = JSON.parse(req.body)

  const client = getEthereumClient()

  if (!client) {
    return
  }

  const publicKey = await client.resolvePublicKey(ensName, {
    compress,
  })

  if (!publicKey) {
    res.status(404).end()

    return
  }

  res.status(200).json({ publicKey })
}
