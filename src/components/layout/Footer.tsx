import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Settings } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-headline font-extrabold text-2xl tracking-tighter text-primary">
                SSS <span className="text-white">ENGINEERING</span>
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Leading the way in industrial innovation and sustainable manufacturing since 1995.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <Link key={i} href="#" className="p-2 bg-white/10 rounded-md hover:bg-primary transition-colors">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/70">
              {[
                { name: 'Home', href: '/' },
                { name: 'Products', href: '/products' },
                { name: 'Sustainability', href: '/sustainability' },
                { name: 'Logistics', href: '/logistics' },
                { name: 'Blogs', href: '/blogs' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6 text-white">Our Services</h4>
            <ul className="space-y-4 text-sm text-white/70">
              {['Machine Design', 'Logistics Management', 'Custom Fabrication', 'Installation Services', 'After-Sales Support'].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-primary transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>123 Industrial Hub, Suite 400, Silicon Valley, CA 94025</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+1 (555) 012-3456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>info@sssengineering.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <p>© {new Date().getFullYear()} SSS Engineering Solutions. All Rights Reserved.</p>
            <Link href="/admin" className="flex items-center gap-1 hover:text-white transition-colors">
              <Settings className="h-3 w-3" /> Admin
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
