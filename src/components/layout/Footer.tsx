import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Settings } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8 border-t border-neutral-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">
          {/* Col 1: Brand & Social */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-headline font-black text-2xl tracking-tighter text-primary">
                SSS <span className="text-white">ENGINEERING</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-body max-w-xs">
              Domestic manufacturer of recycled paper trays and global exporter of high-precision engineering machinery.
            </p>
            <div className="flex space-x-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Instagram, label: "Instagram" },
              ].map(({ Icon, label }, i) => (
                <Link
                  key={i}
                  href="#"
                  aria-label={`SSS Engineering on ${label}`}
                  className="p-3 bg-neutral-800 hover:bg-primary text-white transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-headline font-black text-sm mb-6 text-white uppercase tracking-widest border-l-2 border-primary pl-3">
              Quick Links
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-400 font-body">
              {[
                { name: 'Home', href: '/' },
                { name: 'Industrial Machinery', href: '/products#machinery' },
                { name: 'Egg Trays & Paper', href: '/products#egg-trays' },
                { name: 'Services', href: '/services' },
                { name: 'Logistics', href: '/logistics' },
                { name: 'Blogs', href: '/blogs' },
                { name: 'About SSS', href: '/about' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h4 className="font-headline font-black text-sm mb-6 text-white uppercase tracking-widest border-l-2 border-primary pl-3">
              Our Services
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-400 font-body">
              {[
                'Machine Design & Engineering',
                'Global Freight & Logistics',
                'Custom Plant Fabrication',
                'On-Site Installation',
                '24/7 Technical Support'
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="hover:text-primary transition-colors">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="font-headline font-black text-sm mb-6 text-white uppercase tracking-widest border-l-2 border-primary pl-3">
              Contact Info
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm text-neutral-400 font-body">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-1" />
                <span className="leading-snug">Vizag, Andhra Pradesh, India 530044</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+919000058853" className="hover:text-primary transition-colors">+91 9000058853</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:inquiry@sssengineering.com" className="hover:text-primary transition-colors">inquiry@sssengineering.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 space-y-4 md:space-y-0 font-body">
          <div className="flex flex-wrap items-center gap-3">
            <p>© {new Date().getFullYear()} SSS Engineering Solutions. All Rights Reserved.</p>
            <span className="text-neutral-700 hidden sm:inline">|</span>
            <Link href="/admin" className="flex items-center gap-1 hover:text-white transition-colors text-neutral-400">
              <Settings className="h-3 w-3" /> Admin
            </Link>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
