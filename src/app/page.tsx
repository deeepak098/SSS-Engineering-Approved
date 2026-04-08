import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ProductGrid } from '@/components/home/ProductGrid';
import { Logistics } from '@/components/home/Logistics';
import { Sustainability } from '@/components/home/Sustainability';
import { BlogSection } from '@/components/home/BlogSection';
import { ContactSection } from '@/components/home/ContactSection';
import { AdminContentManagement } from '@/components/admin/content-management';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductGrid />
        <Logistics />
        <Sustainability />
        <BlogSection />
        <ContactSection />
        
        {/* Hidden Admin Trigger - For testing purposes in this environment */}
        <div className="bg-muted py-4 border-t">
          <div className="container mx-auto px-4 flex justify-end">
             <AdminContentManagement />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
