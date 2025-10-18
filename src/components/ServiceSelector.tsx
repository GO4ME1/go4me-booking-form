import type { Service } from '../types';

interface ServiceSelectorProps {
  services: Service[];
  selectedService: string;
  onServiceChange: (serviceId: string) => void;
}

export default function ServiceSelector({ services, selectedService, onServiceChange }: ServiceSelectorProps) {
  return (
    <div className="mb-6">
      <label className="block text-lg font-semibold mb-3 text-gray-800">
        Select a Service *
      </label>
      <select
        value={selectedService}
        onChange={(e) => onServiceChange(e.target.value)}
        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-base"
        required
      >
        <option value="">Choose a service...</option>
        {services.map((service) => (
          <option key={service.id} value={service.id}>
            {service.name} - {service.price}
          </option>
        ))}
      </select>
      {selectedService && (
        <p className="mt-2 text-sm text-gray-600">
          {services.find(s => s.id === selectedService)?.description}
        </p>
      )}
    </div>
  );
}

