"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

type ContentData = {
  hero: {
    title: string;
    description: string;
    cta: string;
  };
  products: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];
  eggTray: {
    title: string;
    description: string;
    features: string[];
  };
  logistics: {
    title: string;
    description: string;
    stats: { label: string; value: string }[];
  };
  sustainability: {
    title: string;
    description: string;
  };
};

const initialContent: ContentData = {
  hero: {
    title: "Innovating Industrial Solutions for a Sustainable Future",
    description: "Leading manufacturer and exporter of high-precision engineering machinery and recycled paper products globaly.",
    cta: "Explore Our Solutions"
  },
  products: [
    { id: 1, title: "Precision Molding Machinery", description: "State-of-the-art molding machines for versatile industrial applications.", image: "product-1" },
    { id: 2, title: "Automated Packaging Systems", description: "End-to-end packaging solutions designed for maximum efficiency.", image: "product-2" },
    { id: 3, title: "Industrial Mixing Units", description: "Heavy-duty mixers engineered for chemical and food processing industries.", image: "product-3" },
    { id: 4, title: "Smart Robotic Arms", description: "AI-integrated robotic arms for precise assembly and logistics.", image: "product-4" }
  ],
  eggTray: {
    title: "Eco-Friendly Recycled Paper Egg Trays",
    description: "Our egg trays are manufactured from 100% recycled paper pulp, offering superior protection and sustainability.",
    features: [
      "100% Biodegradable & Recyclable",
      "Shock-Absorbent Design",
      "Ventilated for Freshness",
      "Custom Branding Available"
    ]
  },
  logistics: {
    title: "Global Export & Logistics Network",
    description: "We deliver excellence across 50+ countries with a robust supply chain and strategic logistics partners.",
    stats: [
      { label: "Countries Served", value: "50+" },
      { label: "Export Capacity", value: "1.2M Units/Mo" },
      { label: "Logistics Partners", value: "15+" }
    ]
  },
  sustainability: {
    title: "Our Sustainability Commitment",
    description: "We are committed to reducing our carbon footprint through innovative recycling technologies and renewable energy integration in our manufacturing facilities."
  }
};

interface ContentContextType {
  content: ContentData;
  updateContent: (newContent: Partial<ContentData>) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<ContentData>(initialContent);

  const updateContent = (newContent: Partial<ContentData>) => {
    setContent(prev => ({ ...prev, ...newContent }));
  };

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