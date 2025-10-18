export interface Service {
  id: string;
  name: string;
  icon: string;
  price: string;
  description: string;
  hasCustomInterface?: boolean;
}

export interface InNOutLocation {
  id: string;
  name: string;
  address: string;
}

export interface InNOutMenuItem {
  id: string;
  name: string;
  price: number;
  category?: 'burgers' | 'fries' | 'drinks' | 'shakes';
}

export interface TraderJoesProduct {
  id: string;
  name: string;
  price: number;
  unit: string;
  category: string;
  popular?: boolean;
}

export interface QuickList {
  id: string;
  name: string;
  price: number;
  description: string;
  items: string[]; // Product IDs
}

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  uniqueId: string;
  animalStyle?: boolean;
  category?: string;
}

export interface OrderData {
  service: string;
  customerName: string;
  customerPhone: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  gateCode?: string;
  deliveryPreference: 'meet' | 'leave';
  taskDetails?: string;
  urgency: 'standard' | 'urgent' | 'asap';
  innoutLocation?: string;
  innoutOrder?: OrderItem[];
  groceryOrder?: OrderItem[];
  agreedToTerms: boolean;
  agreedToSms: boolean;
  agreedToMarketing: boolean;
}

export interface PricingBreakdown {
  subtotal: number;
  deliveryFee: number;
  urgencyFee: number;
  tax: number;
  total: number;
}

