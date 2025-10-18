import { useState } from 'react';
import { FileText, MessageSquare, Gift } from 'lucide-react';

interface LegalAgreementsProps {
  agreedToTerms: boolean;
  agreedToSms: boolean;
  agreedToMarketing: boolean;
  onAgreementChange: (field: 'agreedToTerms' | 'agreedToSms' | 'agreedToMarketing', value: boolean) => void;
}

export default function LegalAgreements({ 
  agreedToTerms, 
  agreedToSms, 
  agreedToMarketing, 
  onAgreementChange 
}: LegalAgreementsProps) {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="space-y-4 bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Legal Agreements</h3>

      {/* Terms of Service & Arbitration */}
      <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={(e) => onAgreementChange('agreedToTerms', e.target.checked)}
            className="mt-1 w-5 h-5 text-primary focus:ring-primary rounded"
            required
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <FileText size={20} className="text-primary" />
              <span className="font-semibold text-gray-800">
                I agree to the Terms of Service and Arbitration Agreement *
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              By checking this box, I acknowledge and agree to:
            </p>
            <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
              <li>Go4me.ai Terms of Service</li>
              <li>Mandatory Arbitration Agreement</li>
              <li>Class Action Waiver</li>
              <li>Service terms, cancellation policy, and liability limitations</li>
            </ul>
            <button
              type="button"
              onClick={() => setShowTerms(!showTerms)}
              className="text-sm text-primary hover:underline mt-2"
            >
              {showTerms ? 'Hide' : 'View'} Full Terms
            </button>
          </div>
        </label>
        
        {showTerms && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg max-h-96 overflow-y-auto text-sm text-gray-700">
            <h4 className="font-bold mb-2">CUSTOMER TERMS OF SERVICE & ARBITRATION AGREEMENT</h4>
            <p className="mb-2"><strong>Effective Date:</strong> October 18, 2025</p>
            
            <h5 className="font-bold mt-4 mb-2">1. SERVICE DESCRIPTION</h5>
            <p className="mb-2">
              Go4me.ai provides on-demand errand and delivery services through independent contractor agents ("Gophers"). 
              Services include but are not limited to: food delivery, DMV proxy services, property checks, grocery runs, and custom errands.
            </p>

            <h5 className="font-bold mt-4 mb-2">2. PRICING & PAYMENT</h5>
            <p className="mb-2">
              All payments processed securely through Stripe. Service fee charged immediately upon booking. 
              All sales final unless service cannot be completed.
            </p>

            <h5 className="font-bold mt-4 mb-2">3. CANCELLATION POLICY</h5>
            <ul className="list-disc ml-4 mb-2">
              <li>Free cancellation before gopher is assigned</li>
              <li>50% refund if cancelled after assignment but before start</li>
              <li>No refund once gopher has started the task</li>
            </ul>

            <h5 className="font-bold mt-4 mb-2">4. LIABILITY LIMITATIONS</h5>
            <p className="mb-2">
              Maximum liability limited to service fee paid. Not liable for indirect, consequential, or incidental damages. 
              Service provided "AS IS" without guarantees of specific outcomes or timeframes.
            </p>

            <h5 className="font-bold mt-4 mb-2">5. MANDATORY ARBITRATION</h5>
            <p className="mb-2">
              Any dispute arising from these Terms shall be resolved through binding arbitration, not in court. 
              You waive your right to participate in class action lawsuits.
            </p>
            <p className="mb-2">
              <strong>30-Day Opt-Out:</strong> You may opt out of arbitration by emailing legal@go4me.ai within 30 days of first use.
            </p>
          </div>
        )}
      </div>

      {/* SMS Consent (Required) */}
      <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agreedToSms}
            onChange={(e) => onAgreementChange('agreedToSms', e.target.checked)}
            className="mt-1 w-5 h-5 text-primary focus:ring-primary rounded"
            required
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare size={20} className="text-primary" />
              <span className="font-semibold text-gray-800">
                I consent to receive text messages *
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              By providing my phone number and checking this box, I agree to receive:
            </p>
            <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc mb-2">
              <li>Transactional SMS updates about my order (gopher assigned, en route, completed)</li>
              <li>Delivery notifications and photo proof</li>
              <li>Service-related communications</li>
            </ul>
            <p className="text-xs text-gray-500 italic">
              Message and data rates may apply. Reply STOP to opt-out. Message frequency varies. 
              For help, text HELP or contact support@go4me.ai
            </p>
          </div>
        </label>
      </div>

      {/* Marketing Consent (Optional) */}
      <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agreedToMarketing}
            onChange={(e) => onAgreementChange('agreedToMarketing', e.target.checked)}
            className="mt-1 w-5 h-5 text-secondary focus:ring-secondary rounded"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Gift size={20} className="text-secondary" />
              <span className="font-semibold text-gray-800">
                Yes, I'd like to receive promotional offers (Optional)
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Receive occasional promotional messages about special offers, new services, and exclusive deals. 
              You can unsubscribe at any time by replying STOP.
            </p>
          </div>
        </label>
      </div>

      <div className="text-xs text-gray-500 text-center pt-2">
        * Required to complete your order
      </div>
    </div>
  );
}

