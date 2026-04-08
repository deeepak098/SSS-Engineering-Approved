
"use client"

import { useContent } from '@/context/ContentContext';

export function StatsSection() {
  const { content } = useContent();

  // Safety fallback if stats is missing from state
  const statsList = content?.stats || [];

  if (statsList.length === 0) return null;

  return (
    <section className="bg-[#f9f9f9] py-16 border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsList.map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-extrabold text-[#222]">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
