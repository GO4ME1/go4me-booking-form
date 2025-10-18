import type { TraderJoesProduct, QuickList } from '../types';

// Trader Joe's Product Catalog
// Organized by category with 90+ popular items

export const TRADER_JOES_PRODUCTS: Record<string, TraderJoesProduct[]> = {
  produce: [
    { id: 'bananas', name: 'Organic Bananas', price: 0.19, unit: 'each', category: 'produce', popular: true },
    { id: 'avocados', name: 'Avocados', price: 1.49, unit: 'each', category: 'produce', popular: true },
    { id: 'spinach', name: 'Organic Baby Spinach', price: 2.99, unit: 'bag', category: 'produce', popular: true },
    { id: 'tomatoes', name: 'Cherry Tomatoes', price: 2.99, unit: 'container', category: 'produce' },
    { id: 'salad', name: 'Mixed Greens Salad', price: 3.49, unit: 'bag', category: 'produce' },
    { id: 'broccoli', name: 'Broccoli Florets', price: 2.49, unit: 'bag', category: 'produce' },
    { id: 'carrots', name: 'Organic Carrots', price: 1.99, unit: 'bag', category: 'produce' },
    { id: 'bell-peppers', name: 'Bell Peppers (3-pack)', price: 3.49, unit: 'pack', category: 'produce' },
    { id: 'cucumbers', name: 'Persian Cucumbers', price: 2.49, unit: 'bag', category: 'produce' },
  ],
  dairy: [
    { id: 'eggs', name: 'Organic Large Eggs', price: 4.99, unit: 'dozen', category: 'dairy', popular: true },
    { id: 'milk', name: 'Organic Whole Milk', price: 5.99, unit: 'half gallon', category: 'dairy', popular: true },
    { id: 'butter', name: 'Salted Butter', price: 3.99, unit: 'lb', category: 'dairy' },
    { id: 'yogurt', name: 'Greek Yogurt', price: 4.99, unit: 'container', category: 'dairy', popular: true },
    { id: 'cream-cheese', name: 'Cream Cheese', price: 2.99, unit: 'package', category: 'dairy' },
    { id: 'sour-cream', name: 'Sour Cream', price: 2.49, unit: 'container', category: 'dairy' },
    { id: 'half-and-half', name: 'Half & Half', price: 2.99, unit: 'pint', category: 'dairy' },
  ],
  cheese: [
    { id: 'unexpected-cheddar', name: 'Unexpected Cheddar', price: 4.99, unit: 'block', category: 'cheese', popular: true },
    { id: 'brie', name: 'Brie Cheese', price: 4.99, unit: 'wheel', category: 'cheese' },
    { id: 'goat-cheese', name: 'Goat Cheese Log', price: 3.99, unit: 'log', category: 'cheese' },
    { id: 'mozzarella', name: 'Fresh Mozzarella', price: 3.49, unit: 'ball', category: 'cheese' },
    { id: 'shredded-cheese', name: 'Shredded Mexican Blend', price: 3.49, unit: 'bag', category: 'cheese' },
    { id: 'parmesan', name: 'Parmigiano Reggiano', price: 8.99, unit: 'wedge', category: 'cheese' },
    { id: 'feta', name: 'Feta Cheese Crumbles', price: 3.99, unit: 'container', category: 'cheese' },
  ],
  frozen: [
    { id: 'mandarin-chicken', name: 'Mandarin Orange Chicken', price: 4.99, unit: 'bag', category: 'frozen', popular: true },
    { id: 'cauliflower-gnocchi', name: 'Cauliflower Gnocchi', price: 2.99, unit: 'bag', category: 'frozen', popular: true },
    { id: 'frozen-berries', name: 'Organic Mixed Berries', price: 3.99, unit: 'bag', category: 'frozen' },
    { id: 'pizza', name: 'Pizza Margherita', price: 4.49, unit: 'pizza', category: 'frozen' },
    { id: 'tikka-masala', name: 'Chicken Tikka Masala', price: 4.49, unit: 'package', category: 'frozen' },
    { id: 'dumplings', name: 'Pork Shu Mai', price: 3.99, unit: 'bag', category: 'frozen' },
    { id: 'stir-fry', name: 'Vegetable Stir Fry', price: 2.99, unit: 'bag', category: 'frozen' },
    { id: 'ice-cream', name: 'Belgian Chocolate Ice Cream', price: 3.99, unit: 'pint', category: 'frozen', popular: true },
    { id: 'frozen-mango', name: 'Frozen Mango Chunks', price: 2.99, unit: 'bag', category: 'frozen' },
  ],
  snacks: [
    { id: 'pb-cups', name: 'Dark Chocolate PB Cups', price: 4.49, unit: 'bag', category: 'snacks', popular: true },
    { id: 'ebtb-seasoning', name: 'Everything But The Bagel', price: 2.99, unit: 'jar', category: 'snacks', popular: true },
    { id: 'trail-mix', name: "Rainbow's End Trail Mix", price: 4.99, unit: 'bag', category: 'snacks' },
    { id: 'chips', name: 'Organic Tortilla Chips', price: 2.99, unit: 'bag', category: 'snacks' },
    { id: 'cookie-butter', name: 'Speculoos Cookie Butter', price: 3.99, unit: 'jar', category: 'snacks', popular: true },
    { id: 'crackers', name: 'Water Crackers', price: 2.49, unit: 'box', category: 'snacks' },
    { id: 'nuts', name: 'Roasted & Salted Almonds', price: 5.99, unit: 'container', category: 'snacks' },
    { id: 'popcorn', name: 'Organic Popcorn', price: 2.49, unit: 'bag', category: 'snacks' },
    { id: 'dark-chocolate', name: 'Dark Chocolate Bar', price: 1.99, unit: 'bar', category: 'snacks' },
  ],
  pantry: [
    { id: 'pasta', name: 'Organic Pasta', price: 1.29, unit: 'box', category: 'pantry', popular: true },
    { id: 'marinara', name: 'Marinara Sauce', price: 1.99, unit: 'jar', category: 'pantry', popular: true },
    { id: 'olive-oil', name: 'Extra Virgin Olive Oil', price: 6.99, unit: 'bottle', category: 'pantry' },
    { id: 'almond-butter', name: 'Creamy Almond Butter', price: 6.99, unit: 'jar', category: 'pantry' },
    { id: 'chicken-broth', name: 'Organic Chicken Broth', price: 2.49, unit: 'carton', category: 'pantry' },
    { id: 'rice', name: 'Jasmine Rice', price: 3.99, unit: 'bag', category: 'pantry' },
    { id: 'quinoa', name: 'Organic Quinoa', price: 4.99, unit: 'bag', category: 'pantry' },
    { id: 'canned-tomatoes', name: 'Crushed Tomatoes', price: 0.99, unit: 'can', category: 'pantry' },
    { id: 'beans', name: 'Organic Black Beans', price: 0.99, unit: 'can', category: 'pantry' },
    { id: 'honey', name: 'Organic Raw Honey', price: 5.99, unit: 'jar', category: 'pantry' },
  ],
  beverages: [
    { id: 'wine', name: 'Charles Shaw Wine', price: 2.99, unit: 'bottle', category: 'beverages', popular: true },
    { id: 'sparkling-water', name: 'Sparkling Water', price: 2.99, unit: '8-pack', category: 'beverages' },
    { id: 'cold-brew', name: 'Cold Brew Coffee', price: 7.99, unit: 'bottle', category: 'beverages' },
    { id: 'orange-juice', name: 'Organic Orange Juice', price: 3.99, unit: 'carton', category: 'beverages' },
    { id: 'kombucha', name: 'Organic Kombucha', price: 2.99, unit: 'bottle', category: 'beverages' },
    { id: 'almond-milk', name: 'Almond Milk', price: 2.99, unit: 'carton', category: 'beverages' },
    { id: 'coconut-water', name: 'Coconut Water', price: 1.99, unit: 'bottle', category: 'beverages' },
  ],
  bakery: [
    { id: 'sourdough', name: 'Sourdough Bread', price: 3.49, unit: 'loaf', category: 'bakery', popular: true },
    { id: 'bagels', name: 'Everything Bagels', price: 3.49, unit: '6-pack', category: 'bakery' },
    { id: 'brioche', name: 'Brioche Bread', price: 3.99, unit: 'loaf', category: 'bakery' },
    { id: 'croissants', name: 'Butter Croissants', price: 4.49, unit: '4-pack', category: 'bakery' },
    { id: 'tortillas', name: 'Flour Tortillas', price: 2.49, unit: 'package', category: 'bakery' },
    { id: 'pita', name: 'Whole Wheat Pita', price: 2.49, unit: 'package', category: 'bakery' },
    { id: 'english-muffins', name: 'English Muffins', price: 2.99, unit: '6-pack', category: 'bakery' },
  ],
  other: [
    { id: 'chicken-breast', name: 'Organic Chicken Breast', price: 7.99, unit: 'lb', category: 'other' },
    { id: 'ground-beef', name: 'Grass-Fed Ground Beef', price: 6.99, unit: 'lb', category: 'other' },
    { id: 'salmon', name: 'Atlantic Salmon Fillet', price: 9.99, unit: 'lb', category: 'other' },
    { id: 'shrimp', name: 'Frozen Shrimp', price: 8.99, unit: 'bag', category: 'other' },
    { id: 'hummus', name: 'Classic Hummus', price: 3.49, unit: 'container', category: 'other' },
    { id: 'salsa', name: 'Salsa Verde', price: 2.99, unit: 'jar', category: 'other' },
    { id: 'guacamole', name: 'Organic Guacamole', price: 3.99, unit: 'container', category: 'other' },
  ]
};

