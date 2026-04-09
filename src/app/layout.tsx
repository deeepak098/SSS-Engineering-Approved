
import type { Metadata } from 'next';
import './globals.css';
import { ContentProvider } from '@/context/ContentContext';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: {
    default: 'SSS Engineering Solutions | Industrial Machinery & Sustainable Packaging',
    template: '%s | SSS Engineering Solutions',
  },
  description: 'Global leader in high-performance pulp molding machines, egg tray machinery, and sustainable industrial solutions. Expert machine design, global export logistics, and technical consulting since 1995.',
  keywords: [
    'industrial machinery supplier',
    'industrial machinery exporter',
    'heavy machinery exporter',
    'industrial equipment supplier',
    'machinery export company',
    'pulp molding machine',
    'egg tray machine manufacturer',
    'industrial machinery',
    'sustainable packaging solutions',
    'recycled paper products',
    'global logistics engineering',
    'SSS Engineering Solutions',
    'precision manufacturing',
    'industrial export compliance',
    'machine design services',
    'technical industry blogs'
  ],
  authors: [{ name: 'SSS Engineering Editorial Team' }],
  creator: 'SSS Engineering Solutions',
  publisher: 'SSS Engineering Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sssengineering.com',
    siteName: 'SSS Engineering Solutions',
    title: 'SSS Engineering Solutions | Industrial Excellence',
    description: 'Leading the way in industrial innovation and sustainable manufacturing since 1995.',
    images: [
      {
        url: 'https://picsum.photos/seed/sss_engineering_og/1200/630',
        width: 1200,
        height: 630,
        alt: 'SSS Engineering Solutions Industrial Machinery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSS Engineering Solutions',
    description: 'Global leader in industrial machinery and sustainable packaging.',
    images: ['https://picsum.photos/seed/sss_engineering_twitter/1200/630'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ContentProvider>
          {children}
          <Toaster />
        </ContentProvider>
      </body>
    </html>
  );
}
