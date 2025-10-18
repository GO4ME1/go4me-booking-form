# Go4me.ai Booking Form

Complete rebuild of the Go4me.ai booking form as an independent React application with no Manus branding.

## 🎯 Features

### All 8 Service Types
- **🍔 In-N-Out Delivery** ($10) - Full menu builder with 6 locations
- **🛒 Grocery Runs** ($10 + 12.5% markup) - Trader Joe's catalog with 90+ products
- **💭 Feels on Wheels** ($25-60) - Emotional support service
- **🚗 DMV Proxy** ($95) - DMV errands
- **👁️ Eyes On** ($60) - Property checks
- **🔍 Lost & Found** ($40) - Item retrieval
- **👔 Dry Cleaning** ($15) - Pickup/delivery
- **✨ Custom Errand** (Quote) - Any other task

### In-N-Out Menu Builder
- 6 verified San Diego locations
- 4 categories: Burgers, Fries, Drinks, Shakes
- 20 menu items with accurate pricing
- Animal Style option for burgers (free)
- Custom item field
- Real-time cart management

### Trader Joe's Shopping
- 90+ products across 9 categories
- 4 pre-built Quick Lists (Essentials, Dinner Party, Meal Prep, Snack Box)
- 12.5% markup calculation
- Special instructions field
- Shopping cart with quantity controls

### Legal Compliance
- ✅ Terms of Service & Arbitration Agreement (required)
- ✅ SMS/TCPA Consent (California compliant, required)
- ✅ Optional marketing consent
- ✅ 30-day arbitration opt-out period
- ✅ Expandable full legal text

### Pricing & Payments
- Real-time price calculation
- 7.8% San Diego sales tax
- Urgency fees: +$10 (urgent), +$20 (ASAP)
- Stripe Checkout integration (ready for API key)
- Detailed pricing breakdown

### Design
- Tailwind CSS for styling
- Responsive mobile-first design
- Go4me.ai brand colors (primary green #10b981)
- Trust badges (background-checked, photo proof, secure billing)
- **NO Manus branding anywhere**

## 🛠️ Tech Stack

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Payments:** Stripe (ready to integrate)
- **Version Control:** Git + GitHub

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/GO4ME1/go4me-booking-form.git
cd go4me-booking-form

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🚀 Deployment

### Option 1: Cloudflare Pages (Recommended)

1. Build the project:
```bash
npm run build
```

2. Deploy to Cloudflare Pages:
```bash
npm install -D wrangler
npx wrangler pages deploy dist --project-name=go4me-booking
```

3. Set environment variables in Cloudflare dashboard:
- `VITE_STRIPE_PUBLISHABLE_KEY`
- `VITE_API_URL`

### Option 2: Netlify

1. Connect GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Option 3: Vercel

1. Import GitHub repository to Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

## 🔧 Backend Integration

The frontend is ready to integrate with a backend API. You'll need to:

1. **Create Stripe Checkout Session API**
   - Endpoint: `POST /api/create-checkout-session`
   - Accepts: Order data (service, customer info, items, pricing)
   - Returns: Stripe session ID

2. **Save Order to Database**
   - Triggered by Stripe webhook after successful payment
   - Store order details, customer info, and payment status

3. **Send SMS Notifications**
   - Use Twilio or similar service
   - Send order confirmation to customer
   - Notify gophers of new tasks

4. **Environment Variables**
   ```
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
   VITE_API_URL=https://api.go4me.ai
   ```

## 📋 Testing Checklist

- [x] All 8 services display correctly
- [x] In-N-Out menu builder works
- [x] Trader Joe's catalog works
- [x] Price calculation is accurate
- [x] Urgency fees apply correctly
- [x] Form validation works
- [x] Legal checkboxes are required
- [x] Responsive design works
- [x] No Manus branding visible
- [ ] Stripe payment processes (needs API key)
- [ ] SMS confirmation sent (needs Twilio setup)

## 📝 Next Steps

1. **Set up backend API** (Node.js/Express or Python/Flask)
2. **Configure Stripe** (get API keys, set up webhooks)
3. **Set up Twilio** (for SMS notifications)
4. **Deploy backend** (Cloudflare Workers, Vercel, or Railway)
5. **Update frontend API URL** (environment variable)
6. **Test end-to-end** (complete order flow)
7. **Update marketing site** (link to new booking form)

## 🔗 Links

- **Repository:** https://github.com/GO4ME1/go4me-booking-form
- **Marketing Site:** https://go4me.ai
- **Original Manus App:** https://go4me-ar7jjn.manus.space/new-task (backup)

## 📞 Support

For questions or issues:
- Email: support@go4me.ai
- GitHub Issues: https://github.com/GO4ME1/go4me-booking-form/issues

---

**Built with ❤️ for Go4me.ai**

