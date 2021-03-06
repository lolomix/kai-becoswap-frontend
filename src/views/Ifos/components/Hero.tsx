import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from '@becoswap-libs/kai-uikit'
import Container from 'components/layout/Container'
import { useTranslation } from 'contexts/Localization'

const getGradient = (isDark: boolean) => {
  if (isDark) {
    return 'repeating-linear-gradient(to right, #332453, #332453 40px, #281D44 40px, #281D44 80px)'
  }

  return 'linear-gradient(139.73deg, rgb(255 255 255) 0%, rgb(27 152 94) 100%)'
}

const StyledHero = styled.div`
  //background: ${({ theme }) => getGradient(theme.isDark)};
  box-shadow: rgb(146 146 146 / 35%) 0px 0px 0px 3000px inset;
  padding-bottom: 40px;
  padding-top: 40px;
  text-shadow: 2px 2px 2px #00000040;
`

const CurtainBottom = styled.div``

const Hero = () => {
  const { t } = useTranslation()

  return (
    <Box mb="32px">
      <StyledHero>
        <Container>
          <Heading as="h1" size="xl" mb="24px" color="white">
            {t('Launchpad')}
          </Heading>
          <Text bold fontSize="20px" color="white">
            {t('Buy new tokens with BECO-LP.')}
          </Text>
        </Container>
      </StyledHero>
      <CurtainBottom />
    </Box>
  )
}

export default Hero
