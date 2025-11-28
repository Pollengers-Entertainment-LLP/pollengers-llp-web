// src/app/terms-of-service/page.tsx

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="text-center py-12">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-400">
            Effective Date: November 29, 2025
          </p>
         {/* <div className="mt-6 p-4 bg-red-800/50 border border-red-700 rounded-lg text-sm">
            <p className="font-bold">LEGAL DISCLAIMER:</p>
            <p>This content is a template and is NOT legal advice. It must be reviewed and customized by a legal professional to ensure protection for Pollengers Entertainment LLP.</p>
          </div>*/}
        </header>

        <section className="space-y-8 text-gray-300 text-base">
          
          <h2 className="text-2xl font-bold text-yellow-400 border-b border-gray-700 pb-1">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website of Pollengers Entertainment LLP (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, then you may not access the Service.
          </p>

          <h2 className="text-2xl font-bold text-yellow-400 border-b border-gray-700 pb-1">2. Intellectual Property</h2>
          <p>
            The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Pollengers Entertainment LLP and its licensors. This includes all music, lyrics, photos, logos (e.g., the Pollengers logo), and text contained on the site. You may not reproduce, distribute, modify, or create derivative works of the content without express written permission.
          </p>
          
          <h2 className="text-2xl font-bold text-yellow-400 border-b border-gray-700 pb-1">3. Permitted Use</h2>
          <p>
            The content on this website is provided for your information and non-commercial viewing only. Promoters, media, and venues are granted permission to download provided EPK, technical riders, and high-resolution images for the sole purpose of booking or promoting Pollengers for specific, agreed-upon performances. Any other use is strictly prohibited.
          </p>

          <h2 className="text-2xl font-bold text-yellow-400 border-b border-gray-700 pb-1">4. Links to Other Websites</h2>
          <p>
            Our Service may contain links to third-party web sites or services that are not owned or controlled by Pollengers Entertainment LLP. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
          </p>
          
          <h2 className="text-2xl font-bold text-yellow-400 border-b border-gray-700 pb-1">5. Limitation of Liability</h2>
          <p>
            In no event shall Pollengers Entertainment LLP, nor its members, agents, or employees, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service.
          </p>

        </section>
      </div>
    </main>
  );
}