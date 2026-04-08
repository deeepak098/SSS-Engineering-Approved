
"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ProductSpec = {
  capacity: string;
  power: string;
  molds: string;
};

type StatItem = {
  label: string;
  value: string;
};

type ContentData = {
  hero: {
    title: string;
    description: string;
    cta: string;
    imageUrl: string;
    imageHint: string;
  };
  stats: StatItem[];
  products: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    imageHint: string;
    specs: ProductSpec;
  }[];
  blogs: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    imageUrl: string;
    imageHint: string;
    category: string;
  }[];
  logistics: {
    title: string;
    description: string;
    imageUrl: string;
    imageHint: string;
    stats: { label: string; value: string }[];
  };
  about: {
    imageUrl: string;
    imageHint: string;
  };
};

const initialContent: ContentData = {
  hero: {
    title: "Innovating Industrial Solutions",
    description: "Leading manufacturer and exporter of high-precision engineering machinery and recycled paper products globally.",
    cta: "Explore Our Solutions",
    imageUrl: "https://picsum.photos/seed/industrial_gears_machinery/1920/1080",
    imageHint: "industrial gears"
  },
  stats: [
    { label: "Years Experience", value: "15+" },
    { label: "Countries Exported", value: "30+" },
    { label: "Tons Recycled/Year", value: "50K+" },
    { label: "Machines Installed", value: "200+" }
  ],
  products: [
    { 
      id: 1, 
      title: "Rotary Egg Tray Machine", 
      description: "High-speed rotary pulp molding for large-scale production. Fully automatic with PLC control.", 
      imageUrl: "https://picsum.photos/seed/rotary_molding/800/500",
      imageHint: "rotary machine",
      specs: {
        capacity: "3,000-5,000 trays/hr",
        power: "45-90 kW",
        molds: "8-12 sides rotary"
      }
    },
    { 
      id: 2, 
      title: "3 Mold Egg Tray Machine", 
      description: "Compact 3-mold egg tray machine ideal for small to mid-scale production. Low investment, easy operation, and quick ROI.", 
      imageUrl: "https://picsum.photos/seed/molding_machine_green/800/500",
      imageHint: "green machinery",
      specs: {
        capacity: "1,000-1,500 trays/hr",
        power: "22-45 kW",
        molds: "3 molds"
      }
    }
  ],
  blogs: [
    {
      id: 1,
      title: "The Future of Sustainable Packaging in 2024",
      excerpt: "Explore how recycled paper materials are revolutionizing the global packaging industry with innovative molding techniques.",
      date: "May 15, 2024",
      imageUrl: "https://picsum.photos/seed/recycled_pulp_22/800/500",
      imageHint: "recycled paper",
      category: "Sustainability"
    },
    {
      id: 2,
      title: "Optimizing Industrial Machinery Efficiency",
      excerpt: "Learn the top 5 engineering strategies to maximize throughput and minimize energy consumption in precision manufacturing.",
      date: "June 02, 2024",
      imageUrl: "https://picsum.photos/seed/engineering_design_11/800/500",
      imageHint: "engineering design",
      category: "Engineering"
    },
    {
      id: 3,
      title: "Global Supply Chain Resilience",
      excerpt: "How strategic logistics partnerships are helping manufacturers overcome international trade challenges in the modern era.",
      date: "June 20, 2024",
      imageUrl: "https://picsum.photos/seed/wind_turbines_00/800/500",
      imageHint: "wind turbines",
      category: "Logistics"
    }
  ],
  logistics: {
    title: "Global Export & Logistics Network",
    description: "We deliver excellence across 50+ countries with a robust supply chain and strategic logistics partners.",
    imageUrl: "https://picsum.photos/seed/logistics_map_44/1200/600",
    imageHint: "world map",
    stats: [
      { label: "Countries Served", value: "50+" },
      { label: "Export Capacity", value: "1.2M Units/Mo" },
      { label: "Logistics Partners", value: "15+" }
    ]
  },
  about: {
    imageUrl: "https://picsum.photos/seed/industrial_gears_machinery/1920/1080",
    imageHint: "industrial gears"
  }
};

interface ContentContextType {
  content: ContentData;
  updateContent: (newContent: Partial<ContentData>) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<ContentData>(initialContent);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem('sss_engineering_content');
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent));
      } catch (e) {
        console.error("Failed to parse saved content", e);
      }
    }
    setIsLoaded(true);
  }, []);

  const updateContent = (newContent: Partial<ContentData>) => {
    setContent(prev => {
      const updated = { ...prev, ...newContent };
      localStorage.setItem('sss_engineering_content', JSON.stringify(updated));
      return updated;
    });
  };

  if (!isLoaded) return null;

  return (
    <ContentContext.Provider value={{ content, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error('useContent must be used within a ContentProvider');
  return context;
};
