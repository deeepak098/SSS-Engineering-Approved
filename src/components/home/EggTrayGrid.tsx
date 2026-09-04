"use client"

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { useContent } from '@/context/ContentContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function EggTrayGrid() {
  const { content } = useContent();

  // TODO (CLIENT SIGN-OFF REQUIRED): MOQ (10,000 / 15,000 / 5,000 Pcs) and Pallet Qty (4,800 / 3,600 / 2,400 Pcs) specs require client verification prior to production launch.
  const eggTrayProducts = content?.eggTrayProducts || [
    {
      id: 101,
      title: "Standard 30-Cell Egg Tray",
      description: "High-density molded pulp 30-egg packaging trays engineered for impact absorption in transport and storage.",
      imageUrl: "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?auto=format&fit=crop&w=800&q=80",
      imageHint: "egg tray paper packaging",
      altText: "Recycled molded pulp 30-cell egg tray for poultry transport and storage",
      specs: {
        type: "30-Cell Standard",
        material: "100% Recycled Pulp",
        palletQty: "4,800 Pcs", // CLIENT SIGN-OFF NEEDED
        moq: "10,000 Pcs"      // CLIENT SIGN-OFF NEEDED
      }
    },
    {
      id: 102,
      title: "12-Egg Pulp Carton (Clamshell)",
      description: "Retail-ready 12-hole egg carton with secure snap-lock closure and smooth surface for custom branding.",
      imageUrl: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&w=800&q=80",
      imageHint: "egg carton container",
      altText: "Protective molded paper 12-egg carton clamshell for retail sale",
      specs: {
        type: "12-Cell Clamshell",
        material: "Recycled Paper",
        palletQty: "3,600 Pcs", // CLIENT SIGN-OFF NEEDED
        moq: "15,000 Pcs"      // CLIENT SIGN-OFF NEEDED
      }
    },
    {
      id: 103,
      title: "Molded Fiber Industrial Tray",
      description: "Custom molded fiber packaging trays designed for industrial components, fresh fruit, and fragile goods.",
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      imageHint: "industrial pulp packaging",
      altText: "Heavy-duty custom molded fiber packaging tray for industrial goods",
      specs: {
        type: "Custom Fiber Mold",
        material: "Heavy-Duty Pulp",
        palletQty: "2,400 Pcs", // CLIENT SIGN-OFF NEEDED
        moq: "5,000 Pcs"      // CLIENT SIGN-OFF NEEDED
      }
    }
  ];

  return (
    <section id="egg-trays" className="py-20 md:py-28 bg-[#F5F5F5] border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16 space-y-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="w-12 h-1.5 bg-primary shrink-0" />
            <span className="text-xs font-headline font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 shrink-0">
              Domestic Production
            </span>
            <span className="text-[11px] font-headline font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-3 py-1 border border-emerald-200">
              For domestic poultry & packaging supply chains
            </span>
          </div>
          <h2 className="font-headline font-black text-3xl sm:text-4xl text-[#1A1A1A] uppercase tracking-tight">
            Egg Trays & Recycled Paper Products
          </h2>
          <p className="text-neutral-600 text-base max-w-2xl leading-relaxed font-body">
            High-durability eco-friendly molded fiber trays and protective paper packaging manufactured for poultry farms, commercial hatcheries, and domestic retail packaging suppliers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eggTrayProducts.map((product) => {
            return (
              <Card key={product.id} className="overflow-hidden border border-border bg-white rounded-none shadow-none hover:border-neutral-400 transition-all duration-200 flex flex-col h-full">
                <div className="relative h-[230px] w-full bg-neutral-100 border-b border-border">
                  <Image
                    src={product.imageUrl}
                    alt={product.altText || product.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-headline font-black text-xl text-[#1A1A1A] leading-tight uppercase tracking-tight">
                      {product.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed font-body min-h-[44px] line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-5">
                    {/* 2x2 on mobile (<480px) and 4-spec row on desktop */}
                    <div className="grid grid-cols-2 xs:grid-cols-4 gap-2">
                      <div className="bg-[#F5F5F5] p-2 sm:p-2.5 text-center border border-border/50">
                        <span className="text-[9px] sm:text-[10px] font-headline font-bold text-neutral-500 uppercase tracking-widest block mb-0.5">Type</span>
                        <div className="text-[11px] sm:text-xs font-headline font-black text-[#1A1A1A] leading-tight break-words">{product.specs?.type || "N/A"}</div>
                      </div>
                      <div className="bg-[#F5F5F5] p-2 sm:p-2.5 text-center border border-border/50">
                        <span className="text-[9px] sm:text-[10px] font-headline font-bold text-neutral-500 uppercase tracking-widest block mb-0.5">Material</span>
                        <div className="text-[11px] sm:text-xs font-headline font-black text-[#1A1A1A] leading-tight break-words">{product.specs?.material || "N/A"}</div>
                      </div>
                      <div className="bg-[#F5F5F5] p-2 sm:p-2.5 text-center border border-border/50">
                        <span className="text-[9px] sm:text-[10px] font-headline font-bold text-neutral-500 uppercase tracking-widest block mb-0.5">Pallet</span>
                        <div className="text-[11px] sm:text-xs font-headline font-black text-[#1A1A1A] leading-tight break-words">{product.specs?.palletQty || "N/A"}</div>
                      </div>
                      <div className="bg-[#F5F5F5] p-2 sm:p-2.5 text-center border border-border/50">
                        <span className="text-[9px] sm:text-[10px] font-headline font-bold text-neutral-500 uppercase tracking-widest block mb-0.5">MOQ</span>
                        <div className="text-[11px] sm:text-xs font-headline font-black text-[#1A1A1A] leading-tight break-words">{product.specs?.moq || "N/A"}</div>
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-headline font-extrabold rounded-none py-6 h-auto tracking-widest text-xs uppercase" asChild>
                      <Link href="/contact">GET PRICING</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
