import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 5,
    stakingToken: tokens.beco,
    earningToken: tokens.beco,
    contractAddress: {
      97: '0x1d32c2945C8FDCBc7156c553B7cEa4325a17f4f9',
      0: '0xbA3bEE111EDEA3B09d1e4A3353E2c8Ac072f310c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '4',
    sortOrder: 1,
    isFinished: false,
  },

  {
    sousId: 3,
    stakingToken: tokens.wkai,
    earningToken: tokens.beco,
    contractAddress: {
      97: '0x1d32c2945C8FDCBc7156c553B7cEa4325a17f4f9',
      0: '0xbA3bEE111EDEA3B09d1e4A3353E2c8Ac072f310c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '4',
    sortOrder: 1,
    isFinished: false,
  },

  {
    sousId: 4,
    stakingToken: tokens.dpet,
    earningToken: tokens.beco,
    contractAddress: {
      97: '0x1d32c2945C8FDCBc7156c553B7cEa4325a17f4f9',
      0: '0xbA3bEE111EDEA3B09d1e4A3353E2c8Ac072f310c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '4',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
