import { useState } from 'react';
import { INNOUT_LOCATIONS, INNOUT_MENU } from '../data/innoutData';
import type { OrderItem } from '../types';
import { Trash2, Plus, Minus } from 'lucide-react';

interface InNOutMenuProps {
  selectedLocation: string;
  onLocationChange: (locationId: string) => void;
  order: OrderItem[];
  onOrderChange: (order: OrderItem[]) => void;
}

export default function InNOutMenu({ selectedLocation, onLocationChange, order, onOrderChange }: InNOutMenuProps) {
  const [activeCategory, setActiveCategory] = useState<'burgers' | 'fries' | 'drinks' | 'shakes'>('burgers');
  const [customItem, setCustomItem] = useState('');

  const addMenuItem = (category: string, item: any) => {
    const newItem: OrderItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      uniqueId: `${Date.now()}-${Math.random()}`,
      category,
      animalStyle: false
    };
    onOrderChange([...order, newItem]);
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

  const toggleAnimalStyle = (uniqueId: string) => {
    onOrderChange(order.map(item => {
      if (item.uniqueId === uniqueId && item.category === 'burgers') {
        return { ...item, animalStyle: !item.animalStyle };
      }
      return item;
    }));
  };

  const removeItem = (uniqueId: string) => {
    onOrderChange(order.filter(item => item.uniqueId !== uniqueId));
  };

  const addCustomItem = () => {
    if (customItem.trim()) {
      const newItem: OrderItem = {
        id: 'custom',
        name: customItem,
        price: 0,
        quantity: 1,
        uniqueId: `${Date.now()}-${Math.random()}`,
        category: 'custom'
      };
      onOrderChange([...order, newItem]);
      setCustomItem('');
    }
  };

  const calculateTotal = () => {
    return order.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-800">🍔 In-N-Out Order</h3>
        
        {/* Location Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Select Location *
          </label>
          <select
            value={selectedLocation}
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            required
          >
            <option value="">Choose an In-N-Out location...</option>
            {INNOUT_LOCATIONS.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto">
          {(['burgers', 'fries', 'drinks', 'shakes'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {INNOUT_MENU[activeCategory].map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 border-2 border-gray-200 rounded-lg hover:border-primary transition-all"
            >
              <div>
                <div className="font-medium text-gray-800">{item.name}</div>
                <div className="text-sm text-gray-600">${item.price.toFixed(2)}</div>
              </div>
              <button
                onClick={() => addMenuItem(activeCategory, item)}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all flex items-center gap-1"
              >
                <Plus size={16} />
                Add
              </button>
            </div>
          ))}
        </div>

        {/* Custom Item */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Need something else?
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={customItem}
              onChange={(e) => setCustomItem(e.target.value)}
              placeholder="e.g., Extra sauce, special request..."
              className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              onKeyPress={(e) => e.key === 'Enter' && addCustomItem()}
            />
            <button
              onClick={addCustomItem}
              className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-all"
            >
              Add Note
            </button>
          </div>
        </div>

        {/* Order Summary */}
        {order.length > 0 && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-bold mb-3 text-gray-800">Your Order</h4>
            <div className="space-y-2">
              {order.map((item) => (
                <div key={item.uniqueId} className="flex items-center justify-between bg-white p-3 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">{item.name}</div>
                    {item.category === 'burgers' && (
                      <label className="flex items-center gap-2 mt-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={item.animalStyle || false}
                          onChange={() => toggleAnimalStyle(item.uniqueId)}
                          className="rounded text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-gray-600">Animal Style (free)</span>
                      </label>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-2">
                      <button
                        onClick={() => updateQuantity(item.uniqueId, -1)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.uniqueId, 1)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <div className="w-16 text-right font-medium text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button
                      onClick={() => removeItem(item.uniqueId)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t-2 border-gray-200 flex justify-between items-center">
              <span className="font-bold text-gray-800">Food Total:</span>
              <span className="text-xl font-bold text-primary">${calculateTotal().toFixed(2)}</span>
            </div>
            <div className="text-sm text-gray-600 mt-2">
              + $10.00 delivery fee (added at checkout)
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

