import { PortableTextBlock } from "next-sanity";

// --- Home Page Types ---
export interface HomePageData {
  heroTitle: string;
  heroDescription: string;
  heroImageUrl?: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
  services: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  serviceArea: string[];
}

// --- About Page Types ---
export interface AboutPageData {
  title: string;
  bio: PortableTextBlock[]; // Rich text format
  portraitUrl?: string;
  values: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  processSteps: Array<{
    stepNumber: string;
    title: string;
    description: string;
  }>;
}

// --- Services Page Types ---
export interface ServicesPageData {
  heroTitle: string;
  heroDescription: string;
  mainServices: Array<{
    title: string;
    description: string;
    icon: string;
    features?: string[];
  }>;
  materialsTitle: string;
  materialsBody: string;
  designersList: string[];
}