import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactSection } from '@/components/home/ContactSection';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h1 className="font-headline font-extrabold text-5xl mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions or need a custom engineering solution? Reach out to our global team today.
            </p>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
