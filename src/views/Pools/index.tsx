import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Route, useRouteMatch } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { Heading, Flex } from '@becoswap-libs/kai-uikit'
import orderBy from 'lodash/orderBy'
import partition from 'lodash/partition'
import { useTranslation } from 'contexts/Localization'
import usePersistState from 'hooks/usePersistState'
import { usePools, useBlock } from 'state/hooks'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
// import PageHeader from 'components/PageHeader'
import PoolCard from './components/PoolCard'
import PoolTabButtons from './components/PoolTabButtons'

const Hero = styled.div`
  //background-image: url('/images/pan-bg.jpg');
  -webkit-box-align: center;
  align-items: center;
  background-position: center center, center center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: rgb(146 146 146 / 35%) 0px 0px 0px 3000px inset;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  margin: auto auto 25px;
  padding: 32px 16px;
  text-align: center;
  height: 300px;
  color: #fff
`

const Pools: React.FC = () => {
  const { path } = useRouteMatch()
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const pools = usePools(account)
  const { currentBlock } = useBlock()
  const [stakedOnly, setStakedOnly] = usePersistState(false, 'pancake_pool_staked')

  const [finishedPools, openPools] = useMemo(
    () => partition(pools, (pool) => pool.isFinished || currentBlock > pool.endBlock),
    [currentBlock, pools],
  )
  const stakedOnlyPools = useMemo(
    () => openPools.filter((pool) => pool.userData && new BigNumber(pool.userData.stakedBalance).isGreaterThan(0)),
    [openPools],
  )
  const hasStakeInFinishedPools = useMemo(
    () => finishedPools.some((pool) => pool.userData && new BigNumber(pool.userData.stakedBalance).isGreaterThan(0)),
    [finishedPools],
  )
  return (
    <>
      <Hero>
        <Flex justifyContent="space-between" flexDirection={['column', null, 'row']}>
          <Flex flexDirection="column" mr={['8px', 0]}>
            <Heading as="h1" size="xxl" color="white" mb="24px">
              {t('Pools')}
            </Heading>
            <Heading size="md" color="white" mb="8px">
              {t('Simply stake tokens to earn.')}
            </Heading>
            <Heading size="md" color="white">
              {t('High APR, risk free.')}
            </Heading>
          </Flex>
          {/* <Flex height="fit-content" justifyContent="center" alignItems="center" mt={['24px', null, '0']}>
            <BountyCard />
          </Flex> */}
        </Flex>
      </Hero>
      <Page>
        <PoolTabButtons
          stakedOnly={stakedOnly}
          setStakedOnly={setStakedOnly}
          hasStakeInFinishedPools={hasStakeInFinishedPools}
        />
        <FlexLayout>
          <Route exact path={`${path}`}>
            <>
              {/* <CakeVaultCard pool={cakePoolData} showStakedOnly={stakedOnly} /> */}
              {stakedOnly
                ? orderBy(stakedOnlyPools, ['sortOrder']).map((pool) => (
                    <PoolCard key={pool.sousId} pool={pool} account={account} />
                  ))
                : orderBy(openPools, ['sortOrder']).map((pool) => (
                    <PoolCard key={pool.sousId} pool={pool} account={account} />
                  ))}
            </>
          </Route>
          <Route path={`${path}/history`}>
            {orderBy(finishedPools, ['sortOrder']).map((pool) => (
              <PoolCard key={pool.sousId} pool={pool} account={account} />
            ))}
          </Route>
        </FlexLayout>
        {/* <Image
          mx="auto"
          mt="12px"
          src="/images/3d-syrup-bunnies.png"
          alt="Pancake illustration"
          width={192}
          height={184.5}
        /> */}
      </Page>
    </>
  )
}

export default Pools
