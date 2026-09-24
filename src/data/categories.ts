export interface Category {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  image: string;
  alt: string;
  description: string;
  count: string;
  icon?: string;
}

export const categories: Category[] = [
  {
    id: "indoor",
    slug: "indoor",
    name: "Indoor Plants",
    shortName: "Indoor",
    image: "/images/indoor.avif",
    alt: "Indoor Plants at Aardhya Green Nursery",
    description: "Beautiful plants for homes, offices and indoor spaces.",
    count: "Indoor Greens",
    icon: "🪴",
  },
  {
    id: "outdoor",
    slug: "outdoor",
    name: "Outdoor Plants",
    shortName: "Outdoor",
    image: "/images/outdoor.avif",
    alt: "Outdoor Plants at Aardhya Green Nursery",
    description: "Plants for gardens, balconies, terraces and outdoor areas.",
    count: "Outdoor Greens",
    icon: "🌳",
  },
  {
    id: "flowering",
    slug: "flowering",
    name: "Flowering Plants",
    shortName: "Flowering",
    image: "/images/flower.avif",
    alt: "Flowering Plants at Aardhya Green Nursery",
    description: "Colourful plants to brighten your home and garden.",
    count: "Vibrant Blooms",
    icon: "🌸",
  },
  {
    id: "fruit",
    slug: "fruit",
    name: "Fruit Plants",
    shortName: "Fruit",
    image: "/images/fruits.avif",
    alt: "Fruit Plants at Aardhya Green Nursery",
    description: "Healthy fruit plants for home gardens and outdoor spaces.",
    count: "Fresh Fruits",
    icon: "🍋",
  },
  {
    id: "pots",
    slug: "pots",
    name: "Pots & Planters",
    shortName: "Pots & Planters",
    image: "/images/pots.jpeg",
    alt: "Pots and Planters at Aardhya Green Nursery",
    description: "Pots and planters for different plants and spaces.",
    count: "Planters & Pots",
    icon: "🏺",
  },
  {
    id: "fertilizers",
    slug: "fertilizers",
    name: "Fertilizers & Manure",
    shortName: "Fertilizers",
    image: "/images/soil2.avif",
    alt: "Fertilizers and Manure at Aardhya Green Nursery",
    description: "Fertilizers, manure and plant nutrients for healthy growth.",
    count: "Plant Nutrition",
    icon: "🌱",
  },
  {
    id: "soil",
    slug: "soil",
    name: "Soil & Potting Mix",
    shortName: "Soil & Mix",
    image: "/images/soil.avif",
    alt: "Soil and Potting Mix at Aardhya Green Nursery",
    description: "Garden soil and growing mixes for your plants.",
    count: "Potting Mix",
    icon: "🪵",
  },
];
