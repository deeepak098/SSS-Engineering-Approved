import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BlogSection } from '@/components/home/BlogSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industry Insights',
  description: 'Stay updated with the latest trends in sustainable manufacturing, engineering breakthroughs, and global trade insights.',
};

export default function BlogsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h1 className="font-headline font-extrabold text-5xl mb-4">Latest Insights</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay informed with our latest news, engineering tips, and industry trends.
            </p>
          </div>
        </section>
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
