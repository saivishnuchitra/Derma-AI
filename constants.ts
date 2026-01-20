
import { Milestone, ScanPoint } from './types';

export const MILESTONES: Milestone[] = [
  {
    id: 1,
    year: "2023",
    title: "Inception & Seed",
    description: "Won 1st place at Northeastern University Oakland’s Husky Startup Challenge for developing a preliminary acne-focused diagnostic tool.",
    imageUrl: "https://imgur.com/a/PpzFPSC"
  },
  {
    id: 2,
    year: "2024",
    title: "Model Enhancement & Testing",
    description: "Enhanced the model to detect melanin levels, sebum production, inflammation, scarring, and other key facial characteristics, supported by extensive testing and validation.",
    imageUrl: "https://imgur.com/a/8FFAcd7"
  },
  {
    id: 3,
    year: "2025",
    title: "External Validation",
    description: "Collaborated with U.S. nonprofits, student organizations, and Indian schools to gather external validation feedback and deliver skin health education.",
    imageUrl: "https://picsum.photos/400/300?random=3"
  },
  {
    id: 4,
    year: "2026",
    title: "LLC Enterprise Launch",
    description: "Launched as an LLC with ongoing physician oversight, continuous feedback, and clinical guidance throughout development.",
    imageUrl: "https://picsum.photos/400/300?random=4"
  }
];

export const SCAN_POINTS: ScanPoint[] = [
  {
    id: 1,
    progress: 0.2,
    label: "Neural Mapping",
    content: "Extracting 5,000+ unique facial landmarks for volumetric depth analysis."
  },
  {
    id: 2,
    progress: 0.45,
    label: "Epidermal Analysis",
    content: "Multispectral assessment of pigment distribution and hydration levels."
  },
  {
    id: 3,
    progress: 0.7,
    label: "Vascular Integrity",
    content: "Real-time blood flow simulation to identify sub-surface anomalies."
  },
  {
    id: 4,
    progress: 0.9,
    label: "Diagnostic Synthesis",
    content: "Aggregating data points through our proprietary Bio-Logic inference engine."
  }
];

export const COLORS = {
  primary: '#0d9488', // Teal 600
  secondary: '#0891b2', // Cyan 600
  accent: '#2dd4bf', // Teal 400
  background: '#f8fafc',
  text: '#0f172a'
};
