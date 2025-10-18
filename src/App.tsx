import { useState } from 'react';
import { SERVICES } from './data/services';
import type { OrderData } from './types';
import { calculateOrderTotal } from './utils/pricing';
import ServiceSelector from './components/ServiceSelector';
import CustomerInfoForm from './components/CustomerInfoForm';
import InNOutMenu from './components/InNOutMenu';
import TraderJoesShop from './components/TraderJoesShop';
import LegalAgreements from './components/LegalAgreements';
import PricingSummary from './components/PricingSummary';
import { ShoppingBag, ArrowRight } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState<OrderData>({
    service: '',
    customerName: '',
    customerPhone: '',
    street: '',
    city: '',
    state: 'CA',
    zip: '',
    gateCode: '',
    deliveryPreference: 'meet',
    taskDetails: '',
    urgency: 'standard',
    innoutLocation: '',
    innoutOrder: [] as any[],
    groceryOrder: [] as any[],
    agreedToTerms: false,
    agreedToSms: false,
    agreedToMarketing: false
  });

  const [specialInstructions, setSpecialInstructions] = useState('');

  const handleFieldChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleAgreementChange = (field: 'agreedToTerms' | 'agreedToSms' | 'agreedToMarketing', value: boolean) => {
    setFormData({ ...formData, [field]: value });
  };

  const pricing = calculateOrderTotal(
    formData.service,
    formData.urgency,
    formData.innoutOrder,
    formData.groceryOrder
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (formData.service === 'innout') {
      if (!formData.innoutLocation) {
        alert('Please select an In-N-Out location');
        return;
      }
      if (!formData.innoutOrder || formData.innoutOrder.length === 0) {
        alert('Please add at least one item to your order');
        return;
      }
    }

    if (formData.service === 'grocery') {
      if (!formData.groceryOrder || formData.groceryOrder.length === 0) {
        alert('Please add at least one item to your shopping cart');
        return;
      }
    }

    if (!formData.agreedToTerms) {
      alert('Please agree to the Terms of Service and Arbitration Agreement');
      return;
    }

    if (!formData.agreedToSms) {
      alert('Please consent to receive SMS updates (required for order tracking)');
      return;
    }

    // In a real implementation, this would redirect to Stripe Checkout
    console.log('Order submitted:', { ...formData, specialInstructions, pricing });
    alert(`Order total: $${pricing.total.toFixed(2)}\n\nIn production, this would redirect to Stripe Checkout.`);
  };

  const selectedService = SERVICES.find(s => s.id === formData.service);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-primary/20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <ShoppingBag size={32} className="text-primary" />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Go4me.ai</h1>
              <p className="text-sm text-gray-600">Book a Gopher</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Service Selection */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ServiceSelector
              services={SERVICES}
              selectedService={formData.service}
              onServiceChange={(serviceId) => handleFieldChange('service', serviceId)}
            />
          </div>

          {/* Service-Specific Interfaces */}
          {formData.service === 'innout' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <InNOutMenu
                selectedLocation={formData.innoutLocation || ''}
                onLocationChange={(locationId) => handleFieldChange('innoutLocation', locationId)}
                order={formData.innoutOrder || []}
                onOrderChange={(order) => handleFieldChange('innoutOrder', order)}
              />
            </div>
          )}

          {formData.service === 'grocery' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <TraderJoesShop
                order={formData.groceryOrder || []}
                onOrderChange={(order) => handleFieldChange('groceryOrder', order)}
                specialInstructions={specialInstructions}
                onInstructionsChange={setSpecialInstructions}
              />
            </div>
          )}

          {/* Generic Task Details for Other Services */}
          {formData.service && !selectedService?.hasCustomInterface && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Task Details</h3>
              <textarea
                value={formData.taskDetails}
                onChange={(e) => handleFieldChange('taskDetails', e.target.value)}
                placeholder="Describe what you need help with..."
                rows={5}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                required
              />
            </div>
          )}

          {/* Customer Information */}
          {formData.service && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CustomerInfoForm
                formData={formData}
                onChange={handleFieldChange}
              />
            </div>
          )}

          {/* Legal Agreements */}
          {formData.service && (
            <div>
              <LegalAgreements
                agreedToTerms={formData.agreedToTerms}
                agreedToSms={formData.agreedToSms}
                agreedToMarketing={formData.agreedToMarketing}
                onAgreementChange={handleAgreementChange}
              />
            </div>
          )}

          {/* Pricing Summary */}
          {formData.service && (
            <div>
              <PricingSummary
                serviceId={formData.service}
                urgency={formData.urgency}
                pricing={pricing}
                foodItems={formData.innoutOrder}
                groceryItems={formData.groceryOrder}
              />
            </div>
          )}

          {/* Submit Button */}
          {formData.service && (
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-white text-lg font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Continue to Payment
                <ArrowRight size={20} />
              </button>
            </div>
          )}
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-gray-200 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-gray-600">
          <p>© 2025 Go4me.ai - All rights reserved</p>
          <p className="mt-2">
            <a href="https://go4me.ai/terms" className="text-primary hover:underline">Terms</a>
            {' · '}
            <a href="https://go4me.ai/privacy" className="text-primary hover:underline">Privacy</a>
            {' · '}
            <a href="mailto:support@go4me.ai" className="text-primary hover:underline">Support</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

