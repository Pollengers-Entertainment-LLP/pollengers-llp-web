// src/app/privacy-policy/page.tsx

import { CONTACT_EMAIL } from '@/constants'; // <-- IMPORT THE CENTRALIZED CONSTANT

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="text-center py-12">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-400">
            Last Updated: November 29, 2025
          </p>
          {/*<div className="mt-6 p-4 bg-red-800/50 border border-red-700 rounded-lg text-sm">
            <p className="font-bold">LEGAL DISCLAIMER:</p>
            <p>This content is a template and is NOT legal advice. It must be reviewed and customized by a legal professional to ensure compliance with relevant laws (e.g., GDPR, CCPA, IT Act, 2000) for Pollengers Entertainment LLP.</p>
          </div>*/}
        </header>

        <section className="space-y-8 text-gray-300 text-base">
          
          <h2 className="text-2xl font-bold text-yellow-400 border-b border-gray-700 pb-1">1. Introduction</h2>
          <p>
            Pollengers Entertainment LLP ("we," "our," or "us") is committed to protecting the privacy of those who interact with our website. This Privacy Policy outlines the types of information we collect, how we use it, and the steps we take to safeguard it.
          </p>

          <h2 className="text-2xl font-bold text-yellow-400 border-b border-gray-700 pb-1">2. Information We Collect</h2>
          <p>We collect information in the following ways:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Personal Data:</strong> When you contact us via the contact form or email, we collect your name, email address, and any information you provide in your message.</li>
            <li><strong>Usage Data:</strong> We automatically collect information about how the website is accessed and used. This Usage Data may include your computer's Internet Protocol address (IP address), browser type, pages visited, time spent on those pages, and other diagnostic data.</li>
          </ul>

          <h2 className="text-2xl font-bold text-yellow-400 border-b border-gray-700 pb-1">3. How We Use Data</h2>
          <p>Pollengers Entertainment LLP uses the collected data for various purposes:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>To manage and respond to your booking inquiries and requests.</li>
            <li>To provide and maintain the website.</li>
            <li>To monitor the usage of the website for analytical purposes.</li>
            <li>To detect, prevent, and address technical issues.</li>
          </ul>

          <h2 className="text-2xl font-bold text-yellow-400 border-b border-gray-700 pb-1">4. Disclosure of Data</h2>
          <p>
            We will not sell, rent, or trade your Personal Data. We may disclose your Personal Data in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend the rights or property of Pollengers Entertainment LLP, or protect the personal safety of users or the public.
          </p>
          
          <h2 className="text-2xl font-bold text-yellow-400 border-b border-gray-700 pb-1">5. Third-Party Links</h2>
          <p>
            Our website contains links to other sites (like YouTube, Facebook, Instagram, and Linktree) that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
          </p>

          <h2 className="text-2xl font-bold text-yellow-400 border-b border-gray-700 pb-1">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us by email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-yellow-400 underline">{CONTACT_EMAIL}</a>
          </p>

        </section>
      </div>
    </main>
  );
}