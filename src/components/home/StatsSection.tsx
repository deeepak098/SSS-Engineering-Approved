"use client"

import { useContent } from '@/context/ContentContext';
import { Package, Cog, Globe, Award } from 'lucide-react';

export function StatsSection() {
  const { content } = useContent();

  const statsList = content?.stats || [
    {
      label: "Years Experience",
      value: "30+",
      category: "COMPANY OVERVIEW",
      businessTag: "Company",
      iconName: "Award"
    },
    {
      label: "Countries Exported",
      value: "45+",
      category: "GLOBAL EXPORT REACH",
      businessTag: "Global Reach",
      iconName: "Globe"
    },
    {
      label: "Tons Recycled/Year",
      value: "120K+",
      category: "PAPER TRAY BUSINESS",
      businessTag: "Paper Trays",
      iconName: "Package"
    },
    {
      label: "Machines Installed",
      value: "850+",
      category: "MACHINERY BUSINESS",
      businessTag: "Machinery",
      iconName: "Cog"
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Package':
        return <Package className="h-4 w-4 text-emerald-600 shrink-0" />;
      case 'Cog':
        return <Cog className="h-4 w-4 text-primary shrink-0" />;
      case 'Globe':
        return <Globe className="h-4 w-4 text-sky-600 shrink-0" />;
      default:
        return <Award className="h-4 w-4 text-amber-600 shrink-0" />;
    }
  };

  const getTagStyle = (tag: string) => {
    switch (tag) {
      case 'Paper Trays':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Machinery':
        return 'bg-primary/10 text-primary border-primary/30';
      case 'Global Reach':
        return 'bg-sky-100 text-sky-800 border-sky-300';
      default:
        return 'bg-neutral-200 text-neutral-800 border-neutral-300';
    }
  };

  const getUnderlineStyle = (tag: string) => {
    switch (tag) {
      case 'Paper Trays':
        return 'bg-emerald-600';
      case 'Machinery':
        return 'bg-primary';
      case 'Global Reach':
        return 'bg-sky-600';
      default:
        return 'bg-neutral-400';
    }
  };

  return (
    <section className="bg-[#F5F5F5] py-12 md:py-16 border-y border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statsList.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 border border-border flex flex-col justify-between space-y-4 hover:border-neutral-400 transition-all duration-200 shadow-sm relative group"
            >
              {/* Category Tag Header */}
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-headline font-extrabold uppercase tracking-widest px-2.5 py-1 border ${getTagStyle(stat.businessTag)}`}>
                  {stat.businessTag}
                </span>
                <div className="p-1.5 bg-[#F5F5F5] rounded-none">
                  {getIcon(stat.iconName)}
                </div>
              </div>

              {/* Value & Label */}
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl md:text-5xl font-headline font-black text-[#1A1A1A] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-headline font-bold text-neutral-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>

              {/* Bottom Subtle Accent Underline */}
              <div className={`h-1 w-full ${getUnderlineStyle(stat.businessTag)} transition-all duration-300 group-hover:h-1.5`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
