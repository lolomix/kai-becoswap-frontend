import { useEffect, useState } from 'react'

/*
 * Due to Cors the api was forked and a proxy was created
 * @see https://github.com/pancakeswap/gatsby-pancake-api/commit/e811b67a43ccc41edd4a0fa1ee704b2f510aa0ba
 */
export const baseUrl = 'https://api.becoswap.info/api'

/* eslint-disable camelcase */

export interface ApiSummaryResponse {
  update_at: string
  data: Map<string, Summary>
}

export interface Summary {
  liquidity: string
}

export interface Stats {
  tvl: number
}

export const useGetStats = () => {
  const [data] = useState<Stats | null>(null)

  return data
}
