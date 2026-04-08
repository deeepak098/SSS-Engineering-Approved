import type {Metadata} from 'next';
import './globals.css';
import { ContentProvider } from '@/context/ContentContext';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'SSS Engineering Solutions',
  description: 'Corporate engineering and industrial machinery solutions.',
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