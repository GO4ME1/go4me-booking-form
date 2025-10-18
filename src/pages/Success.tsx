import { useEffect, useState } from 'react';
import { CheckCircle, Home } from 'lucide-react';

export default function Success() {
  const [sessionId, setSessionId] = useState<string>('');

  useEffect(() => {
    // Get session_id from URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get('session_id');
    if (id) {
      setSessionId(id);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle size={80} className="text-green-500" />
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Order Confirmed! 🎉
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Your payment was successful and your gopher has been notified.
          </p>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              What happens next?
            </h2>
            <ul className="text-left space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">1.</span>
                <span>You'll receive an SMS confirmation with your order number</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">2.</span>
                <span>A gopher will be assigned to your task</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">3.</span>
                <span>You'll get updates when they're en route</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">4.</span>
                <span>Your order will be delivered with photo proof</span>
              </li>
            </ul>
          </div>

          {sessionId && (
            <p className="text-sm text-gray-500 mb-6">
              Session ID: {sessionId.substring(0, 20)}...
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
            >
              <Home size={20} />
              Book Another Gopher
            </a>
            <a
              href="https://go4me.ai"
              className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all"
            >
              Return to Go4me.ai
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            Questions? Contact us at{' '}
            <a href="mailto:support@go4me.ai" className="text-primary hover:underline">
              support@go4me.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

