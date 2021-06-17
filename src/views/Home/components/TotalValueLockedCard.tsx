import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@becoswap-libs/kai-uikit'
import { useTranslation } from 'contexts/Localization'
import { useFarms, useGetApiPrices, usePools } from 'state/hooks'
import { useWeb3React } from '@web3-react/core'
import { getAddress } from 'utils/addressHelpers'
import BigNumber from 'bignumber.js'
import { getBalanceAmount } from 'utils/formatBalance'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {
  const { t } = useTranslation()
  const farms = useFarms()
  const { account } = useWeb3React()
  const pools = usePools(account);
  const prices = useGetApiPrices()
  let tvl = null

  pools.forEach(pool => {
    if (!pool.totalStaked || !prices) {
      return 
    }
    const stakingTokenPrice = prices[getAddress(pool.stakingToken.address).toLowerCase()];
    if (stakingTokenPrice) {
      const locked = new BigNumber(pool.totalStaked).toNumber() * stakingTokenPrice

      tvl += getBalanceAmount(new BigNumber(locked)).toNumber()
    }
  }) 

  farms.data.forEach(farm => {
    if (!farm.lpTotalInQuoteToken || !prices) {
      return 
    }
    const quoteTokenPriceUsd = prices[getAddress(farm.quoteToken.address).toLowerCase()]
    const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(quoteTokenPriceUsd)
    tvl += totalLiquidity.toNumber()
  }) 
  const tvlFormatted = tvl
    ? `$${tvl.toLocaleString(undefined, { maximumFractionDigits: 3 })}`
    : '-'
  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="24px">
          {t('Total Value Locked (TVL)')}
        </Heading>
        {tvl ? (
          <>
            <Heading size="xl">{`${tvlFormatted}`}</Heading>
            <Text color="textSubtle">{t('Across all LPs and Beco Pools')}</Text>
          </>
        ) : (
          <Skeleton height={66} />
        )}
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
