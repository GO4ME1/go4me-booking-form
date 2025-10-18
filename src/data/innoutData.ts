import type { InNOutLocation, InNOutMenuItem } from '../types';

// In-N-Out locations in San Diego (VERIFIED CORRECT ADDRESSES)
export const INNOUT_LOCATIONS: InNOutLocation[] = [
  { id: 'sports-arena', name: 'Sports Arena (3102 Sports Arena Blvd)', address: '3102 Sports Arena Blvd, San Diego, CA 92110' },
  { id: 'mission-valley', name: 'Mission Valley (2005 Camino Del Este)', address: '2005 Camino Del Este, San Diego, CA 92108' },
  { id: 'pacific-beach', name: 'Pacific Beach (2910 Damon Ave)', address: '2910 Damon Ave, Pacific Beach, CA 92109' },
  { id: 'kearny-mesa', name: 'Kearny Mesa (4375 Kearny Mesa Rd)', address: '4375 Kearny Mesa Rd, San Diego, CA 92111' },
  { id: 'friars-road', name: 'Friars Road (10370 Friars Rd)', address: '10370 Friars Rd, San Diego, CA 92120' },
  { id: 'carmel-mountain', name: 'Carmel Mountain (11880 Carmel Mountain Rd)', address: '11880 Carmel Mountain Rd, San Diego, CA 92128' }
];

// In-N-Out Menu
export const INNOUT_MENU: Record<string, InNOutMenuItem[]> = {
  burgers: [
    { id: 'hamburger', name: 'Hamburger', price: 3.00, category: 'burgers' },
    { id: 'cheeseburger', name: 'Cheeseburger', price: 3.60, category: 'burgers' },
    { id: 'double-double', name: 'Double-Double', price: 5.25, category: 'burgers' },
    { id: '3x3', name: '3x3', price: 7.00, category: 'burgers' },
    { id: 'protein-style', name: 'Protein Style (lettuce wrap)', price: 0, category: 'burgers' }
  ],
  fries: [
    { id: 'fries', name: 'French Fries', price: 2.25, category: 'fries' },
    { id: 'animal-fries', name: 'Animal Style Fries', price: 4.25, category: 'fries' }
  ],
  drinks: [
    { id: 'coke', name: 'Coca-Cola', price: 2.00, category: 'drinks' },
    { id: 'diet-coke', name: 'Diet Coke', price: 2.00, category: 'drinks' },
    { id: 'sprite', name: 'Sprite', price: 2.00, category: 'drinks' },
    { id: 'lemonade', name: 'Lemonade', price: 2.00, category: 'drinks' },
    { id: 'iced-tea', name: 'Iced Tea', price: 2.00, category: 'drinks' },
    { id: 'milk', name: 'Milk', price: 1.75, category: 'drinks' }
  ],
  shakes: [
    { id: 'chocolate', name: 'Chocolate Shake', price: 2.75, category: 'shakes' },
    { id: 'vanilla', name: 'Vanilla Shake', price: 2.75, category: 'shakes' },
    { id: 'strawberry', name: 'Strawberry Shake', price: 2.75, category: 'shakes' }
  ]
};

