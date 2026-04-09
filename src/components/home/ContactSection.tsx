
"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-foreground">
                Get In <span className="text-primary">Touch</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Have a project in mind? Our engineering team is ready to provide you with the best solutions.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-4 p-6 bg-background rounded-2xl border border-border">
                <div className="p-4 bg-primary rounded-xl shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg">Main Headquarters</h4>
                  <p className="text-muted-foreground">Vizag, Andhra Pradesh, India 530044</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-background rounded-2xl border border-border">
                <div className="p-4 bg-primary rounded-xl shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg">Call Us</h4>
                  <p className="text-muted-foreground">+91 9000058853</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-background rounded-2xl border border-border">
                <div className="p-4 bg-primary rounded-xl shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg">Email Us</h4>
                  <p className="text-muted-foreground">inquiry@sssengineering.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-background rounded-2xl border border-border">
                <div className="p-4 bg-primary rounded-xl shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg">Business Hours</h4>
                  <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background p-8 md:p-12 rounded-3xl shadow-xl border border-border">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-headline font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                  <Input placeholder="John Doe" className="bg-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-headline font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                  <Input type="email" placeholder="john@company.com" className="bg-white" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-headline font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                <Input placeholder="Inquiry about Machinery" className="bg-white" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-headline font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea placeholder="How can we help you?" className="min-h-[150px] bg-white" />
              </div>
              <Button className="w-full font-headline font-bold py-8 text-lg bg-primary hover:bg-primary/90">
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
