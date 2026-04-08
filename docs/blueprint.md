# **App Name**: SSS Engineering Solutions

## Core Features:

- Homepage Layout Reconstruction: Rebuild all main homepage sections (Hero, Product Grid, Egg Tray Features, Logistics, Sustainability, Contact) as new components to precisely match the provided visual design, using content fetched via the useContent hook.
- Header and Footer Redesign: Reconstruct the global Header (logo, centered navigation, search icon, 'Contact Us' button) and the multi-column Footer to be pixel-perfect replicas of the design image.
- Visual Theming and Component Styling: Implement the new color scheme (strong red, charcoal gray, white/light-gray background), apply specified typography (Montserrat for headlines, Inter for body), and style all UI components (buttons, cards) for a sharp, modern aesthetic.
- Admin Panel Content Integration: Extend src/components/admin/content-management.tsx to provide clear labels for managing content (titles, descriptions, images) of all new homepage sections from the existing admin panel.
- Placeholder Content and Imagery Preparation: Update src/lib/placeholder-images.json and src/lib/placeholder-images.ts with new images, and rewrite all placeholder text within components to be professional and aligned with a corporate tone.

## Style Guidelines:

- The primary color, representing strength and corporate identity, is a bold red: #CC1A1A (HSL: 0, 85%, 40%).
- The background color is a clean, almost white light-gray with a subtle red undertone for harmony: #F7F5F5 (HSL: 0, 10%, 97%).
- The foreground color for text and essential details is a dark charcoal gray for professionalism and readability: #2D3033 (HSL: 210, 5%, 18%).
- The accent color, for subtle highlights and secondary interactive states, is a muted plum-gray, analogous to the primary red for palette cohesion: #6B4861 (HSL: 330, 15%, 40%).
- Headline font: 'Montserrat' (sans-serif) for its strong, geometric character that conveys modern corporate branding.
- Body font: 'Inter' (sans-serif) for its high readability and versatile, neutral aesthetic, ensuring clear communication of detailed information.
- Use clean, sharp line-based icons for features, social media, and navigation elements, matching the modern and functional aesthetic of the design.
- Implement a precise grid-based layout for all sections, particularly the 'Product & Machinery' 2x2 grid, ensuring pixel-perfect replication of spacing, alignment, and element positioning from the provided image.