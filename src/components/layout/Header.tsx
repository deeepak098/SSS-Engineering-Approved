
"use client"

import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Logistics', href: '/logistics' },
    { name: 'Insights', href: '/blogs' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-headline font-extrabold text-2xl tracking-tighter text-primary">
              SSS <span className="text-foreground">ENGINEERING</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-xs font-bold uppercase tracking-widest transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary border-b-2 border-primary pb-1" : "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-muted rounded-full transition-colors hidden md:block" aria-label="Search">
              <Search className="h-5 w-5 text-foreground" />
            </button>
            <Button className="hidden md:flex font-headline font-bold bg-primary hover:bg-primary/90 text-white rounded-none tracking-widest text-xs" size="lg" asChild>
              <Link href="/contact">CONTACT US</Link>
            </Button>
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 top-20 bg-background z-40 transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col p-8 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-xl font-headline font-bold border-b pb-2 uppercase tracking-tighter",
                pathname === item.href ? "text-primary border-primary" : "text-foreground border-border"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button className="w-full font-headline font-bold py-6 rounded-none tracking-widest uppercase" asChild>
             <Link href="/contact" onClick={() => setIsOpen(false)}>CONTACT US</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
