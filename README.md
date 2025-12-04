# Aegis Documentation

Comprehensive developer documentation for the Aegis on-chain operating system for AI finance on Solana.

## 🚀 Live Site

**Production**: https://docs.aegis-vaults.xyz

## 📚 Documentation Sections

- **Getting Started**: Quick introduction, core concepts, and quickstart tutorial
- **SDK Documentation**: Complete TypeScript SDK API reference and examples
- **Protocol Reference**: Anchor smart contract architecture and instructions
- **Guardian API**: Backend REST API and WebSocket documentation
- **AI Integrations**: OpenAI, LangChain, and Anthropic Claude integrations
- **Tutorials**: Step-by-step guides for building AI agents
- **Security**: Best practices and key management
- **Advanced Topics**: Custom policies, event-driven architecture, and optimization

## 🛠️ Tech Stack

- **Framework**: [Nextra](https://nextra.site/) - Next.js-based documentation framework
- **Styling**: Custom CSS matching Aegis cyberpunk aesthetic
  - Primary: Electric Blue (#00D4FF)
  - Secondary: Neon Purple (#B026FF)
  - Accent: Emerald (#00FFA3)
- **Fonts**: Inter (sans-serif), JetBrains Mono (code)
- **Deployment**: Railway

## 🏃 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The dev server will start at http://localhost:3000

## 📁 Project Structure

```
aegis-docs/
├── pages/
│   ├── index.mdx                 # Homepage
│   ├── getting-started/          # Getting Started guide
│   ├── sdk/                      # SDK documentation
│   ├── protocol/                 # Protocol reference
│   ├── guardian/                 # Guardian API docs
│   ├── integrations/             # AI framework integrations
│   ├── tutorials/                # Tutorials
│   ├── security/                 # Security documentation
│   ├── advanced/                 # Advanced topics
│   └── styles.css                # Custom Aegis styling
├── theme.config.tsx              # Nextra theme configuration
├── next.config.mjs               # Next.js configuration
└── package.json
```

## 🎨 Design System

The documentation follows the Aegis cyberpunk design system:

### Colors
- **Background**: Deep Space Navy (#0A0E27)
- **Surface**: Elevated Surfaces (#151B3B)
- **Primary**: Electric Blue (#00D4FF)
- **Secondary**: Neon Purple (#B026FF)
- **Accent**: Emerald (#00FFA3)
- **Text**: High contrast white (#F0F4FF)

### Typography
- **Headings**: Inter, bold
- **Body**: Inter, regular
- **Code**: JetBrains Mono

### Components
- Gradient text for headings
- Glow effects on interactive elements
- Glass-morphic cards
- Custom scrollbars
- Cyber grid backgrounds

## 🚀 Deployment

### Railway Deployment

The docs are automatically deployed to Railway when changes are pushed to the main branch.

**Configuration files**:
- `railway.json` - Railway service configuration
- `nixpacks.toml` - Build configuration

**Custom Domain**: docs.aegis-vaults.xyz

### Manual Deployment

```bash
# Build the site
npm run build

# Test production build locally
npm start

# Deploy to Railway
railway up
```

## 📝 Contributing

1. Follow MDX format for all documentation pages
2. Include code examples with proper TypeScript typing
3. Add "Next Steps" sections linking to related pages
4. Use callouts (blockquotes) for warnings and tips
5. Maintain consistent tone and style
6. Test locally before submitting

### Adding New Pages

1. Create `.mdx` file in appropriate directory under `pages/`
2. Add entry to `_meta.json` in that directory
3. Include proper heading structure (h1, h2, h3)
4. Add code examples and tables where appropriate
5. Link to related pages in "Next Steps" section

## 📦 Content Sources

Documentation content is extracted from:
- `aegis-sdk/README.md` - SDK documentation
- `aegis-guardian/README.md` - Guardian API docs
- `aegis-protocol/programs/` - Protocol code and comments
- `aegis-app/` - UI patterns and examples

## 🔗 Related Repositories

- **Protocol**: [aegis-protocol](https://github.com/aegis-vaults/aegis-protocol)
- **Guardian**: [aegis-guardian](https://github.com/aegis-vaults/aegis-guardian)
- **SDK**: [aegis-sdk](https://github.com/aegis-vaults/aegis-sdk)
- **App**: [aegis-app](https://github.com/aegis-vaults/aegis-app)

## 📧 Support

- **Discord**: [Join our community](https://discord.gg/aegis-vaults)
- **GitHub Issues**: [Report documentation issues](https://github.com/aegis-vaults/aegis-docs/issues)
- **Twitter**: [@aegis_vaults](https://twitter.com/aegis_vaults)

## 📄 License

MIT License - see LICENSE file for details

---

Built with ❤️ by the Aegis team using Nextra
