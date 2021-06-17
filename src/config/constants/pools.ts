import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.beco,
    earningToken: tokens.beco,
    contractAddress: {
      97: '0x20e8Ff1e1d9BC429489dA76B1Fc20A9BFbF3ee7e',
      0: '0x20e8Ff1e1d9BC429489dA76B1Fc20A9BFbF3ee7e',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '4',
    sortOrder: 1,
    isFinished: false,
  },

  {
    sousId: 1,
    stakingToken: tokens.wkai,
    earningToken: tokens.beco,
    contractAddress: {
      97: '0x20e8Ff1e1d9BC429489dA76B1Fc20A9BFbF3ee7e',
      0: '0x20e8Ff1e1d9BC429489dA76B1Fc20A9BFbF3ee7e',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
  },

  {
    sousId: 2,
    stakingToken: tokens.dpet,
    earningToken: tokens.beco,
    contractAddress: {
      97: '0x20e8Ff1e1d9BC429489dA76B1Fc20A9BFbF3ee7e',
      0: '0x20e8Ff1e1d9BC429489dA76B1Fc20A9BFbF3ee7e',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
