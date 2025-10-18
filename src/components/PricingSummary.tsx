import type { OrderItem, PricingBreakdown } from '../types';
import { formatCurrency } from '../utils/pricing';
import { DollarSign, Clock, Calculator } from 'lucide-react';

interface PricingSummaryProps {
  serviceId: string;
  urgency: 'standard' | 'urgent' | 'asap';
  pricing: PricingBreakdown;
  foodItems?: OrderItem[];
  groceryItems?: OrderItem[];
}

export default function PricingSummary({ serviceId, urgency, pricing, foodItems, groceryItems }: PricingSummaryProps) {
  // const hasItems = (foodItems && foodItems.length > 0) || (groceryItems && groceryItems.length > 0);

  if (!serviceId || pricing.total === 0) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-lg border-2 border-primary/20">
      <div className="flex items-center gap-2 mb-4">
        <Calculator size={24} className="text-primary" />
        <h3 className="text-xl font-bold text-gray-800">Order Summary</h3>
      </div>

      <div className="space-y-3 bg-white p-4 rounded-lg">
        {/* Service Fee */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <DollarSign size={16} className="text-gray-500" />
            <span className="text-gray-700">
              {serviceId === 'innout' ? 'Delivery Fee' : 
               serviceId === 'grocery' ? 'Delivery Fee' : 
               'Service Fee'}
            </span>
          </div>
          <span className="font-medium text-gray-800">{formatCurrency(pricing.deliveryFee)}</span>
        </div>

        {/* Food/Grocery Items */}
        {serviceId === 'innout' && foodItems && foodItems.length > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Food Total ({foodItems.length} items)</span>
            <span className="font-medium text-gray-800">
              {formatCurrency(foodItems.reduce((sum, item) => sum + (item.price * item.quantity), 0))}
            </span>
          </div>
        )}

        {serviceId === 'grocery' && groceryItems && groceryItems.length > 0 && (
          <>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Groceries ({groceryItems.length} items)</span>
              <span className="font-medium text-gray-800">
                {formatCurrency(groceryItems.reduce((sum, item) => sum + (item.price * item.quantity), 0))}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Markup (12.5%)</span>
              <span className="font-medium text-gray-800">
                {formatCurrency(groceryItems.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 0.125)}
              </span>
            </div>
          </>
        )}

        {/* Urgency Fee */}
        {pricing.urgencyFee > 0 && (
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-orange-500" />
              <span className="text-gray-700">
                {urgency === 'urgent' ? 'Urgent (2 hrs)' : 'ASAP (1 hr)'}
              </span>
            </div>
            <span className="font-medium text-orange-600">+{formatCurrency(pricing.urgencyFee)}</span>
          </div>
        )}

        {/* Subtotal */}
        <div className="pt-3 border-t-2 border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Subtotal</span>
            <span className="font-medium text-gray-800">{formatCurrency(pricing.subtotal + pricing.urgencyFee)}</span>
          </div>
        </div>

        {/* Tax */}
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Tax (7.8%)</span>
          <span className="font-medium text-gray-800">{formatCurrency(pricing.tax)}</span>
        </div>

        {/* Total */}
        <div className="pt-3 border-t-2 border-primary/30">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-800">Total</span>
            <span className="text-2xl font-bold text-primary">{formatCurrency(pricing.total)}</span>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-center">
        <div className="bg-white p-2 rounded">
          <div className="font-semibold text-gray-700">✓ Background-checked</div>
        </div>
        <div className="bg-white p-2 rounded">
          <div className="font-semibold text-gray-700">📸 Photo proof</div>
        </div>
        <div className="bg-white p-2 rounded">
          <div className="font-semibold text-gray-700">💳 Secure billing</div>
        </div>
      </div>
    </div>
  );
}

