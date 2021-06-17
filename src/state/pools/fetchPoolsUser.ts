import poolsConfig from 'config/constants/pools'
import masterChefABI from 'config/abi/masterchef.json'
import erc20ABI from 'config/abi/erc20.json'
import multicall from 'utils/multicall'
import { getAddress} from 'utils/addressHelpers'
import { getWeb3NoAccount } from 'utils/web3'
import BigNumber from 'bignumber.js'

// Pool 0, Cake / Cake is a different kind of contract (master chef)
// BNB pools use the native BNB token (wrapping ? unwrapping is done at the contract level)
const nonBnbPools = poolsConfig.filter((p) => p.stakingToken.symbol !== 'BNB')
const bnbPools = poolsConfig.filter((p) => p.stakingToken.symbol === 'BNB')
const web3 = getWeb3NoAccount()

export const fetchPoolsAllowance = async (account) => {
  const calls = nonBnbPools.map((p) => ({
    address: getAddress(p.stakingToken.address),
    name: 'allowance',
    params: [account, getAddress(p.contractAddress)],
  }))

  const allowances = await multicall(erc20ABI, calls)
  return nonBnbPools.reduce(
    (acc, pool, index) => ({ ...acc, [pool.sousId]: new BigNumber(allowances[index]).toJSON() }),
    {},
  )
}

export const fetchUserBalances = async (account) => {
  // Non BNB pools
  const calls = nonBnbPools.map((p) => ({
    address: getAddress(p.stakingToken.address),
    name: 'balanceOf',
    params: [account],
  }))
  const tokenBalancesRaw = await multicall(erc20ABI, calls)
  const tokenBalances = nonBnbPools.reduce(
    (acc, pool, index) => ({ ...acc, [pool.sousId]: new BigNumber(tokenBalancesRaw[index]).toJSON() }),
    {},
  )

  // BNB pools
  const bnbBalance = await web3.eth.getBalance(account)
  const bnbBalances = bnbPools.reduce(
    (acc, pool) => ({ ...acc, [pool.sousId]: new BigNumber(bnbBalance).toJSON() }),
    {},
  )

  return { ...tokenBalances, ...bnbBalances }
}

export const fetchUserStakeBalances = async (account) => {
  const calls = poolsConfig.map((p) => ({
    address: getAddress(p.contractAddress),
    name: 'userInfo',
    params: [p.sousId, account],
  }))
  const userInfo = await multicall(masterChefABI, calls)
  const stakedBalances = poolsConfig.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(userInfo[index].amount._hex).toJSON(),
    }),
    {},
  )

  return { ...stakedBalances }
}

export const fetchUserCanHarvests = async (account) => {
  const calls = poolsConfig.map((p) => ({
    address: getAddress(p.contractAddress),
    name: 'canHarvest',
    params: [p.sousId, account],
  }))

  const res = await multicall(masterChefABI, calls)

  const canHarvests = poolsConfig.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: res[index],
    }),
    {},
  )

  return canHarvests
}

export const fetchUserPendingRewards = async (account) => {
  const calls = poolsConfig.map((p) => ({
    address: getAddress(p.contractAddress),
    name: 'pendingBeco',
    params: [p.sousId, account],
  }))
  const res = await multicall(masterChefABI, calls)
  

  const pendingRewards = poolsConfig.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(res[index]).toJSON(),
    }),
    {},
  )

  return pendingRewards
}
