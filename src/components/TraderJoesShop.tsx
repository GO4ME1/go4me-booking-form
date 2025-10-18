import { useState } from 'react';
import { TRADER_JOES_PRODUCTS, QUICK_LISTS, findProductById } from '../data/traderJoesProducts';
import type { OrderItem } from '../types';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';

interface TraderJoesShopProps {
  order: OrderItem[];
  onOrderChange: (order: OrderItem[]) => void;
  specialInstructions: string;
  onInstructionsChange: (instructions: string) => void;
}

export default function TraderJoesShop({ order, onOrderChange, specialInstructions, onInstructionsChange }: TraderJoesShopProps) {
  const [activeCategory, setActiveCategory] = useState<string>('produce');

  const categories = [
    { id: 'produce', name: '🥬 Produce', icon: '🥬' },
    { id: 'dairy', name: '🥛 Dairy & Eggs', icon: '🥛' },
    { id: 'cheese', name: '🧀 Cheese', icon: '🧀' },
    { id: 'frozen', name: '❄️ Frozen', icon: '❄️' },
    { id: 'snacks', name: '🍿 Snacks', icon: '🍿' },
    { id: 'pantry', name: '🥫 Pantry', icon: '🥫' },
    { id: 'beverages', name: '🥤 Beverages', icon: '🥤' },
    { id: 'bakery', name: '🥖 Bakery', icon: '🥖' },
    { id: 'other', name: '⭐ Other Favorites', icon: '⭐' }
  ];

  const loadQuickList = (listId: string) => {
    const quickList = QUICK_LISTS.find(list => list.id === listId);
    if (!quickList) return;

    const newItems: OrderItem[] = [];
    quickList.items.forEach(productId => {
      const product = findProductById(productId);
      if (product) {
        newItems.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          uniqueId: `${Date.now()}-${Math.random()}`,
          category: product.category
        });
      }
    });

    onOrderChange([...order, ...newItems]);
  };

  const addProduct = (product: any) => {
    const existingItem = order.find(item => item.id === product.id);
    if (existingItem) {
      updateQuantity(existingItem.uniqueId, 1);
    } else {
      const newItem: OrderItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        uniqueId: `${Date.now()}-${Math.random()}`,
        category: product.category
      };
      onOrderChange([...order, newItem]);
    }
  };

  const updateQuantity = (uniqueId: string, change: number) => {
    onOrderChange(order.map(item => {
      if (item.uniqueId === uniqueId) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (uniqueId: string) => {
    onOrderChange(order.filter(item => item.uniqueId !== uniqueId));
  };

  const calculateSubtotal = () => {
    return order.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateMarkup = () => {
    return calculateSubtotal() * 0.125; // 12.5% markup
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateMarkup();
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-800">🛒 Trader Joe's Shopping</h3>

        {/* Quick Lists */}
        <div className="mb-6">
          <h4 className="font-bold mb-3 text-gray-800">Quick Lists</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {QUICK_LISTS.map((list) => (
              <div
                key={list.id}
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-bold text-gray-800">{list.name}</div>
                    <div className="text-sm text-gray-600">{list.description}</div>
                  </div>
                  <div className="text-lg font-bold text-primary">${list.price}</div>
                </div>
                <button
                  onClick={() => loadQuickList(list.id)}
                  className="w-full mt-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-all"
                >
                  Load This List
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-4">
          <h4 className="font-bold mb-3 text-gray-800">Browse by Category</h4>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {TRADER_JOES_PRODUCTS[activeCategory]?.map((product) => (
            <div
              key={product.id}
              className="p-3 border-2 border-gray-200 rounded-lg hover:border-primary transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <div className="font-medium text-gray-800 text-sm">{product.name}</div>
                  <div className="text-xs text-gray-600">{product.unit}</div>
                </div>
                <div className="font-bold text-primary ml-2">${product.price.toFixed(2)}</div>
              </div>
              <button
                onClick={() => addProduct(product)}
                className="w-full px-3 py-1.5 bg-primary text-white text-sm rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-1"
              >
                <Plus size={14} />
                Add
              </button>
            </div>
          ))}
        </div>

        {/* Special Instructions */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Special Instructions (optional)
          </label>
          <textarea
            value={specialInstructions}
            onChange={(e) => onInstructionsChange(e.target.value)}
            placeholder="e.g., Ripe avocados, green bananas, substitutions OK..."
            rows={3}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>

        {/* Shopping Cart */}
        {order.length > 0 && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <ShoppingCart size={20} />
              <h4 className="font-bold text-gray-800">Your Cart ({order.length} items)</h4>
            </div>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {order.map((item) => (
                <div key={item.uniqueId} className="flex items-center justify-between bg-white p-3 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 text-sm">{item.name}</div>
                    <div className="text-xs text-gray-600">${item.price.toFixed(2)} each</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-2">
                      <button
                        onClick={() => updateQuantity(item.uniqueId, -1)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.uniqueId, 1)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <div className="w-14 text-right font-medium text-gray-800 text-sm">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button
                      onClick={() => removeItem(item.uniqueId)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t-2 border-gray-200 space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Groceries Subtotal:</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Markup (12.5%):</span>
                <span>${calculateMarkup().toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center font-bold text-gray-800">
                <span>Total:</span>
                <span className="text-xl text-primary">${calculateTotal().toFixed(2)}</span>
              </div>
              <div className="text-sm text-gray-600">
                + $10.00 delivery fee (added at checkout)
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