// Pre-built Quick Lists
export const QUICK_LISTS: QuickList[] = [
  {
    id: 'essentials',
    name: "TJ's Essentials",
    price: 45,
    description: 'Basic groceries for the week',
    items: ['sourdough', 'milk', 'eggs', 'butter', 'bananas', 'yogurt']
  },
  {
    id: 'dinner-party',
    name: 'Dinner Party',
    price: 75,
    description: 'Impress your guests',
    items: ['wine', 'unexpected-cheddar', 'brie', 'crackers', 'pb-cups', 'salmon']
  },
  {
    id: 'meal-prep',
    name: 'Meal Prep Sunday',
    price: 60,
    description: 'Healthy meals for the week',
    items: ['chicken-breast', 'broccoli', 'rice', 'quinoa', 'spinach', 'olive-oil']
  },
  {
    id: 'snack-box',
    name: 'Healthy Snack Box',
    price: 35,
    description: 'Nutritious snacks',
    items: ['nuts', 'trail-mix', 'yogurt', 'frozen-berries', 'almond-butter']
  }
];

// Helper function to get all products as a flat array
export const getAllProducts = (): TraderJoesProduct[] => {
  return Object.values(TRADER_JOES_PRODUCTS).flat();
};

// Helper function to find a product by ID
export const findProductById = (id: string): TraderJoesProduct | undefined => {
  return getAllProducts().find(p => p.id === id);
};

