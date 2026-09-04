"use client"

import Link from 'next/link';
import { Search, Menu, X, ChevronDown, Wrench, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown on Escape key press or outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDropdownOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
            <span className="font-headline font-black text-2xl tracking-tighter text-primary">
              SSS <span className="text-[#1A1A1A]">ENGINEERING</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {/* Products with Dropdown */}
            <div
              ref={dropdownRef}
              className="relative group py-2"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              onFocus={() => setDropdownOpen(true)}
              onBlur={(e) => {
                if (!dropdownRef.current?.contains(e.relatedTarget as Node)) {
                  setDropdownOpen(false);
                }
              }}
            >
              <div className="flex items-center">
                <Link
                  href="/products"
                  className={cn(
                    "font-headline text-xs font-bold uppercase tracking-widest transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 p-1",
                    pathname.startsWith('/products') ? "text-primary border-b-2 border-primary" : "text-[#1A1A1A]"
                  )}
                >
                  Products
                </Link>
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                  aria-label="Toggle Products Submenu"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="p-1 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 text-[#1A1A1A]"
                >
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", dropdownOpen && "rotate-180")} />
                </button>
              </div>

              {/* Dropdown Menu */}
              <div
                role="menu"
                aria-orientation="vertical"
                aria-label="Products Options"
                className={cn(
                  "absolute left-0 top-full w-64 bg-white border border-border shadow-lg transition-all duration-200 z-50 p-2 space-y-1",
                  dropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
                )}
              >
                <Link
                  href="/products#machinery"
                  role="menuitem"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-start gap-3 p-3 hover:bg-[#F5F5F5] focus:bg-[#F5F5F5] focus:outline-none focus:ring-1 focus:ring-primary transition-colors group/item"
                >
                  <Wrench className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-headline text-xs font-bold uppercase text-[#1A1A1A] group-hover/item:text-primary">
                      Industrial Machinery
                    </div>
                    <div className="text-[11px] text-neutral-500 font-body">Pulp molding & manufacturing plant equipment</div>
                  </div>
                </Link>
                <Link
                  href="/products#egg-trays"
                  role="menuitem"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-start gap-3 p-3 hover:bg-[#F5F5F5] focus:bg-[#F5F5F5] focus:outline-none focus:ring-1 focus:ring-primary transition-colors group/item"
                >
                  <Package className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-headline text-xs font-bold uppercase text-[#1A1A1A] group-hover/item:text-primary">
                      Egg Trays & Paper
                    </div>
                    <div className="text-[11px] text-neutral-500 font-body">Domestic recycled paper packaging trays</div>
                  </div>
                </Link>
              </div>
            </div>

            <Link
              href="/services"
              className={cn(
                "font-headline text-xs font-bold uppercase tracking-widest transition-colors hover:text-primary py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 p-1",
                pathname === '/services' ? "text-primary border-b-2 border-primary" : "text-[#1A1A1A]"
              )}
            >
              Services
            </Link>

            <Link
              href="/logistics"
              className={cn(
                "font-headline text-xs font-bold uppercase tracking-widest transition-colors hover:text-primary py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 p-1",
                pathname === '/logistics' ? "text-primary border-b-2 border-primary" : "text-[#1A1A1A]"
              )}
            >
              Logistics
            </Link>

            <Link
              href="/blogs"
              className={cn(
                "font-headline text-xs font-bold uppercase tracking-widest transition-colors hover:text-primary py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 p-1",
                pathname === '/blogs' ? "text-primary border-b-2 border-primary" : "text-[#1A1A1A]"
              )}
            >
              Blogs
            </Link>

            <Link
              href="/about"
              className={cn(
                "font-headline text-xs font-bold uppercase tracking-widest transition-colors hover:text-primary py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 p-1",
                pathname === '/about' ? "text-primary border-b-2 border-primary" : "text-[#1A1A1A]"
              )}
            >
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-neutral-100 rounded-none transition-colors hidden md:flex items-center justify-center text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Search site">
              <Search className="h-5 w-5" />
            </button>
            <Button className="hidden md:flex font-headline font-extrabold bg-primary hover:bg-primary/90 text-white rounded-none tracking-widest text-xs uppercase px-6 py-5" size="lg" asChild>
              <Link href="/contact">CONTACT US</Link>
            </Button>
            <button
              className="md:hidden p-2 text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 top-20 bg-white z-40 transition-transform duration-300 ease-in-out border-b border-border shadow-xl overflow-y-auto pb-12",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col p-8 space-y-6" aria-label="Mobile Navigation">
          <div className="space-y-3 border-b pb-3 border-border">
            <Link
              href="/products"
              className="text-lg font-headline font-extrabold uppercase tracking-wider text-[#1A1A1A] block"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <div className="pl-4 space-y-2">
              <Link
                href="/products#machinery"
                className="text-sm font-headline text-neutral-600 hover:text-primary block"
                onClick={() => setIsOpen(false)}
              >
                • Industrial Machinery
              </Link>
              <Link
                href="/products#egg-trays"
                className="text-sm font-headline text-neutral-600 hover:text-primary block"
                onClick={() => setIsOpen(false)}
              >
                • Egg Trays & Recycled Paper
              </Link>
            </div>
          </div>

          {[
            { name: 'Services', href: '/services' },
            { name: 'Logistics', href: '/logistics' },
            { name: 'Blogs', href: '/blogs' },
            { name: 'About SSS', href: '/about' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-lg font-headline font-extrabold border-b pb-3 uppercase tracking-wider",
                pathname === item.href ? "text-primary border-primary" : "text-[#1A1A1A] border-border"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button className="w-full font-headline font-extrabold bg-primary hover:bg-primary/90 text-white rounded-none tracking-widest text-xs uppercase py-6" size="lg" asChild>
            <Link href="/contact" onClick={() => setIsOpen(false)}>CONTACT US</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
