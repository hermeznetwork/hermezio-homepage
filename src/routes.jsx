import React from 'react'

import HezIcon from './assets/images/hez-icon.inline.svg'
import SwapArrow from './assets/images/swap-arrow.inline.svg'
import ToTokenIcon from './assets/images/to-token-icon.inline.svg'

const sharedRoutes = {
  paymentNetwork: {
    type: 'internal',
    label: 'Payment Network',
    to: '/payment-network'
  },
  project: {
    type: 'internal',
    label: 'Project',
    to: '/project'
  },
  blog: {
    type: 'external',
    label: 'Blog',
    to: 'https://blog.hermez.io'
  },
  wallet: {
    type: 'internal',
    label: 'Wallet',
    to: '/wallet'
  },
  explorer: {
    type: 'external',
    label: 'Network explorer',
    to: 'https://explorer.hermez.io'
  }
}

const headerRoutes = [
  sharedRoutes.paymentNetwork,
  {
    type: 'internal',
    label: 'Technology',
    to: '/technology'
  },
  sharedRoutes.project,
  {
    type: 'internal',
    label: 'Join Us',
    to: '/join-us'
  },
  sharedRoutes.blog,
  sharedRoutes.explorer,
  {
    type: 'external',
    to: 'https://heztomatic.hermez.io',
    renderLabel: () => (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        height: 16,
        margin: '8px 0'
      }}
      >
        <HezIcon />
        <SwapArrow style={{
          height: 12,
          margin: '0px 4px'
        }}
        />
        <ToTokenIcon />
      </div>
    )
  },
  sharedRoutes.wallet
]

const footerRoutes = [
  {
    ...sharedRoutes.paymentNetwork,
    section: 'polygon-hermez'
  },
  {
    ...sharedRoutes.wallet,
    section: 'polygon-hermez'
  },
  {
    ...sharedRoutes.explorer,
    section: 'polygon-hermez'
  },
  {
    ...sharedRoutes.project,
    label: 'About us',
    section: 'project'
  },
  {
    type: 'internal',
    label: 'Mediakit',
    to: '/media-inquiries',
    section: 'project'
  },
  {
    type: 'internal',
    label: 'Whitepaper',
    to: '/hermez-whitepaper.pdf',
    section: 'specification'
  },
  {
    type: 'external',
    label: 'Documentation',
    to: 'https://docs.hermez.io',
    section: 'specification'
  },
  {
    type: 'external',
    label: 'Github',
    to: 'https://github.com/hermeznetwork',
    section: 'specification'
  },
  {
    type: 'external',
    label: 'Blog',
    to: 'https://blog.hermez.io',
    section: 'social'
  },
  {
    type: 'external',
    label: 'Telegram',
    to: 'https://t.me/polygonhermez',
    section: 'social'
  },
  {
    type: 'external',
    label: 'Discord',
    to: 'https://discord.gg/polygon',
    section: 'social'
  },
  {
    type: 'external',
    label: 'Twitter',
    to: 'https://twitter.com/0xPolygonHermez',
    section: 'social'
  },
  {
    type: 'external',
    label: 'Linkedin',
    to: 'https://www.linkedin.com/company/polygonhermez',
    section: 'social'
  },
  {
    type: 'internal',
    label: 'Legal disclaimer',
    to: '/legal-disclaimer',
    section: 'legal'
  }
]

export { headerRoutes, footerRoutes }
