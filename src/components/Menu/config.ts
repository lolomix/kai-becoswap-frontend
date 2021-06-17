import { MenuEntry } from '@becoswap-libs/kai-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    href: 'https://kaidex.io/exchange',
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Referrals',
    icon: 'ReferralIcon',
    href: '/referrals',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Launchpad',
    icon: 'IfoIcon',
    href: '/launchpad',
  },
  {
    label: 'NFT Marketplace',
    icon: 'NftIcon',
    href: "#",
    status: {
      text: "Coming",
      color: "primary"
    }
  },

  {
    label: 'Supply Chain',
    icon: 'SupplyChainIcon',
    href: "#",
    status: {
      text: "Coming",
      color: "primary"
    }
  },

  {
    label: 'Games',
    icon: 'NftIcon',
    href: "#",
    status: {
      text: "Coming",
      color: "primary"
    }
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.becoswap.com/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://snapshot.org/#/becoswap.eth',
      },
      {
        label: 'Github',
        href: 'https://github.com/becoswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.becoswap.com',
      },
      {
        label: 'Blog',
        href: 'https://becoswap.medium.com',
      },
    ],
  },
]

export default config
