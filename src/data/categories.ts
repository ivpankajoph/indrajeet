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
    alt: "Indoor Plants",
    description: "Purify your air & brighten interiors",
    count: "80+ varieties",
    icon: "🪴",
  },
  {
    id: "outdoor",
    slug: "outdoor",
    name: "Outdoor Plants",
    shortName: "Outdoor",
    image: "/images/outdoor.avif",
    alt: "Outdoor Plants",
    description: "For gardens, terraces & lawns",
    count: "120+ varieties",
    icon: "🌳",
  },
  {
    id: "flowering",
    slug: "flowering",
    name: "Flowering Plants",
    shortName: "Flowering",
    image: "/images/flower.avif",
    alt: "Flowering Plants",
    description: "Add color & fragrance to your space",
    count: "90+ varieties",
    icon: "🌸",
  },
  {
    id: "succulents",
    slug: "succulents",
    name: "Succulents & Cacti",
    shortName: "Succulents",
    image: "/images/succulents.avif",
    alt: "Succulents",
    description: "Low-maintenance & stylish",
    count: "50+ varieties",
    icon: "🌵",
  },
  {
    id: "herbs",
    slug: "herbs",
    name: "Herbs & Medicinal",
    shortName: "Herbs",
    image: "/images/herbs.avif",
    alt: "Herbs",
    description: "Ayurvedic & culinary herbs",
    count: "60+ varieties",
    icon: "🌿",
  },
  {
    id: "fruit",
    slug: "fruit",
    name: "Fruit Plants",
    shortName: "Fruit",
    image: "/images/fruits.avif",
    alt: "Fruit Plants",
    description: "Grow your own fresh fruits",
    count: "40+ varieties",
    icon: "🍋",
  },
  {
    id: "bonsai",
    slug: "bonsai",
    name: "Bonsai",
    shortName: "Bonsai",
    image: "/images/bonsai.avif",
    alt: "Bonsai",
    description: "Miniature art in living form",
    count: "30+ varieties",
    icon: "🎋",
  },
  {
    id: "climbers",
    slug: "climbers",
    name: "Climbers & Creepers",
    shortName: "Climbers",
    image: "/images/climbers.avif",
    alt: "Climbers",
    description: "Natural shade & wall covers",
    count: "35+ varieties",
    icon: "🌱",
  },
  {
    id: "pots",
    slug: "pots",
    name: "Pots",
    shortName: "Pots",
    image: "/images/pots.jpeg",
    alt: "pots",
    description: "Supports plant roots",
    count: "10+ varieties",
    icon: "🪴",
  },
  {
    id: "soil",
    slug: "soil",
    name: "Soil & More",
    shortName: "Soil",
    image: "/images/soil.avif",
    alt: "vermi compost",
    description: "Stores and supplies water",
    count: "5+ varieties",
    icon: "🌱",
  },
];
