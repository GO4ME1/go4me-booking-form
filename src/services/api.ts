import { loadStripe } from '@stripe/stripe-js';
import type { BookingFormData } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder';

// Initialize Stripe
const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

/**
 * Create a Stripe Checkout session and redirect to payment
 */
export async function createCheckoutSession(formData: BookingFormData) {
  try {
    // Call backend API to create checkout session
    const response = await fetch(`${API_URL}/api/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to create checkout session');
    }

    const { sessionId, orderNumber } = await response.json();

    // Redirect to Stripe Checkout
    const stripe = await stripePromise;
    if (!stripe) {
      throw new Error('Stripe failed to load');
    }

    const result: any = await (stripe as any).redirectToCheckout({ sessionId });
    const error = result?.error;

    if (error) {
      throw new Error(error.message);
    }

    return { sessionId, orderNumber };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
}

/**
 * Test API connection
 */
export async function testConnection() {
  try {
    const response = await fetch(`${API_URL}/health`);
    return response.ok;
  } catch (error) {
    console.error('API connection failed:', error);
    return false;
  }
}

