import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-gray-100">
      <div className="max-w-4xl w-full bg-white border-2 border-blue-900 p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="mb-4">
          Skill Earner is committed to protecting your privacy. This privacy policy explains how we collect, use, and safeguard your personal information when you use our platform.
        </p>
        <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information such as your name, email address, phone number, and payment details when you register on our platform, make a purchase, or interact with our services.
        </p>
        <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use your personal information to provide, maintain, and improve our services, process transactions, send you updates and promotional materials, and ensure the security of our platform.
        </p>
        <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
        </p>
        <h2 className="text-2xl font-bold mb-4">4. Third-Party Services</h2>
        <p className="mb-4">
          We may use third-party services for payment processing, email communication, and other services. These third parties have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
        </p>
        <h2 className="text-2xl font-bold mb-4">5. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on our website. You are advised to review this policy periodically for any changes.
        </p>
        <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about our privacy policy, please contact us at privacy@skillearner.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
