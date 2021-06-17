import { BaseLayout, Flex, Heading } from '@becoswap-libs/kai-uikit'
import { useWeb3React } from '@web3-react/core'
import Page from 'components/layout/Page'
import PageHeader from 'components/PageHeader'
import { useTranslation } from 'contexts/Localization'
import React, { useEffect } from 'react'
import { useAppDispatch } from 'state'
import { fetchReferralInfoAsync } from 'state/referrals'
import styled from 'styled-components'
import MyReferralLinkCard from './components/MyReferralLinkCard'
import TotalCommissionCard from './components/TotalCommissionCard'
import TotalReferralCard from './components/TotalReferralCard'
import UnlockWalletCard from './components/UnlockWalletCard'

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

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Referrals: React.FC = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (account) {
      dispatch(fetchReferralInfoAsync(account))
    }
  }, [dispatch, account])

  return (
    <>
      <Hero>
        <Flex justifyContent="space-between" flexDirection={['column', null, 'row']}>
          <Flex flexDirection="column" mr={['8px', 0]}>
            <Heading as="h1" size="xxl" color="white" mb="24px">
              {t('Referrals')}
            </Heading>
            <Heading size="md" color="white">
              {t('Share the referral link below to invite your friends and earn 1% of your friends earnings FOREVER!')}
            </Heading>
          </Flex>
        </Flex>
      </Hero>
      <Page>
        {!account ? (
          <UnlockWalletCard />
        ) : (
          <div>
            <Cards>
              <TotalReferralCard />
              <TotalCommissionCard />
            </Cards>
            <MyReferralLinkCard />
          </div>
        )}
      </Page>
    </>
  )
}

export default Referrals
