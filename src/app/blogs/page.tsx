
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BlogSection } from '@/components/home/BlogSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Stay updated with the latest trends in sustainable manufacturing, engineering breakthroughs, and global trade insights.',
};

export default function BlogsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
