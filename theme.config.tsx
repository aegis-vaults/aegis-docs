import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{
      fontWeight: 700,
      fontSize: '1.5rem',
      background: 'linear-gradient(135deg, #00D4FF 0%, #B026FF 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    }}>
      Aegis
    </span>
  ),
  project: {
    link: 'https://github.com/aegis-vaults',
  },
  chat: {
    link: 'https://discord.gg/aegis-vaults',
  },
  docsRepositoryBase: 'https://github.com/aegis-vaults/aegis-docs',
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} © Aegis. Built with Nextra.
      </span>
    ),
  },
  primaryHue: 193,
  primarySaturation: 100,
  darkMode: true,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Aegis Docs'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Aegis Documentation" />
      <meta property="og:description" content="On-chain operating system for AI finance on Solana" />
      <link rel="stylesheet" href="/styles.css" />
    </>
  ),
  banner: {
    key: 'naga-mainnet',
    text: (
      <a href="https://aegis-vaults.xyz" target="_blank">
        🚀 Aegis is now live on Solana Mainnet →
      </a>
    ),
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Questions? Give us feedback →',
    labels: 'feedback'
  },
}

export default config
