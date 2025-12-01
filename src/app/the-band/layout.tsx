import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pollengers Music | Band Bio | EPK | Videos | Booking',
  description:
    'Pollengers — Assam-based blues, funk & hard rock band since 2015. Watch live videos, meet the band, view the technical rider and book us directly.',

  openGraph: {
    title: 'Pollengers | Official EPK & Booking',
    description:
      'Assam-based blues, funk & hard rock band since 2015. Watch live clips, view lineup & rider, and book directly.',
    url: 'https://pollengers.com/the-band',
    siteName: 'Pollengers',
    images: [
      {
        url: 'https://pollengers.com/images/pollengers-band-hires.jpg',
        width: 1200,
        height: 630,
        alt: 'Pollengers Band — Official EPK',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Pollengers | Official EPK & Booking',
    description:
      'Assam-based blues, funk & hard rock band since 2015. Watch live clips, view lineup & rider, and book directly.',
    images: [
      'https://pollengers.com/images/pollengers-band-hires.jpg',
    ],
  },
};

export default function TheBandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
