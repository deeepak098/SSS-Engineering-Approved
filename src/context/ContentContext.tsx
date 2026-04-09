
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

type LogisticsFeature = {
  title: string;
  description: string;
  iconName: 'Globe' | 'Ship' | 'ShieldCheck' | 'FileCheck';
};

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
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
  services: ServiceItem[];
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
    features: LogisticsFeature[];
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
    imageUrl: "https://thumbs.dreamstime.com/b/complex-network-industrial-pipelines-valves-machinery-inside-chemical-plant-interconnected-metal-pipes-processing-437487093.jpg",
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
      imageUrl: "https://npcinjection.usa72.wondercdn.com/uploads/image/61adb22913863.jpg",
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
      imageUrl: "https://sdcautomation.com/wp-content/uploads/2025/01/sdc-machine-3.webp",
      imageHint: "green machinery",
      specs: {
        capacity: "1,000-1,500 trays/hr",
        power: "22-45 kW",
        molds: "3 molds"
      }
    },
    { 
      id: 3, 
      title: "Pulp Mixing Unit", 
      description: "Industrial-grade mixing unit for consistent pulp preparation. Engineered for durability and high-performance throughput.", 
      imageUrl: "https://www.ifa-technology.net/fileadmin/_processed_/4/d/csm_Inline_mixer_Inline-Mischer_1_0b5d650e11.jpg",
      imageHint: "industrial mixer",
      specs: {
        capacity: "8,000 L/hr",
        power: "55 kW",
        molds: "N/A"
      }
    }
  ],
  services: [
    {
      id: 'design',
      title: 'Machine Design & Engineering',
      description: 'Custom engineering solutions tailored to specific production requirements and spatial constraints.',
      icon: 'Settings'
    },
    {
      id: 'logistics',
      title: 'Global Logistics Management',
      description: 'End-to-end shipping solutions including customs clearance and door-to-port delivery coordination.',
      icon: 'Ship'
    },
    {
      id: 'installation',
      title: 'Installation & Commissioning',
      description: 'On-site technical support to ensure your machinery is installed correctly and operating at peak efficiency.',
      icon: 'Wrench'
    },
    {
      id: 'support',
      title: 'After-Sales & Maintenance',
      description: 'Dedicated support team providing spare parts, remote troubleshooting, and routine maintenance guides.',
      icon: 'Headphones'
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
      title: "Global Supply Chain Resilience Guide",
      excerpt: "How strategic logistics partnerships are helping manufacturers overcome international trade challenges in the modern era.",
      date: "June 20, 2024",
      imageUrl: "https://picsum.photos/seed/wind_turbines_00/800/500",
      imageHint: "wind turbines",
      category: "Logistics"
    },
    {
      id: 4,
      title: "Pulp Molding: Complete Industry Guide",
      excerpt: "A comprehensive deep-dive into the technical processes, materials, and machinery required for modern pulp molding plants.",
      date: "July 12, 2024",
      imageUrl: "https://picsum.photos/seed/pulp_guide/800/500",
      imageHint: "industry guide",
      category: "Industry Guides"
    }
  ],
  logistics: {
    title: "Global Export & Logistics",
    description: "Reliable international shipping with end-to-end export support for machinery and finished egg trays. We manage the complexity of global trade so you can focus on production.",
    imageUrl: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-143762,resizemode-75,msid-120791589/news/economy/foreign-trade/comm-mins-export-promotion-mission-may-have-12-point-plan-to-push-exports-help-msme-exporters.jpg",
    imageHint: "logistics port",
    features: [
      { 
        title: "30+ Countries", 
        description: "Active exports across Africa, Middle East, South & Southeast Asia with localized support teams.",
        iconName: 'Globe'
      },
      { 
        title: "FOB & CIF Shipping", 
        description: "Flexible shipping terms (Free On Board or Cost, Insurance, and Freight) with containerized logistics.",
        iconName: 'Ship'
      },
      { 
        title: "ISO 9001 Certified", 
        description: "Standardized quality management systems for consistent output and export-ready compliance.",
        iconName: 'ShieldCheck'
      },
      { 
        title: "Customs Documentation", 
        description: "Full export documentation, certificates of origin, and compliance support for hassle-free clearance.",
        iconName: 'FileCheck'
      }
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
        const parsed = JSON.parse(savedContent);
        setContent(prev => ({
          ...initialContent,
          ...parsed,
          logistics: {
            ...initialContent.logistics,
            ...(parsed.logistics || {})
          },
          services: parsed.services || initialContent.services
        }));
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
