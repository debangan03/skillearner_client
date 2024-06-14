import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-gray-100">
      <div className="max-w-4xl w-full bg-white border-2 border-blue-900 p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Refund Policy</h1>
        <p className="mb-4">
          At Skill Earner, we strive to provide the best learning experience for our users. However, we do not provide refunds for any courses or services purchased on our platform.
        </p>
        <h2 className="text-2xl font-bold mb-4">1. No Refunds</h2>
        <p className="mb-4">
          All sales are final. Once you have purchased a course or any other service, you will not be eligible for a refund. We encourage you to thoroughly review the course content and details before making a purchase.
        </p>
        <h2 className="text-2xl font-bold mb-4">2. Exceptions</h2>
        <p className="mb-4">
          In exceptional cases, if there is a technical issue or a billing error, please contact our support team at support@skillearner.com. We will review your case and determine if a refund is applicable at our sole discretion.
        </p>
        <h2 className="text-2xl font-bold mb-4">3. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about our refund policy, please reach out to us at support@skillearner.com.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
