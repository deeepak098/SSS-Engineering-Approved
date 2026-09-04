"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Heading + 4 Stacked Info Cards */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="w-12 h-1.5 bg-primary mb-2" />
              <h2 className="font-headline font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] uppercase tracking-tight">
                GET IN <span className="text-primary">TOUCH</span>
              </h2>
              <p className="text-neutral-600 text-base leading-relaxed font-body max-w-xl">
                Have a project inquiry or custom machinery requirements? Contact our engineering team for technical specs and factory pricing.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-5 bg-[#F5F5F5] border border-border rounded-none">
                <div className="p-3.5 bg-primary text-white shrink-0 rounded-none">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-headline font-black text-sm uppercase tracking-wide text-[#1A1A1A]">Main Headquarters</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 font-body">Vizag, Andhra Pradesh, India 530044</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-5 bg-[#F5F5F5] border border-border rounded-none">
                <div className="p-3.5 bg-primary text-white shrink-0 rounded-none">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-headline font-black text-sm uppercase tracking-wide text-[#1A1A1A]">Call Us</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 font-body">+91 9000058853</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-5 bg-[#F5F5F5] border border-border rounded-none">
                <div className="p-3.5 bg-primary text-white shrink-0 rounded-none">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-headline font-black text-sm uppercase tracking-wide text-[#1A1A1A]">Email Us</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 font-body">inquiry@sssengineering.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-5 bg-[#F5F5F5] border border-border rounded-none">
                <div className="p-3.5 bg-primary text-white shrink-0 rounded-none">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-headline font-black text-sm uppercase tracking-wide text-[#1A1A1A]">Business Hours</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 font-body">Mon - Sat: 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="bg-[#F5F5F5] p-6 sm:p-8 md:p-10 border border-border rounded-none">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullname" className="text-xs font-headline font-bold uppercase tracking-widest text-[#1A1A1A]">
                    Full Name
                  </label>
                  <Input id="fullname" placeholder="John Doe" className="bg-white rounded-none border-border focus-visible:ring-primary h-12" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-headline font-bold uppercase tracking-widest text-[#1A1A1A]">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@company.com" className="bg-white rounded-none border-border focus-visible:ring-primary h-12" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-headline font-bold uppercase tracking-widest text-[#1A1A1A]">
                  Subject
                </label>
                <Input id="subject" placeholder="Inquiry about Industrial Machinery" className="bg-white rounded-none border-border focus-visible:ring-primary h-12" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-headline font-bold uppercase tracking-widest text-[#1A1A1A]">
                  Message
                </label>
                <Textarea id="message" placeholder="Describe your machine requirements, capacity needs, or questions..." className="min-h-[140px] bg-white rounded-none border-border focus-visible:ring-primary p-4" required />
              </div>
              <Button type="submit" className="w-full font-headline font-extrabold py-6 text-sm bg-primary hover:bg-primary/90 text-white rounded-none tracking-widest uppercase">
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
