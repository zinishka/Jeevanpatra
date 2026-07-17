# Deployment Guide

## Step 1: Push to GitHub

### Initialize Git (if not already done)
```bash
cd jeevanpatra
git init
git add .
git commit -m "Initial commit: JeevanPatra portal"
```

### Create GitHub Repository
1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `jeevanpatra`
3. Do NOT initialize with README, .gitignore, or license (we already have these)

### Push to GitHub
```bash
git remote add origin https://github.com/yourusername/jeevanpatra.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js
5. Configure environment variables (optional)
6. Click "Deploy"

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

## Environment Setup

### For Local Development
```bash
# Copy example env file
cp .env.example .env.local

# Edit with your values
nano .env.local
```

### For Vercel Production
1. Go to Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables:
   - `NEXT_PUBLIC_API_URL`
   - `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`

## Post-Deployment Checklist

- [ ] Domain configured (if custom domain)
- [ ] SSL certificate active
- [ ] Environment variables set
- [ ] Analytics configured
- [ ] Staging environment tested
- [ ] Performance metrics checked
- [ ] SEO meta tags verified

## Monitoring

### Vercel Analytics
- Monitor build times
- Track deployment history
- Check error rates
- Review performance metrics

### Custom Monitoring
- Set up Google Analytics
- Configure error logging
- Monitor uptime
- Track user interactions

## Troubleshooting

### Build Failures
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

### Deployment Issues
1. Check build logs in Vercel dashboard
2. Verify all environment variables are set
3. Ensure node_modules are not committed
4. Check Node.js version compatibility

## Rollback

To rollback to a previous version:
1. Go to Vercel dashboard
2. Select desired deployment
3. Click "Promote to Production"

## Local Testing Before Deploy

```bash
# Build locally
npm run build

# Test production build
npm start

# Navigate to http://localhost:3000
```

## Performance Optimization

### Images
- Use Next.js Image component
- Optimize with Vercel Image Optimization

### Code Splitting
- Already handled by Next.js
- Monitor bundle size

### Caching
- Set Cache-Control headers
- Use Vercel's Edge Cache

## Security

- Keep dependencies updated: `npm update`
- Regular security audits: `npm audit`
- Use environment variables for secrets
- Enable Vercel's security features

## Support

For deployment issues:
- Check [Vercel Docs](https://vercel.com/docs)
- View [Next.js Deployment](https://nextjs.org/docs/deployment)
- Contact Vercel support if needed

---

Your site will be live at: `https://jeevanpatra.vercel.app`
