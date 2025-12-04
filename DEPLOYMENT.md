# Deployment Guide for Aegis Docs

## Railway Deployment

### Prerequisites
- Railway account
- Railway CLI installed: `npm install -g @railway/cli`
- Git repository for aegis-docs

### Initial Setup

1. **Navigate to the docs directory**
   ```bash
   cd /Users/ryankaelle/dev/Aegis/aegis-docs
   ```

2. **Login to Railway**
   ```bash
   railway login
   ```

3. **Initialize Railway project**
   ```bash
   railway init
   ```
   - Select "Create new project"
   - Name it "aegis-docs"

4. **Link to Railway project**
   ```bash
   railway link
   ```

5. **Deploy to Railway**
   ```bash
   railway up
   ```

### Configuration Files

The following files are already configured for Railway deployment:

- **`railway.json`**: Railway service configuration
  - Build command: `npm run build`
  - Start command: `npm start`
  - Restart policy: ON_FAILURE with 10 max retries

- **`nixpacks.toml`**: Build configuration
  - Node.js 20
  - Build process: `npm ci`, `npm run build`
  - Start command: `npm start`

- **`.gitignore`**: Excludes build artifacts and dependencies

### Custom Domain Setup

1. **In Railway Dashboard**:
   - Go to your aegis-docs project
   - Click "Settings"
   - Go to "Domains"
   - Click "Custom Domain"
   - Enter: `docs.aegis-vaults.xyz`

2. **Update DNS Records**:
   Add the following CNAME record to your DNS provider (e.g., Cloudflare, Namecheap):
   ```
   Type:  CNAME
   Name:  docs
   Value: [Your Railway domain from dashboard]
   TTL:   Auto
   ```

3. **Wait for propagation**:
   - DNS changes can take up to 48 hours
   - Usually propagates within 5-15 minutes

### Environment Variables

The docs site doesn't require environment variables currently, but if needed in the future:

```bash
# Set via Railway CLI
railway variables set KEY=value

# Or in Railway Dashboard
# Settings > Variables > New Variable
```

### Continuous Deployment

Set up automatic deployments from GitHub:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial aegis-docs deployment"
   git push origin main
   ```

2. **Connect GitHub in Railway**:
   - Railway Dashboard > Settings > GitHub
   - Connect your GitHub account
   - Select the aegis-docs repository
   - Select branch: `main`

3. **Auto-deploy**:
   - Every push to `main` will trigger automatic deployment
   - Railway will build and deploy the site

### Manual Deployment Commands

```bash
# Deploy current local state
railway up

# View logs
railway logs

# Open deployed site
railway open

# Check service status
railway status
```

## Build Process

The build process follows these steps:

1. **Install dependencies**: `npm ci`
2. **Build Next.js**: `npm run build`
   - Generates static pages for all 41 documentation pages
   - Optimizes assets
   - Creates production bundle
3. **Start server**: `npm start`
   - Serves optimized build on port 3000

## Performance Optimization

The docs are optimized for performance:

- **Static Generation**: All 41 pages are pre-rendered at build time
- **Code Splitting**: Each page loads only necessary JavaScript
- **Asset Optimization**: Images and fonts are optimized
- **Bundle Size**: Shared JavaScript is ~85 KB (gzipped)

## Monitoring

### Health Checks

Railway automatically monitors:
- Service uptime
- Response times
- Memory usage
- CPU usage

### Manual Checks

```bash
# Check build logs
railway logs --build

# Check runtime logs
railway logs

# Check service metrics
railway status
```

## Troubleshooting

### Build Failures

If the build fails:

1. **Check logs**:
   ```bash
   railway logs --build
   ```

2. **Verify local build**:
   ```bash
   npm run build
   ```

3. **Common issues**:
   - Missing dependencies: Run `npm install`
   - TypeScript errors: Check `typescript.ignoreBuildErrors` in `next.config.mjs`
   - Out of memory: Increase Railway service plan

### Deployment Issues

If deployment fails:

1. **Check Railway status**:
   ```bash
   railway status
   ```

2. **Restart service**:
   ```bash
   railway restart
   ```

3. **Redeploy**:
   ```bash
   railway up --detach
   ```

### Domain Issues

If custom domain isn't working:

1. **Verify DNS records**:
   ```bash
   dig docs.aegis-vaults.xyz
   nslookup docs.aegis-vaults.xyz
   ```

2. **Check Railway dashboard**:
   - Settings > Domains
   - Ensure status is "Active"

3. **Clear DNS cache** (if testing locally):
   ```bash
   # macOS
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

   # Linux
   sudo systemd-resolve --flush-caches
   ```

## Rollback

If you need to rollback to a previous deployment:

1. **In Railway Dashboard**:
   - Go to "Deployments"
   - Find the deployment you want to rollback to
   - Click "Redeploy"

2. **Via CLI** (if you have the deployment ID):
   ```bash
   railway redeploy [deployment-id]
   ```

## Cost Optimization

Railway free tier includes:
- $5 of usage per month
- Automatic sleep after 30 minutes of inactivity
- Wake on first request

For production:
- Consider Railway Pro ($20/month)
- No sleep
- More compute resources
- Better performance

## Security

- HTTPS is automatically enabled by Railway
- All traffic is encrypted
- Railway handles SSL/TLS certificates
- No secrets or API keys needed for docs site

## Next Steps

1. Deploy to Railway: `railway up`
2. Set up custom domain
3. Test at https://docs.aegis-vaults.xyz
4. Monitor logs and metrics
5. Set up GitHub auto-deploy for CI/CD

For support, visit: https://docs.railway.app
