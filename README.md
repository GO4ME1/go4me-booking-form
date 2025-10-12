# Go4me.ai Booking Form

This is the frontend booking form for Go4me.ai - a digital-to-physical agent service.

## Overview

The booking form allows customers to:
- Select from various services (In-N-Out delivery, DMV proxy, etc.)
- Enter their details and preferences
- Make payments via Stripe
- Receive SMS confirmations via Twilio

## Backend Integration

The form connects to the Go4me.ai backend API at:
- **Production API**: `https://e5h6i7cvqenj.manus.space`

## Deployment

### Deploy to Netlify (Recommended)

1. **Sign up**: Go to https://netlify.com and create a free account
2. **Import**: Click "Add new site" → "Import an existing project" → GitHub
3. **Select**: Choose `GO4ME1/go4me-booking-form`
4. **Settings**: 
   - Build command: `echo 'No build needed'`
   - Publish directory: `.`
5. **Deploy**: Click "Deploy site"

Netlify will provide a permanent URL and handle React Router automatically via `netlify.toml`.

## Technology Stack

- React
- Vite (build system)
- Stripe for payments
- Twilio for SMS notifications

## Project Structure

```
go4me-frontend/
├── index.html          # Main HTML file
├── assets/
│   ├── index-*.js      # Compiled JavaScript bundle
│   └── index-*.css     # Compiled CSS
├── favicon.ico         # Site favicon
└── README.md          # This file
```

## Development Notes

This is a compiled/built version of the booking form. The source code was developed in a previous session and this version has been updated with the new backend API URL.

## Related Repositories

- Marketing Website: https://github.com/GO4ME1/go4me-marketing

## Contact

For questions or support, visit https://go4me.ai

