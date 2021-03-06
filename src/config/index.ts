import BigNumber from 'bignumber.js/bignumber'
import { BIG_TEN } from 'utils/bigNumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const BSC_BLOCK_TIME = 5

// BECO_PER_BLOCK details
// 70 BECO is minted per block

export const BECO_PER_BLOCK = new BigNumber(20)
export const BLOCKS_PER_YEAR = new BigNumber((60 / BSC_BLOCK_TIME) * 60 * 24 * 365) // 10512000
export const BASE_URL = 'https://becoswap.com'
export const BASE_EXCHANGE_URL = 'https://kaidex.io/exchange'
export const BASE_ADD_LIQUIDITY_URL = `https://kaidex.io/portfolio/add`
export const BASE_LIQUIDITY_POOL_URL = `https://kaidex.io/portfolio`
export const BASE_BSC_SCAN_URL = 'https://explorer.kardiachain.io'
export const LOTTERY_MAX_NUMBER_OF_TICKETS = 50
export const LOTTERY_TICKET_PRICE = 1
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
export const TRANSFER_TAX = 0