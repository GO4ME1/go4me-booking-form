# Go4me.ai Booking Form - Deployment Guide

## Current Deployment

**Live URL**: https://go4me-ar7jjn.manus.space (to be updated with new deployment)

**Backend API**: https://e5h6i7cvqenj.manus.space

## Deployment History

### October 2025 - Backend URL Update
- Updated backend API URL from old endpoints to `https://e5h6i7cvqenj.manus.space`
- Old URLs replaced:
  - `https://lnh8imcwo9kg.manus.space`
  - `https://mzhyi8c1gdek.manus.space`

## Files Structure

This is a compiled/built React application:

```
go4me-frontend/
├── index.html              # Main HTML entry point
├── assets/
│   ├── index-*.js         # Compiled JavaScript bundle (React app)
│   └── index-*.css        # Compiled CSS styles
├── favicon.ico            # Site favicon
├── README.md              # Project overview
└── DEPLOYMENT.md          # This file
```

## How to Deploy

### Option 1: Manus Platform (Recommended)
1. Use the Manus deployment tool
2. Select "static" framework
3. Point to this directory
4. Click "Publish"

### Option 2: Any Static Host
This is a static site and can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

Simply upload all files maintaining the directory structure.

## Backend Configuration

The backend URL is hardcoded in the compiled JavaScript bundle (`assets/index-*.js`). 

To change the backend URL:
1. Download the current bundle
2. Replace all occurrences of the old URL with the new URL
3. Redeploy the updated files

**Current Backend**: `https://e5h6i7cvqenj.manus.space`

## Integration Points

### Stripe
- Payment processing is integrated
- Stripe.js is loaded from CDN

### Twilio
- SMS notifications for order confirmations
- Configured in backend

### Services Offered
- In-N-Out Delivery
- DMV Proxy
- Eyes On (property checks)
- Lost & Found
- Dry Cleaning
- Open Request (custom tasks)
- Grocery Runs
- Feels on Wheels

## Related Repositories

- **Marketing Website**: https://github.com/GO4ME1/go4me-marketing
- **Booking Form**: https://github.com/GO4ME1/go4me-frontend (this repo)

## Support

For questions or issues:
- Website: https://go4me.ai
- Marketing site: https://go4me-yb92br.manus.space

