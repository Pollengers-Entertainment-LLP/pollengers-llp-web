// src/app/contact/page.tsx

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Whatsapp, MapPin, Globe, Youtube, Facebook, Instagram, QrCode } from 'lucide-react';
import { 
    CONTACT_EMAIL, 
    MANAGER_JOHN_NAME, 
    MANAGER_ADITYA_NAME, 
    PHONE_JOHN, 
    PHONE_ADITYA, 
    BASE_LOCATION,
    LINKTREE_URL,
    YOUTUBE_URL,
    FACEBOOK_URL,
    INSTAGRAM_URL,
} from '@/constants'; 

// Define the contact details using the constants
const contactDetails = [
  { icon: Phone, label: `${MANAGER_JOHN_NAME} (Call)`, value: PHONE_JOHN, href: `tel:${PHONE_JOHN}` },
  { icon: Whatsapp, label: `${MANAGER_JOHN_NAME} (WhatsApp)`, value: PHONE_JOHN, href: `https://wa.me/${PHONE_JOHN}` },
  { icon: Phone, label: `${MANAGER_ADITYA_NAME} (Call)`, value: PHONE_ADITYA, href: `tel:${PHONE_ADITYA}` },
  { icon: Whatsapp, label: `${MANAGER_ADITYA_NAME} (WhatsApp)`, value: PHONE_ADITYA, href: `https://wa.me/${PHONE_ADITYA}` },
  { icon: Mail, label: 'Email for Bookings', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
];

// Define the social links using the constants
const socialLinks = [
  { icon: Globe, label: 'All Links in One Place', href: LINKTREE_URL },
  { icon: Youtube, label: 'YouTube', href: YOUTUBE_URL },
  { icon: Facebook, label: 'Facebook', href: FACEBOOK_URL },
  { icon: Instagram, label: 'Instagram', href: INSTAGRAM_URL },
];

export default function ContactPage() {
    // ... (rest of the component structure)

    // Location (inside the component's return block)
    // <p className="ml-4 font-medium">{BASE_LOCATION}</p>

    // QR Code Link (inside the component's return block)
    // <Link href={LINKTREE_URL} ... >linktr.ee/pollengers</Link>

    // ... (Make sure to update these uses inside the JSX as well)
    return (
        <main className="min-h-screen bg-gray-900 text-white pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <header className="text-center py-12">
                {/* ... */}
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
              
              <section className="lg:col-span-2">
                
                {/* Contact Cards Section (uses defined constants) */}
                <h2 className="text-3xl font-semibold mb-6 text-gray-200 border-b border-gray-700 pb-2">
                  For Bookings & Management
                </h2>
                <div className="space-y-6">
                  {contactDetails.map((item, index) => (
                    <Link 
                      key={index}
                      href={item.href}
                      target="_blank"
                      className="flex items-start bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-200 group"
                    >
                      <item.icon className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-400">{item.label}</p>
                        <p className="text-lg font-bold text-white group-hover:text-yellow-400">{item.value}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Location Section */}
                <h2 className="text-3xl font-semibold mt-10 mb-6 text-gray-200 border-b border-gray-700 pb-2">
                  Base Location
                </h2>
                <div className="flex items-center text-lg bg-gray-800 p-4 rounded-lg shadow-lg">
                    <MapPin className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <p className="ml-4 font-medium">{BASE_LOCATION}</p>
                </div>


                {/* Social Links Section (uses defined constants) */}
                <h2 className="text-3xl font-semibold mt-10 mb-6 text-gray-200 border-b border-gray-700 pb-2">
                  Online Presence
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {socialLinks.map((item, index) => (
                    <Link 
                      key={index}
                      href={item.href}
                      target="_blank"
                      className="flex items-center bg-gray-800 p-3 rounded-lg shadow-lg hover:bg-yellow-600 hover:text-black transition duration-200"
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      <p className="ml-3 font-medium truncate">{item.label}</p>
                    </Link>
                  ))}
                </div>

              </section>

              {/* QR Code Column */}
              <aside className="lg:col-span-1 flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-2xl sticky top-24 h-fit">
                <QrCode className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-2xl font-bold text-gray-100 mb-4 text-center">
                  Scan for All Links
                </h3>
                
                <div className="w-full max-w-xs aspect-square overflow-hidden rounded-lg border-4 border-gray-900 shadow-xl">
                  <Image
                    src="/images/pollengers-qr.png" 
                    alt="QR Code linking to linktr.ee/pollengers"
                    width={300}
                    height={300}
                    layout="responsive"
                    priority
                  />
                </div>
                
                <p className="mt-4 text-sm text-center text-gray-400">
                  Directly links to <Link href={LINKTREE_URL} target="_blank" className="text-yellow-400 underline">linktr.ee/pollengers</Link>
                </p>
              </aside>
              
            </div>
          </div>
        </main>
      );
}