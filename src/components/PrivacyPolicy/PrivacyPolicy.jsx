import React from 'react';
import Header from '../../pages/Header/Header';

const contentSections = [
  {
    id: 1,
    title: 'Information We Collect',
    text: `We collect personal details such as your child's name, contact information, medical history, and appointment records when you register or consult with us. We also gather anonymized data to improve our pediatric care services.`,
  },
  {
    id: 2,
    title: 'Use of Information',
    text: `Your information is used solely to provide and enhance specialized child healthcare, manage appointments, communicate important updates, and comply with pediatric healthcare regulations. We do not share your data with unauthorized third parties.`,
  },
  {
    id: 3,
    title: 'Data Security',
    text: `We implement stringent technical and organizational measures to protect your child's personal and medical information against unauthorized access, loss, or misuse.`,
  },
  {
    id: 4,
    title: 'Cookies and Tracking',
    text: `Our website uses cookies to enhance your browsing experience and analyze traffic. You can control cookie preferences through your browser settings.`,
  },
  {
    id: 5,
    title: 'Third-Party Services',
    text: `We may use trusted third-party providers for services like appointment scheduling or analytics, each governed by their own privacy policies. We recommend reviewing their terms for transparency.`,
  },
  {
    id: 6,
    title: 'Contact Us',
    text: (
      <>
        For any questions about our privacy practices or child healthcare services, please contact us at{' '}
        <a href="mailto:contact@childcareclinic" className="text-blue-600 font-medium">
          contact@childcareclinic
        </a>{' '}
        or call us at{' '}
        <a href="tel:+1123456789" className="text-blue-600 font-medium">
          +1 123 456 789
        </a>
        . Visit us at{' '}
        <a
          href="https://www.google.com/maps/search/?api=1&query=789+Caring+St,+Kids+Town,+TX"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-medium"
        >
          789 Caring St, Kids Town, TX
        </a>
        .
      </>
    ),
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      {/* Header Section */}
      <Header
        image="https://www.drprinceparakh.in/images/page/best-child-specialist-siliguri.jpg"
        title="Privacy Policy"
      />

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <p className="mb-6 text-gray-500 text-base sm:text-lg">
          At our child specialist clinic, protecting your child’s personal information is our highest priority. This Privacy Policy explains how we collect, use, and safeguard your data.
        </p>

        {contentSections.map(({ id, title, text }) => (
          <section key={id} className="mb-8">
            <h2 className="text-xl font-bold mb-2">{id}. {title}</h2>
            <p className="leading-relaxed text-gray-500 text-base sm:text-lg">{text}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
