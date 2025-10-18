interface CustomerInfoFormProps {
  formData: {
    customerName: string;
    customerPhone: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    gateCode?: string;
    deliveryPreference: 'meet' | 'leave';
    urgency: 'standard' | 'urgent' | 'asap';
  };
  onChange: (field: string, value: string) => void;
}

export default function CustomerInfoForm({ formData, onChange }: CustomerInfoFormProps) {
  return (
    <div className="space-y-6">
      {/* Customer Information */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-800">Your Information</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Your Name *
            </label>
            <input
              type="text"
              value={formData.customerName}
              onChange={(e) => onChange('customerName', e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Phone Number (for SMS updates) *
            </label>
            <input
              type="tel"
              value={formData.customerPhone}
              onChange={(e) => onChange('customerPhone', e.target.value)}
              placeholder="+1 (555) 123-4567"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              required
            />
          </div>
        </div>
      </div>

      {/* Address */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-800">Delivery Address</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Street Address *
            </label>
            <input
              type="text"
              value={formData.street}
              onChange={(e) => onChange('street', e.target.value)}
              placeholder="123 Main Street, Apt 4B"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                City *
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => onChange('city', e.target.value)}
                placeholder="San Diego"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                State *
              </label>
              <select
                value={formData.state}
                onChange={(e) => onChange('state', e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                required
              >
                <option value="CA">California</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                ZIP Code *
              </label>
              <input
                type="text"
                value={formData.zip}
                onChange={(e) => onChange('zip', e.target.value)}
                placeholder="92101"
                maxLength={5}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Gate Code (if any)
              </label>
              <input
                type="text"
                value={formData.gateCode || ''}
                onChange={(e) => onChange('gateCode', e.target.value)}
                placeholder="e.g., #1234"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Preference */}
      <div>
        <label className="block text-sm font-medium mb-2 text-gray-700">
          Delivery Preference *
        </label>
        <div className="flex gap-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              value="meet"
              checked={formData.deliveryPreference === 'meet'}
              onChange={(e) => onChange('deliveryPreference', e.target.value)}
              className="w-4 h-4 text-primary focus:ring-primary"
              required
            />
            <span>🤝 Meet at door</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              value="leave"
              checked={formData.deliveryPreference === 'leave'}
              onChange={(e) => onChange('deliveryPreference', e.target.value)}
              className="w-4 h-4 text-primary focus:ring-primary"
              required
            />
            <span>📦 Leave at door</span>
          </label>
        </div>
      </div>

      {/* Urgency */}
      <div>
        <label className="block text-sm font-medium mb-2 text-gray-700">
          When do you need this? *
        </label>
        <select
          value={formData.urgency}
          onChange={(e) => onChange('urgency', e.target.value as 'standard' | 'urgent' | 'asap')}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          required
        >
          <option value="standard">Standard (within 4 hours) - Base price</option>
          <option value="urgent">Urgent (within 2 hours) - +$10</option>
          <option value="asap">ASAP (within 1 hour) - +$20</option>
        </select>
      </div>
    </div>
  );
}

