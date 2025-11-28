import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-yellow-400/20">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Pollengers Entertainment LLP. All Rights Reserved.
        </p>
        
        {/* Quick links for legal/standard pages */}
        <div className="mt-2 space-x-4">
          {/* Note: You will need to create the /privacy and /terms pages later */}
          <Link href="/privacy-policy" className="hover:text-white transition duration-150">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-white transition duration-150">Terms of Service</Link>
        </div>
        
        {/* LLP Legal Information (taken from the EPK) */}
        <p className="mt-2 text-xs text-gray-500">
            Registered Entity: LLP ID NO - ACQ-8554 
        </p>
      </div>
    </footer>
  );
};

export default Footer;