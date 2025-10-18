import type { OrderItem, PricingBreakdown } from '../types';

const TAX_RATE = 0.078; // 7.8% San Diego sales tax

export const URGENCY_FEES = {
  standard: 0,
  urgent: 10,
  asap: 20
};

export const SERVICE_BASE_PRICES: Record<string, number> = {
  innout: 10,
  grocery: 10,
  'feels-on-wheels': 25, // Variable, this is minimum
  dmv: 95,
  'eyes-on': 60,
  'lost-found': 40,
  'dry-cleaning': 15,
  custom: 0 // Requires quote
};

export const calculateFoodTotal = (items: OrderItem[]): number => {
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
};

export const calculateGroceryTotal = (items: OrderItem[]): number => {
  const subtotal = items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
  // Apply 12.5% markup
  return subtotal * 1.125;
};

export const calculateOrderTotal = (
  serviceId: string,
  urgency: 'standard' | 'urgent' | 'asap',
  foodItems?: OrderItem[],
  groceryItems?: OrderItem[]
): PricingBreakdown => {
  let subtotal = SERVICE_BASE_PRICES[serviceId] || 0;
  
  // Add food costs for In-N-Out
  if (serviceId === 'innout' && foodItems && foodItems.length > 0) {
    subtotal += calculateFoodTotal(foodItems);
  }
  
  // Add grocery costs with markup for Trader Joe's
  if (serviceId === 'grocery' && groceryItems && groceryItems.length > 0) {
    const grocerySubtotal = groceryItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
    subtotal += grocerySubtotal * 0.125; // 12.5% markup
  }
  
  // Add urgency fee
  const urgencyFee = URGENCY_FEES[urgency];
  const subtotalWithUrgency = subtotal + urgencyFee;
  
  // Calculate tax
  const tax = subtotalWithUrgency * TAX_RATE;
  
  // Calculate total
  const total = subtotalWithUrgency + tax;
  
  return {
    subtotal,
    deliveryFee: SERVICE_BASE_PRICES[serviceId] || 0,
    urgencyFee,
    tax,
    total
  };
};

export const formatCurrency = (amount: number): string => {
  return `$${amount.toFixed(2)}`;
};

