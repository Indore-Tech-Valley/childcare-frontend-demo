import React from 'react';
import Header from '../../pages/Header/Header';

const content = {
  intro:
    'Welcome to our child specialist clinic website. By using this site, booking appointments, or accessing our pediatric healthcare services, you agree to comply with the following terms and conditions. Please review them carefully.',
  sections: [
    {
      id: 1,
      title: 'Scope of Services',
      text:
        'Our website provides information about pediatric specialist services, appointment scheduling, child health education, and related healthcare content. It is intended for informational purposes only and does not replace professional medical advice or diagnosis from a licensed child specialist.',
    },
    {
      id: 2,
      title: 'Medical Disclaimer',
      text:
        'All content provided here is for general child health information. It should not substitute for professional consultation, diagnosis, or treatment from a licensed pediatric healthcare professional. Always consult your child’s specialist for specific health concerns.',
    },
    {
      id: 3,
      title: 'Appointment & Cancellations',
      text: `Parents or guardians are responsible for:
- Providing accurate child health and personal information during appointment booking.
- Notifying the clinic in advance if appointments need to be canceled or rescheduled.
- Arriving on time to ensure smooth scheduling and avoid inconvenience to other families.`,
    },
    {
      id: 4,
      title: 'Website Modifications',
      text:
        'We reserve the right to update or modify the content, features, or terms of this website at any time without prior notice. Continued use of the site after changes indicates acceptance of those changes.',
    },
    {
  id: 5,
  title: 'Contact Us',
  text: 'For any questions about our privacy practices or child healthcare services, please contact us at contact@childcareclinic or call us at +1 123 456 789. Visit us at 789 Caring St, Kids Town, TX.',
}
  ],
};

const TermsConditions = () => {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      {/* Header Section */}
      <Header
        image="https://www.drprinceparakh.in/images/page/best-child-specialist-siliguri.jpg"
        title="Terms & Conditions"
      />

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <p className="mb-6 text-base">{content.intro}</p>

        {content.sections.map(({ id, title, text }) => (
          <section key={id} className="mb-8">
            <h2 className="text-xl font-bold mb-2">
              {id}. {title}
            </h2>
            {id === 3 ? (
              <div className="leading-relaxed text-gray-500 text-base sm:text-lg">
                <p className="mb-2">Parents or guardians are responsible for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  {text.split('\n').map((line, idx) => (
                    <li key={idx}>{line.replace(/^- /, '')}</li>
                  ))}
                </ul>
              </div>
            ) : id === 5 ? (
              <div className="leading-relaxed text-gray-500 text-base sm:text-lg whitespace-pre-line">
                {text}
              </div>
            ) : (
              <p className="leading-relaxed text-gray-500 text-base sm:text-lg">{text}</p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default TermsConditions;
