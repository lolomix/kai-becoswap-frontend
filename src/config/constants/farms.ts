import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 3,
    lpSymbol: 'KAI-BECO LP',
    lpAddresses: {
      97: '0x1eBbF8080149FF07381AFd148bA0AF007f78cD3c',
      0: '0x1eBbF8080149FF07381AFd148bA0AF007f78cD3c',
    },
    token: tokens.beco,
    quoteToken: tokens.wkai,
  },

  {
    pid: 4,
    lpSymbol: 'KAI-KUSD LP',
    lpAddresses: {
      97: '0x7cd3c7aFeDD16A72Fba66eA35B2e2b301d1B7093',
      0: '0x7cd3c7aFeDD16A72Fba66eA35B2e2b301d1B7093',
    },
    token: tokens.kusd,
    quoteToken: tokens.wkai,
  },
 
  {
    pid: 5,
    lpSymbol: 'KAI-DPET LP',
    lpAddresses: {
      97: '0xDb504f611Ae0230bDc60A8F58FE89d3593EB28cE',
      0: '0xDb504f611Ae0230bDc60A8F58FE89d3593EB28cE',
    },
    token: tokens.dpet,
    quoteToken: tokens.wkai,
  },
]

export default farms
