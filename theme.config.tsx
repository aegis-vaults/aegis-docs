import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: '#fc5000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      </div>
      <span style={{
        fontWeight: 900,
        fontSize: '1.25rem',
        letterSpacing: '-0.02em',
        color: '#151317',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        AEGIS
      </span>
    </div>
  ),
  project: {
    link: 'https://github.com/aegis-vaults',
  },
  chat: {
    link: 'https://discord.gg/WJWTqbAmcy',
  },
  docsRepositoryBase: 'https://github.com/aegis-vaults/aegis-docs',
  footer: {
    text: (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        width: '100%',
        padding: '20px 0',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: '#fc5000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: '0.875rem', color: '#151317' }}>Aegis Vaults</span>
        </div>
        <span style={{ fontSize: '0.75rem', color: '#787575' }}>
          {new Date().getFullYear()} © Aegis. Built with Nextra.
        </span>
      </div>
    ),
  },
  primaryHue: 18,
  primarySaturation: 100,
  darkMode: true,
  nextThemes: {
    defaultTheme: 'light',
  },
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
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="/styles.css" />
    </>
  ),
  banner: {
    key: 'aegis-mainnet',
    text: (
      <a href="https://aegis-vaults.xyz" target="_blank" style={{ 
        display: 'flex', 
        alignItems: 'center',
        gap: '8px',
        fontWeight: 500,
      }}>
        🚀 Aegis is now live on Solana Devnet →
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
