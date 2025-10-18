import type { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'innout',
    name: '🍔 In-N-Out Delivery',
    icon: '🍔',
    price: '$10',
    description: 'Fresh burgers, fries & shakes delivered from your choice of 6 San Diego locations',
    hasCustomInterface: true
  },
  {
    id: 'grocery',
    name: '🛒 Grocery Runs (Trader Joe\'s)',
    icon: '🛒',
    price: '$10 + 12.5% markup',
    description: 'Shop from 90+ Trader Joe\'s products or choose a quick list',
    hasCustomInterface: true
  },
  {
    id: 'feels-on-wheels',
    name: '💭 Feels on Wheels',
    icon: '💭',
    price: '$25-60',
    description: 'Someone to talk to, listen, and support you',
    hasCustomInterface: false
  },
  {
    id: 'dmv',
    name: '🚗 DMV Proxy',
    icon: '🚗',
    price: '$95',
    description: 'We handle DMV errands so you don\'t have to wait in line',
    hasCustomInterface: false
  },
  {
    id: 'eyes-on',
    name: '👁️ Eyes On (Property Check)',
    icon: '👁️',
    price: '$60',
    description: 'Visual inspection and photo documentation of your property',
    hasCustomInterface: false
  },
  {
    id: 'lost-found',
    name: '🔍 Lost & Found',
    icon: '🔍',
    price: '$40',
    description: 'Help finding or retrieving lost items',
    hasCustomInterface: false
  },
  {
    id: 'dry-cleaning',
    name: '👔 Dry Cleaning Pickup',
    icon: '👔',
    price: '$15',
    description: 'Pick up and drop off your dry cleaning',
    hasCustomInterface: false
  },
  {
    id: 'custom',
    name: '✨ Custom Errand',
    icon: '✨',
    price: 'Quote',
    description: 'Any other task you need help with - we\'ll provide a custom quote',
    hasCustomInterface: false
  }
];

