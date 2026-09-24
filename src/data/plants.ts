export interface Plant {
  id: number;
  slug: string;
  category: string;
  categoryName: string;
  name: string;
  scientificName: string;
  price: number;
  image: string;
  alt: string;
  bgStyle?: string;
  tag: string;
  badge?: string;
  benefits: string[];
  orderQuery: string;
  description?: string;
}

export const plants: Plant[] = [
  {
    "id": 1,
    "slug": "1-marble-money-plant-in-6-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Marble Money Plant in 6 Inch Nursery Pot",
    "scientificName": "Epipremnum aureum",
    "price": 189,
    "image": "/images/money plant (1).jpg",
    "alt": "money plant",
    "tag": "Indoor",
    "badge": "🔥 Best Seller",
    "benefits": [
      "Air Purifier",
      "Low Maintenance",
      "Low Light"
    ],
    "orderQuery": "Marble Money Plant in 6 Inch Nursery Pot @189",
    "description": "Healthy nursery-grown Marble Money Plant in 6 Inch Nursery Pot (Epipremnum aureum). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 2,
    "slug": "2-peace-lily-in-5-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Peace Lily in 5 Inch Nursery Pot",
    "scientificName": "Spathiphyllum wallisii",
    "price": 119,
    "image": "/images/peace lily.jpg",
    "alt": "peace plant",
    "bgStyle": "background: #e1f5e4",
    "tag": "Indoor",
    "badge": "🔥 Best Seller",
    "benefits": [
      "Air Purifier",
      "Low Light",
      "Easy Care"
    ],
    "orderQuery": "Peace Lily in 5 Inch Nursery Pot @119",
    "description": "Healthy nursery-grown Peace Lily in 5 Inch Nursery Pot (Spathiphyllum wallisii). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 3,
    "slug": "3-snake-plant-set-of-2-in-4-inch-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Snake Plant (Set of 2) in 4 Inch  Pot",
    "scientificName": "Sansevieria trifasciata",
    "price": 149,
    "image": "/images/snake plant.jpg",
    "alt": "snake plant",
    "bgStyle": "background: #f3e5f5",
    "tag": "Indoor",
    "badge": "⭐ Popular",
    "benefits": [
      "O₂ at Night",
      "Low Water",
      "Air Purifier"
    ],
    "orderQuery": "Snake Plant (Set of 2) in 4 Inch  Pot @149",
    "description": "Healthy nursery-grown Snake Plant (Set of 2) in 4 Inch  Pot (Sansevieria trifasciata). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 4,
    "slug": "4-marble-money-plant-white-pothos-in-6-inch-white-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Marble Money Plant / White Pothos in 6 Inch White Nursery Pot",
    "scientificName": "Epipremnum aureum 'Golden'",
    "price": 119,
    "image": "/images/pothos golden.jpg",
    "alt": "pothos golden",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "benefits": [
      "Trailing",
      "Easy Care"
    ],
    "orderQuery": "Marble Money Plant / White Pothos in 6 Inch White Nursery Pot @119",
    "description": "Healthy nursery-grown Marble Money Plant / White Pothos in 6 Inch White Nursery Pot (Epipremnum aureum 'Golden'). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 5,
    "slug": "5-spider-plant-in-6-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Spider plant in 6 Inch Nursery Pot",
    "scientificName": "Chlorophytum comosum",
    "price": 79,
    "image": "/images/spider.jpg",
    "alt": "spider plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "🌿 Easy Care",
    "benefits": [
      "Air Purifier",
      "Pet Friendly",
      "Easy Care"
    ],
    "orderQuery": "Spider plant in 6 Inch Nursery Pot @79",
    "description": "Healthy nursery-grown Spider plant in 6 Inch Nursery Pot (Chlorophytum comosum). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 6,
    "slug": "6-spider-plant-in-4-inch-nursery-bag",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Spider plant in 4 Inch Nursery Bag",
    "scientificName": "Chlorophytum comosum",
    "price": 39,
    "image": "/images/spider1.jpg",
    "alt": "spider plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "🌿 Easy Care",
    "benefits": [
      "Air Purifier",
      "Pet Friendly",
      "Easy Care"
    ],
    "orderQuery": "Spider plant in 4 Inch Nursery Bag @39",
    "description": "Healthy nursery-grown Spider plant in 4 Inch Nursery Bag (Chlorophytum comosum). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 7,
    "slug": "7-zz-plant-in-5-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "ZZ Plant in 5 Inch Nursery Pot",
    "scientificName": "Zamioculcas zamiifolia",
    "price": 349,
    "image": "/images/zz.jpg",
    "alt": "zz plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Low Light",
      "Air Purifier",
      "Easy Care"
    ],
    "orderQuery": "ZZ Plant in 5 Inch Nursery Pot @349",
    "description": "Healthy nursery-grown ZZ Plant in 5 Inch Nursery Pot (Zamioculcas zamiifolia). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 8,
    "slug": "8-zz-black-in-5-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "ZZ Black in 5 Inch Nursery Pot",
    "scientificName": "Zamioculcas zamiifolia",
    "price": 399,
    "image": "/images/zz1.jpg",
    "alt": "zz plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "benefits": [
      "Low Light",
      "Air Purifier"
    ],
    "orderQuery": "ZZ Black in 5 Inch Nursery Pot @399",
    "description": "Healthy nursery-grown ZZ Black in 5 Inch Nursery Pot (Zamioculcas zamiifolia). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 9,
    "slug": "9-monstera-deliciosa-in-10-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Monstera Deliciosa in 10 Inch Nursery Pot",
    "scientificName": "Monstera deliciosa",
    "price": 499,
    "image": "/images/monstera1.jpg",
    "alt": "monstera plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Air Purifier",
      "Tropical"
    ],
    "orderQuery": "Monstera Deliciosa in 10 Inch Nursery Pot @499",
    "description": "Healthy nursery-grown Monstera Deliciosa in 10 Inch Nursery Pot (Monstera deliciosa). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 10,
    "slug": "10-aglonema-snow-white-in-6-inch-super-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Aglonema Snow White in 6 Inch Super Nursery Pot",
    "scientificName": "Aglaonema commutatum",
    "price": 149,
    "image": "/images/agloanima.jpg",
    "alt": "agloanima plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Air Purifier",
      "Easy Care"
    ],
    "orderQuery": "Aglonema Snow White in 6 Inch Super Nursery Pot @149",
    "description": "Healthy nursery-grown Aglonema Snow White in 6 Inch Super Nursery Pot (Aglaonema commutatum). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 11,
    "slug": "11-rubber-plant-black-in-6-inch-nursery-bag",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Rubber Plant Black in 6 Inch Nursery bag",
    "scientificName": "Ficus Elastica",
    "price": 249,
    "image": "/images/rubber.webp",
    "alt": "Rubber plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Air Purifier",
      "Low Maintenance",
      "Perfect Indoor Plants"
    ],
    "orderQuery": "Rubber Plant Black in 6 Inch Nursery bag @249",
    "description": "Healthy nursery-grown Rubber Plant Black in 6 Inch Nursery bag (Ficus Elastica). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 12,
    "slug": "12-rubber-plant-black-in-8-inch-classy-white-plastic-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Rubber Plant Black in 8 Inch Classy White Plastic Pot",
    "scientificName": "Ficus Elastica",
    "price": 349,
    "image": "/images/rubber1.avif",
    "alt": "Rubber plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Air Purifier",
      "Low Maintenance",
      "Perfect Indoor Plants"
    ],
    "orderQuery": "Rubber Plant Black in 8 Inch Classy White Plastic Pot @349",
    "description": "Healthy nursery-grown Rubber Plant Black in 8 Inch Classy White Plastic Pot (Ficus Elastica). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 13,
    "slug": "13-set-of-2-rubber-plant-black-1-2-ft-in-10-inch-classy-plastic-pot-any-colour",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Set of 2 - Rubber Plant Black (~ 1-2 ft) in 10 Inch Classy Plastic Pot (any colour)",
    "scientificName": "Ficus Elastica",
    "price": 749,
    "image": "/images/rubber2.avif",
    "alt": "Rubber plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Air Purifier",
      "Low Maintenance",
      "Perfect Indoor Plants"
    ],
    "orderQuery": "Set of 2 - Rubber Plant Black (~ 1-2 ft) in 10 Inch Classy Plastic Pot @749",
    "description": "Healthy nursery-grown Set of 2 - Rubber Plant Black (~ 1-2 ft) in 10 Inch Classy Plastic Pot (any colour) (Ficus Elastica). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 14,
    "slug": "14-syngonium-in-4-inch-nursery-bag",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Syngonium in 4 Inch Nursery Bag",
    "scientificName": "Arrowhead Plant",
    "price": 49,
    "image": "/images/syngonium.avif",
    "alt": "Syngonium plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Ornamental Evergreen Plant",
      "Beginner friendly",
      "Low maintenance plant"
    ],
    "orderQuery": "Syngonium in 4 Inch Nursery Bag @49",
    "description": "Healthy nursery-grown Syngonium in 4 Inch Nursery Bag (Arrowhead Plant). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 15,
    "slug": "15-syngonium-pink-in-4-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Syngonium Pink in 4 Inch Nursery Pot",
    "scientificName": "Arrowhead Plant",
    "price": 79,
    "image": "/images/syngonium1.avif",
    "alt": "Syngonium plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Ornamental Evergreen Plant",
      "Beginner friendly",
      "Low maintenance plant"
    ],
    "orderQuery": "Syngonium Pink in 4 Inch Nursery Pot @79",
    "description": "Healthy nursery-grown Syngonium Pink in 4 Inch Nursery Pot (Arrowhead Plant). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 16,
    "slug": "16-philodendron-birkin-in-5-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Philodendron Birkin in 5 Inch Nursery Pot",
    "scientificName": "Philodendron hederaceum",
    "price": 349,
    "image": "/images/philodendron.avif",
    "alt": "Philodendron plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Attractive heart-shaped leaves",
      "Excellent air purifier",
      "Low maintenance plant"
    ],
    "orderQuery": "Philodendron Birkin in 5 Inch Nursery Pot @349",
    "description": "Healthy nursery-grown Philodendron Birkin in 5 Inch Nursery Pot (Philodendron hederaceum). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 17,
    "slug": "17-philodendron-birkin-in-6-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Philodendron Birkin in 6 Inch Nursery Pot",
    "scientificName": "Philodendron hederaceum",
    "price": 399,
    "image": "/images/philodendron1.avif",
    "alt": "Philodendron plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Attractive heart-shaped leaves",
      "Excellent air purifier",
      "Low maintenance plant"
    ],
    "orderQuery": "Philodendron Birkin in 6 Inch Nursery Pot @399",
    "description": "Healthy nursery-grown Philodendron Birkin in 6 Inch Nursery Pot (Philodendron hederaceum). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 18,
    "slug": "18-set-of-2-philodendron-birkin-in-6-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Set of 2- Philodendron Birkin in 6 Inch Nursery Pot",
    "scientificName": "Philodendron hederaceum",
    "price": 729,
    "image": "/images/philodendron2.avif",
    "alt": "Philodendron plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Attractive heart-shaped leaves",
      "Excellent air purifier",
      "Low maintenance plant"
    ],
    "orderQuery": "Set of 2- Philodendron Birkin in 6 Inch Nursery Pot @729",
    "description": "Healthy nursery-grown Set of 2- Philodendron Birkin in 6 Inch Nursery Pot (Philodendron hederaceum). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 19,
    "slug": "19-philodendron-selloum-in-8-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Philodendron Selloum in 8 Inch Nursery Pot",
    "scientificName": "Philodendron hederaceum",
    "price": 269,
    "image": "/images/philodendron3.avif",
    "alt": "Philodendron plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Attractive heart-shaped leaves",
      "Excellent air purifier",
      "Low maintenance plant"
    ],
    "orderQuery": "Philodendron Selloum in 8 Inch Nursery Pot @269",
    "description": "Healthy nursery-grown Philodendron Selloum in 8 Inch Nursery Pot (Philodendron hederaceum). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 20,
    "slug": "20-philodendron-golden-in-6-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Philodendron Golden in 6 Inch Nursery Pot",
    "scientificName": "Philodendron hederaceum",
    "price": 199,
    "image": "/images/philodendron4.avif",
    "alt": "Philodendron plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Attractive heart-shaped leaves",
      "Excellent air purifier",
      "Low maintenance plant"
    ],
    "orderQuery": "Philodendron Golden in 6 Inch Nursery Pot @199",
    "description": "Healthy nursery-grown Philodendron Golden in 6 Inch Nursery Pot (Philodendron hederaceum). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 21,
    "slug": "21-philodendron-selloum-in-8-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Philodendron Selloum in 8 Inch Nursery Pot",
    "scientificName": "Philodendron hederaceum",
    "price": 249,
    "image": "/images/philodendron5.avif",
    "alt": "Philodendron plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Attractive heart-shaped leaves",
      "Excellent air purifier",
      "Low maintenance plant"
    ],
    "orderQuery": "Philodendron Selloum in 8 Inch Nursery Pot @249",
    "description": "Healthy nursery-grown Philodendron Selloum in 8 Inch Nursery Pot (Philodendron hederaceum). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 22,
    "slug": "22-aglaonema-chinese-evergreen-in-8-inch-white-classy-plastic-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Aglaonema Chinese Evergreen In 8 Inch White Classy Plastic Pot",
    "scientificName": "Aglaonema commutatum",
    "price": 249,
    "image": "/images/aglaonema chinese.avif",
    "alt": "Aglaonema Chinese plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Air Purifier",
      "Pet Friendly",
      "Low maintenance plant"
    ],
    "orderQuery": "Aglaonema Chinese Evergreen In 8 Inch White Classy Plastic Pot @249",
    "description": "Healthy nursery-grown Aglaonema Chinese Evergreen In 8 Inch White Classy Plastic Pot (Aglaonema commutatum). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 23,
    "slug": "23-aglaonema-chinese-evergreen-in-4-inch-nursery-bag",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Aglaonema Chinese Evergreen In 4 Inch Nursery Bag",
    "scientificName": "Aglaonema commutatum",
    "price": 149,
    "image": "/images/aglaonema chinese1.avif",
    "alt": "Aglaonema Chinese plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Air Purifier",
      "Pet Friendly",
      "Low maintenance plant"
    ],
    "orderQuery": "Aglaonema Chinese Evergreen In 4 Inch Nursery Bag @149",
    "description": "Healthy nursery-grown Aglaonema Chinese Evergreen In 4 Inch Nursery Bag (Aglaonema commutatum). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 24,
    "slug": "24-dracaena-colorama-marginata-in-6-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Dracaena Colorama / Marginata in 6 Inch Nursery Pot",
    "scientificName": "Dracaena marginata",
    "price": 149,
    "image": "/images/dracaena colorama.avif",
    "alt": "Dracaena Colorama",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Compact growth habit",
      "Evergreen plant",
      "Low maintenance plant"
    ],
    "orderQuery": "Dracaena Colorama / Marginata in 6 Inch Nursery Pot @149",
    "description": "Healthy nursery-grown Dracaena Colorama / Marginata in 6 Inch Nursery Pot (Dracaena marginata). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 25,
    "slug": "25-dracaena-colorama-marginata-in-4-inch-nursery-bag",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Dracaena Colorama / Marginata In 4 Inch Nursery Bag",
    "scientificName": "Dracaena marginata",
    "price": 119,
    "image": "/images/dracaena colorama1.avif",
    "alt": "Dracaena Colorama",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Compact growth habit",
      "Evergreen plant",
      "Low maintenance plant"
    ],
    "orderQuery": "Dracaena Colorama / Marginata In 4 Inch Nursery Bag @119",
    "description": "Healthy nursery-grown Dracaena Colorama / Marginata In 4 Inch Nursery Bag (Dracaena marginata). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 26,
    "slug": "26-dracaena-colorama-marginata-red-in-6-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Dracaena Colorama / Marginata Red in 6 Inch Nursery Pot",
    "scientificName": "Dracaena marginata",
    "price": 149,
    "image": "/images/dracaena colorama2.avif",
    "alt": "Dracaena Colorama",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Compact growth habit",
      "Evergreen plant",
      "Low maintenance plant"
    ],
    "orderQuery": "Dracaena Colorama / Marginata Red in 6 Inch Nursery Pot @149",
    "description": "Healthy nursery-grown Dracaena Colorama / Marginata Red in 6 Inch Nursery Pot (Dracaena marginata). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 27,
    "slug": "27-bamboo-palm-cane-palm-scotia-palm-3-ft-in-7-inch-nursery-bag",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Bamboo Palm / Cane Palm / Scotia Palm (~3 ft) in 7 Inch Nursery Bag",
    "scientificName": "Chamaedorea seifrizii",
    "price": 289,
    "image": "/images/Cane Palm.avif",
    "alt": "Cane Palm",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Highly adaptable",
      "Architectural beauty",
      "Low maintenance plant"
    ],
    "orderQuery": "Bamboo Palm / Cane Palm / Scotia Palm (~3 ft) in 7 Inch Nursery Bag @289",
    "description": "Healthy nursery-grown Bamboo Palm / Cane Palm / Scotia Palm (~3 ft) in 7 Inch Nursery Bag (Chamaedorea seifrizii). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 28,
    "slug": "28-table-palm-chamaedorea-palm-in-4-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Table Palm / Chamaedorea Palm in 4 Inch Nursery Pot",
    "scientificName": "Chamaedorea seifrizii",
    "price": 249,
    "image": "/images/Table Palm.avif",
    "alt": "Cane Palm",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Highly adaptable",
      "Architectural beauty",
      "Low maintenance plant"
    ],
    "orderQuery": "Table Palm / Chamaedorea Palm in 4 Inch Nursery Pot @249",
    "description": "Healthy nursery-grown Table Palm / Chamaedorea Palm in 4 Inch Nursery Pot (Chamaedorea seifrizii). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 29,
    "slug": "29-lolina-palm-ponytail-palm-in-8-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Lolina Palm / Ponytail Palm in 8 inch nursery pot",
    "scientificName": "Beaucarnea recurvata",
    "price": 249,
    "image": "/images/lolina palm.avif",
    "alt": "Lolina Palm",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Highly adaptable",
      "Architectural beauty",
      "Low maintenance plant"
    ],
    "orderQuery": "Lolina Palm / Ponytail Palm in 8 inch nursery pot @249",
    "description": "Healthy nursery-grown Lolina Palm / Ponytail Palm in 8 inch nursery pot (Beaucarnea recurvata). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 30,
    "slug": "30-fiddle-leaf-fig-ficus-lyrata-in-8-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Fiddle Leaf Fig / Ficus Lyrata in 8 Inch Nursery Pot",
    "scientificName": "Ficus lyrata",
    "price": 399,
    "image": "/images/fiddle leaf.avif",
    "alt": "fiddle leaf",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Air Purifier",
      "Grows tall and high",
      "Low maintenance plant"
    ],
    "orderQuery": "Fiddle Leaf Fig / Ficus Lyrata in 8 Inch Nursery Pot @399",
    "description": "Healthy nursery-grown Fiddle Leaf Fig / Ficus Lyrata in 8 Inch Nursery Pot (Ficus lyrata). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 31,
    "slug": "31-fiddle-leaf-fig-ficus-lyrata-in-8-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Fiddle Leaf Fig / Ficus Lyrata in 8 Inch Nursery Pot",
    "scientificName": "Ficus lyrata",
    "price": 399,
    "image": "/images/fiddle leaf1.avif",
    "alt": "fiddle leaf",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Air Purifier",
      "Grows tall and high",
      "Low maintenance plant"
    ],
    "orderQuery": "Fiddle Leaf Fig / Ficus Lyrata in 8 Inch Nursery Pot @399",
    "description": "Healthy nursery-grown Fiddle Leaf Fig / Ficus Lyrata in 8 Inch Nursery Pot (Ficus lyrata). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 32,
    "slug": "32-fiddle-leaf-fig-ficus-lyrata-in-6-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Fiddle Leaf Fig / Ficus Lyrata in 6 Inch Nursery Pot",
    "scientificName": "Ficus lyrata",
    "price": 249,
    "image": "/images/fiddle leaf2.avif",
    "alt": "fiddle leaf",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Air Purifier",
      "Grows tall and high",
      "Low maintenance plant"
    ],
    "orderQuery": "Fiddle Leaf Fig / Ficus Lyrata in 6 Inch Nursery Pot @249",
    "description": "Healthy nursery-grown Fiddle Leaf Fig / Ficus Lyrata in 6 Inch Nursery Pot (Ficus lyrata). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 33,
    "slug": "33-bird-of-paradise-in-8-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Bird Of Paradise in 8 Inch Nursery Pot",
    "scientificName": "Strelitzia Reginae",
    "price": 299,
    "image": "/images/bird of paradise.avif",
    "alt": "Bird of Paradise",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Good for Pollination",
      "Grows tall and high",
      "Low maintenance plant"
    ],
    "orderQuery": "Bird Of Paradise in 8 Inch Nursery Pot @299",
    "description": "Healthy nursery-grown Bird Of Paradise in 8 Inch Nursery Pot (Strelitzia Reginae). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 34,
    "slug": "34-bird-nest-fern-in-9-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Bird Nest Fern in 9 Inch Nursery Pot",
    "scientificName": "Strelitzia Reginae",
    "price": 249,
    "image": "/images/bird nest fern.avif",
    "alt": "Bird Nest Fern",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Beautiful Fronds",
      "Ancient Plant",
      "Bio indicators"
    ],
    "orderQuery": "Bird Nest Fern in 9 Inch Nursery Pot @249",
    "description": "Healthy nursery-grown Bird Nest Fern in 9 Inch Nursery Pot (Strelitzia Reginae). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 35,
    "slug": "35-set-of-2-song-of-india-in-6-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Set of 2 - Song of India in 6 Inch Nursery Pot",
    "scientificName": "Chlorophytum comosum",
    "price": 249,
    "image": "/images/song of indian.avif",
    "alt": "Song Of Indian",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Highly Adaptable",
      "Low Maintenance",
      "Air Purifier"
    ],
    "orderQuery": "Set of 2 - Song of India in 6 Inch Nursery Pot @249",
    "description": "Healthy nursery-grown Set of 2 - Song of India in 6 Inch Nursery Pot (Chlorophytum comosum). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 36,
    "slug": "36-set-of-2-song-of-india-in-7-inch-nursery-bag",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Set of 2 - Song of India in 7 Inch Nursery Bag",
    "scientificName": "Chlorophytum comosum",
    "price": 199,
    "image": "/images/song of indian1.avif",
    "alt": "Song Of Indian",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Highly Adaptable",
      "Low Maintenance",
      "Air Purifier"
    ],
    "orderQuery": "Set of 2 - Song of India in 7 Inch Nursery Bag @199",
    "description": "Healthy nursery-grown Set of 2 - Song of India in 7 Inch Nursery Bag (Chlorophytum comosum). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 37,
    "slug": "37-set-of-2-song-of-india-green-in-7-inch-nursery-bag",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Set of 2 - Song of India Green in 7 Inch Nursery Bag",
    "scientificName": "Chlorophytum comosum",
    "price": 349,
    "image": "/images/song of indian2.avif",
    "alt": "Song Of Indian",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Highly Adaptable",
      "Low Maintenance",
      "Air Purifier"
    ],
    "orderQuery": "Set of 2 - Song of India Green in 7 Inch Nursery Bag @349",
    "description": "Healthy nursery-grown Set of 2 - Song of India Green in 7 Inch Nursery Bag (Chlorophytum comosum). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 38,
    "slug": "38-calathea-tricolour-in-6-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Calathea Tricolour in 6 Inch Nursery Pot",
    "scientificName": "Calathea roseopicta 'Tricolor'",
    "price": 199,
    "image": "/images/calathea.avif",
    "alt": "Calathea Tricolor",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Vibrant Foliage",
      "Striking leaf patterns",
      "Excellent Air Purifier"
    ],
    "orderQuery": "Calathea Tricolour in 6 Inch Nursery Pot @199",
    "description": "Healthy nursery-grown Calathea Tricolour in 6 Inch Nursery Pot (Calathea roseopicta 'Tricolor'). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 39,
    "slug": "39-calathea-tricolour-in-6-inch-white-classy-plastic-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Calathea Tricolour in 6 Inch White Classy Plastic Pot",
    "scientificName": "Calathea roseopicta 'Tricolor'",
    "price": 299,
    "image": "/images/calathea1.avif",
    "alt": "Calathea Tricolor",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Vibrant Foliage",
      "Striking leaf patterns",
      "Excellent Air Purifier"
    ],
    "orderQuery": "Calathea Tricolour in 6 Inch White Classy Plastic Pot @299",
    "description": "Healthy nursery-grown Calathea Tricolour in 6 Inch White Classy Plastic Pot (Calathea roseopicta 'Tricolor'). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 40,
    "slug": "40-calathea-maranta-prayer-plant-in-5-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Calathea Maranta / Prayer Plant in 5 Inch Nursery Pot",
    "scientificName": "Calathea roseopicta 'Tricolor'",
    "price": 199,
    "image": "/images/calathea2.avif",
    "alt": "Calathea Tricolor",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Vibrant Foliage",
      "Striking leaf patterns",
      "Excellent Air Purifier"
    ],
    "orderQuery": "Calathea Maranta / Prayer Plant in 5 Inch Nursery Pot @199",
    "description": "Healthy nursery-grown Calathea Maranta / Prayer Plant in 5 Inch Nursery Pot (Calathea roseopicta 'Tricolor'). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 41,
    "slug": "41-golden-money-plant-in-4-inch-white-plastic-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Golden Money Plant in 4 inch white plastic pot",
    "scientificName": "Epipremnum aureum",
    "price": 149,
    "image": "/images/golden money plant.webp",
    "alt": "Golden Money Plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Bright neon leaves",
      "Low Maintenance",
      "Excellent Air Purifier"
    ],
    "orderQuery": "Golden Money Plant in 4 inch white plastic pot @79",
    "description": "Healthy nursery-grown Golden Money Plant in 4 inch white plastic pot (Epipremnum aureum). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 42,
    "slug": "42-birds-nest-snake-plant-in-4-inch-white-plastic-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Birds Nest Snake Plant in 4 inch white plastic pot",
    "scientificName": "Sansevieria trifasciata",
    "price": 149,
    "image": "/images/Birds nest snake plant.webp",
    "alt": "Snake Plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Compact tiger stripes",
      "Low Maintenance",
      "Excellent Air Purifier"
    ],
    "orderQuery": "Birds Nest Snake Plant in 4 inch white plastic pot @129",
    "description": "Healthy nursery-grown Birds Nest Snake Plant in 4 inch white plastic pot (Sansevieria trifasciata). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 43,
    "slug": "43-silver-leaf-philondendron-in-4-inch-white-plastic-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Silver Leaf Philondendron in 4 inch white plastic pot",
    "scientificName": "Scindapsus pictus",
    "price": 179,
    "image": "/images/Satin Pothos.webp",
    "alt": "Satin Pothos",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Silvery matte patches"
    ],
    "orderQuery": "Satin Pothos in 4 inch white plastic pot @59",
    "description": "Healthy nursery-grown Silver Leaf Philondendron in 4 inch white plastic pot (Scindapsus pictus). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 44,
    "slug": "44-golden-syngonium-in-4-inch-white-plastic-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Golden Syngonium in 4 inch white plastic pot",
    "scientificName": "Syngonium podophyllum",
    "price": 119,
    "image": "/images/Golden Syngonium.webp",
    "alt": "Syngonium Golden",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Small arrowhead leaves"
    ],
    "orderQuery": "Golden Syngonium in 4 inch white plastic pot @79",
    "description": "Healthy nursery-grown Golden Syngonium in 4 inch white plastic pot (Syngonium podophyllum). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 45,
    "slug": "45-green-fittonia-in-4-inch-white-plastic-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Green Fittonia in 4 inch white plastic pot",
    "scientificName": "Fittonia albivenis",
    "price": 139,
    "image": "/images/White Nerve Plant.webp",
    "alt": "White Nerve Plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Mosaic white veins"
    ],
    "orderQuery": "White Nerve Plant in 4 inch white plastic pot @69",
    "description": "Healthy nursery-grown Green Fittonia in 4 inch white plastic pot (Fittonia albivenis). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 46,
    "slug": "46-black-zz-plant-in-6-inch-white-plastic-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Black ZZ Plant in 6 inch white plastic pot",
    "scientificName": "Zamioculcas zamiifolia",
    "price": 319,
    "image": "/images/Black ZZ Plant.webp",
    "alt": "Black ZZ Plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Dark purple-black glossy"
    ],
    "orderQuery": "Black ZZ Plant in 4 inch white plastic pot @79",
    "description": "Healthy nursery-grown Black ZZ Plant in 6 inch white plastic pot (Zamioculcas zamiifolia). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 47,
    "slug": "47-syngonium-pink-allusion-in-4-inch-white-plastic-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Syngonium 'Pink Allusion' in 4 inch white plastic pot",
    "scientificName": "Syngonium podophyllum",
    "price": 119,
    "image": "/images/Syngonium Pink Allusion.webp",
    "alt": "Syngonium Plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Shoft pink shading"
    ],
    "orderQuery": "Syngonium Pink Allusion in 4 inch white plastic pot @79",
    "description": "Healthy nursery-grown Syngonium 'Pink Allusion' in 4 inch white plastic pot (Syngonium podophyllum). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 48,
    "slug": "48-betal-leaf-paan-in-4-inch-white-plastic-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Betal Leaf / Paan in 4 inch white plastic pot",
    "scientificName": "Piper betle",
    "price": 179,
    "image": "/images/Betel leaf.webp",
    "alt": "Betel leaf",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Glossy medicinal leaves"
    ],
    "orderQuery": "Betal Leaf / Paan in 4 inch white plastic pot @69",
    "description": "Healthy nursery-grown Betal Leaf / Paan in 4 inch white plastic pot (Piper betle). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 49,
    "slug": "49-green-money-plant-in-4-inch-white-plastic-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Green Money Plant in 4 inch white plastic pot",
    "scientificName": "Epipremnum aureum",
    "price": 149,
    "image": "/images/Green Money Plant.webp",
    "alt": "Money Plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Indoor",
    "badge": "✨ Premium",
    "benefits": [
      "Heart-Shaped yellow marbling"
    ],
    "orderQuery": "Green Money Plant in 4 inch white plastic pot @79",
    "description": "Healthy nursery-grown Green Money Plant in 4 inch white plastic pot (Epipremnum aureum). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 50,
    "slug": "50-araucaria-christmas-tree-in-8-inch-nursery-pot",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Araucaria / Christmas Tree in 8 Inch Nursery Pot",
    "scientificName": "Saraca asoca",
    "price": 399,
    "image": "/images/ashoka.jpg",
    "alt": "ashoka plant",
    "bgStyle": "background: #dcedc8",
    "tag": "Outdoor",
    "benefits": [
      "Shade",
      "Fast Growing"
    ],
    "orderQuery": "Araucaria / Christmas Tree in 8 Inch Nursery Pot @399",
    "description": "Healthy nursery-grown Araucaria / Christmas Tree in 8 Inch Nursery Pot (Saraca asoca). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 51,
    "slug": "51-araucaria-christmas-tree-in-4-inch-nursery-bag",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Araucaria / Christmas Tree in 4 Inch Nursery Bag",
    "scientificName": "Saraca asoca",
    "price": 249,
    "image": "/images/ashoka1.jpg",
    "alt": "ashoka plant",
    "bgStyle": "background: #dcedc8",
    "tag": "Outdoor",
    "benefits": [
      "Shade",
      "Privacy"
    ],
    "orderQuery": "Araucaria / Christmas Tree in 4 Inch Nursery Bag @249",
    "description": "Healthy nursery-grown Araucaria / Christmas Tree in 4 Inch Nursery Bag (Saraca asoca). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 52,
    "slug": "52-bamboo-palm-in-8-inch-nursery-bag",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Bamboo Palm in 8 Inch Nursery bag",
    "scientificName": "Bambusa vulgaris",
    "price": 399,
    "image": "/images/bamboo.jpg",
    "alt": "bamboo plant",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Fast Growing",
      "Lucky"
    ],
    "orderQuery": "Bamboo Palm in 8 Inch Nursery bag @399",
    "description": "Healthy nursery-grown Bamboo Palm in 8 Inch Nursery bag (Bambusa vulgaris). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 53,
    "slug": "53-lucky-bamboo-in-5-inch-nursery-pot",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Lucky Bamboo in 5 Inch Nursery Pot",
    "scientificName": "Bambusa vulgaris",
    "price": 149,
    "image": "/images/bamboo1.jpg",
    "alt": "bamboo plant",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "badge": "🔥 Hot",
    "benefits": [
      "Fast Growing",
      "Lucky"
    ],
    "orderQuery": "Lucky Bamboo in 5 Inch Nursery Pot @149",
    "description": "Healthy nursery-grown Lucky Bamboo in 5 Inch Nursery Pot (Bambusa vulgaris). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 54,
    "slug": "54-golden-lucky-bamboo-in-5-inch-nursery-pot",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Golden Lucky Bamboo in 5 Inch Nursery Pot",
    "scientificName": "Bambusa vulgaris",
    "price": 149,
    "image": "/images/bamboo2.jpg",
    "alt": "bamboo plant",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Fast Growing",
      "Lucky"
    ],
    "orderQuery": "Golden Lucky Bamboo in 5 Inch Nursery Pot @149",
    "description": "Healthy nursery-grown Golden Lucky Bamboo in 5 Inch Nursery Pot (Bambusa vulgaris). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 55,
    "slug": "55-areca-palm-in-8-inch-nursery-bag-3-5-ft",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Areca Palm in 8 Inch Nursery Bag (~3.5 ft)",
    "scientificName": "Dypsis lutescens",
    "price": 349,
    "image": "/images/areca palm1.jpg",
    "alt": "areca palm",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Fast Growing",
      "Air Purifier"
    ],
    "orderQuery": "Areca Palm in 8 Inch Nursery Bag (~3.5 ft) @349",
    "description": "Healthy nursery-grown Areca Palm in 8 Inch Nursery Bag (~3.5 ft) (Dypsis lutescens). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 56,
    "slug": "56-bushy-table-areca-palm-in-4-inch-pot",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Bushy Table Areca Palm in 4 Inch Pot",
    "scientificName": "Dypsis lutescens",
    "price": 299,
    "image": "/images/areca palm.jpg",
    "alt": "areca palm",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Fast Growing",
      "Air Purifier"
    ],
    "orderQuery": "Bushy Table Areca Palm in 4 Inch Pot @299",
    "description": "Healthy nursery-grown Bushy Table Areca Palm in 4 Inch Pot (Dypsis lutescens). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 57,
    "slug": "57-areca-palm-3-ft-in-12-inch-white-nursery-pot",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Areca Palm (~ 3 Ft) in 12 Inch White Nursery Pot",
    "scientificName": "Dypsis lutescens",
    "price": 399,
    "image": "/images/areca palm2.jpg",
    "alt": "areca palm",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Fast Growing",
      "Air Purifier"
    ],
    "orderQuery": "Areca Palm (~ 3 Ft) in 12 Inch White Nursery Pot @399",
    "description": "Healthy nursery-grown Areca Palm (~ 3 Ft) in 12 Inch White Nursery Pot (Dypsis lutescens). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 58,
    "slug": "58-araucaria-christmas-tree-in-8-inch-nursery-bag",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Araucaria / Christmas Tree in 8 Inch Nursery Bag",
    "scientificName": "Araucaria heterophylla",
    "price": 299,
    "image": "/images/christmas.jpg",
    "alt": "christmas plant",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "badge": "🔥 Hot",
    "benefits": [
      "Decorative",
      "Low Maintenance"
    ],
    "orderQuery": "Araucaria / Christmas Tree in 8 Inch Nursery Bag @299",
    "description": "Healthy nursery-grown Araucaria / Christmas Tree in 8 Inch Nursery Bag (Araucaria heterophylla). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 59,
    "slug": "59-araucaria-christmas-tree-in-8-inch-nursery-pot",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Araucaria / Christmas Tree in 8 Inch Nursery Pot",
    "scientificName": "Araucaria heterophylla",
    "price": 499,
    "image": "/images/christmas1.jpg",
    "alt": "christmas plant",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Decorative",
      "Low Maintenance"
    ],
    "orderQuery": "Araucaria / Christmas Tree in 8 Inch Nursery Pot @499",
    "description": "Healthy nursery-grown Araucaria / Christmas Tree in 8 Inch Nursery Pot (Araucaria heterophylla). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 60,
    "slug": "60-araucaria-christmas-tree-in-6-inch-white-nursery-pot",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Araucaria / Christmas Tree in 6 Inch White Nursery Pot",
    "scientificName": "Araucaria heterophylla",
    "price": 349,
    "image": "/images/christmas2.jpg",
    "alt": "christmas plant",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Decorative",
      "Low Maintenance"
    ],
    "orderQuery": "Araucaria / Christmas Tree in 6 Inch White Nursery Pot @349",
    "description": "Healthy nursery-grown Araucaria / Christmas Tree in 6 Inch White Nursery Pot (Araucaria heterophylla). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 61,
    "slug": "61-foxtail-marry-red-in-5-inch-nursery-bag",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Foxtail Marry Red In 5 Inch Nursery Bag",
    "scientificName": "Wodyetia bifurcata",
    "price": 99,
    "image": "/images/foxtail.avif",
    "alt": "Foxtail Marry",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Beautiful fronds",
      "Ancient plants",
      "Bio indicators"
    ],
    "orderQuery": "Foxtail Marry Red In 5 Inch Nursery Bag @99",
    "description": "Healthy nursery-grown Foxtail Marry Red In 5 Inch Nursery Bag (Wodyetia bifurcata). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 62,
    "slug": "62-neem-in-8-inch-nursery-pot",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Neem in 8 Inch Nursery Pot",
    "scientificName": "Azadirachta indica",
    "price": 149,
    "image": "/images/neem.avif",
    "alt": "Neem Tree",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Air Purifier",
      "Low maintenance",
      "Tough, hardy plant"
    ],
    "orderQuery": "Neem in 8 Inch Nursery Pot @149",
    "description": "Healthy nursery-grown Neem in 8 Inch Nursery Pot (Azadirachta indica). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 63,
    "slug": "63-aralia-neem-in-4-inch-nursery-bag",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Aralia Neem in 4 Inch Nursery Bag",
    "scientificName": "Azadirachta indica",
    "price": 99,
    "image": "/images/aralia neem.avif",
    "alt": "Neem Tree",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Air Purifier",
      "Low maintenance",
      "Tough, hardy plant"
    ],
    "orderQuery": "Aralia Neem in 4 Inch Nursery Bag @99",
    "description": "Healthy nursery-grown Aralia Neem in 4 Inch Nursery Bag (Azadirachta indica). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 64,
    "slug": "64-peepal-sacred-fig-in-6-inch-nursery-pot",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Peepal / Sacred Fig in 6 Inch Nursery Pot",
    "scientificName": "Ficus religiosa",
    "price": 149,
    "image": "/images/peepal.avif",
    "alt": "Peepal Tree",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Air Purifier",
      "Low maintenance",
      "Tough, hardy plant"
    ],
    "orderQuery": "Peepal / Sacred Fig in 6 Inch Nursery Pot @149",
    "description": "Healthy nursery-grown Peepal / Sacred Fig in 6 Inch Nursery Pot (Ficus religiosa). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 65,
    "slug": "65-champa-white-plumeria-in-7-inch-nursery-bag",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Champa White / Plumeria in 7 Inch Nursery Bag",
    "scientificName": "Plumeria rubra",
    "price": 199,
    "image": "/images/champa.avif",
    "alt": "Champa",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Strikingly fragrant flowers",
      "Low maintenance",
      "Attracts butterflies and hummingbirds"
    ],
    "orderQuery": "Champa White / Plumeria in 7 Inch Nursery Bag @199",
    "description": "Healthy nursery-grown Champa White / Plumeria in 7 Inch Nursery Bag (Plumeria rubra). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 66,
    "slug": "66-champa-red-5-ft-in-8-inch-nursery-bag",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Champa Red (~ 5 Ft) in 8 Inch Nursery bag",
    "scientificName": "Plumeria rubra",
    "price": 499,
    "image": "/images/champa1.avif",
    "alt": "Champa",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Strikingly fragrant flowers",
      "Low maintenance",
      "Attracts butterflies and hummingbirds"
    ],
    "orderQuery": "Champa Red (~ 5 Ft) in 8 Inch Nursery bag @499",
    "description": "Healthy nursery-grown Champa Red (~ 5 Ft) in 8 Inch Nursery bag (Plumeria rubra). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 67,
    "slug": "67-naag-champa-2-ft-in-6-inch-nursery-pot",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Naag Champa (2 Ft) in 6 Inch Nursery Pot",
    "scientificName": "Plumeria rubra",
    "price": 199,
    "image": "/images/naag champa.avif",
    "alt": "Naag Champa",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Strikingly fragrant flowers",
      "Low maintenance",
      "Attracts butterflies and hummingbirds"
    ],
    "orderQuery": "Naag Champa (2 Ft) in 6 Inch Nursery Pot @199",
    "description": "Healthy nursery-grown Naag Champa (2 Ft) in 6 Inch Nursery Pot (Plumeria rubra). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 68,
    "slug": "68-croton-oakleaf-in-6-inch-white-nursery-pot",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Croton Oakleaf in 6 Inch White Nursery Pot",
    "scientificName": "Grevillea robusta",
    "price": 149,
    "image": "/images/oakleaf.webp",
    "alt": "Oakleaf",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Strikingly fragrant flowers",
      "Low maintenance",
      "Attracts butterflies and hummingbirds"
    ],
    "orderQuery": "Croton Oakleaf in 6 Inch White Nursery Pot @149",
    "description": "Healthy nursery-grown Croton Oakleaf in 6 Inch White Nursery Pot (Grevillea robusta). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 69,
    "slug": "69-silver-yucca-in-8-inch-nursery-bag",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Silver Yucca in 8 Inch Nursery Bag",
    "scientificName": "Yucca elephantipes",
    "price": 199,
    "image": "/images/silver yucca.avif",
    "alt": "Silver Yucca",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Air Purifying",
      "Low maintenance",
      "Heart shaped leaves"
    ],
    "orderQuery": "Silver Yucca in 8 Inch Nursery Bag @199",
    "description": "Healthy nursery-grown Silver Yucca in 8 Inch Nursery Bag (Yucca elephantipes). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 70,
    "slug": "70-aglaonema-silver-queen-in-4-inch-nursery-bag",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Aglaonema Silver Queen in 4 inch Nursery Bag",
    "scientificName": "Aglaonema 'Silver Queen'",
    "price": 149,
    "image": "/images/aglaonema silver.avif",
    "alt": "Aglaonema",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Air Purifying",
      "Low maintenance",
      "Highly Adaptable"
    ],
    "orderQuery": "Aglaonema Silver Queen in 4 inch Nursery Bag @149",
    "description": "Healthy nursery-grown Aglaonema Silver Queen in 4 inch Nursery Bag (Aglaonema 'Silver Queen'). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 71,
    "slug": "71-cypress-golden-in-8-inch-nursery-pot",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Cypress Golden in 8 Inch Nursery pot",
    "scientificName": "Cupressus sempervirens",
    "price": 499,
    "image": "/images/cypress.avif",
    "alt": "Cypress Golden",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Long Life",
      "Scale like leaves",
      "Highly Adaptable"
    ],
    "orderQuery": "Cypress Golden in 8 Inch Nursery pot @499",
    "description": "Healthy nursery-grown Cypress Golden in 8 Inch Nursery pot (Cupressus sempervirens). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 72,
    "slug": "72-morpankhi-in-6-inch-nursery-pot",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Morpankhi in 6 Inch Nursery Pot",
    "scientificName": "Thuja occidentalis",
    "price": 149,
    "image": "/images/morpankhi.avif",
    "alt": "Morpankhi",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Pyramidal shape",
      "Scaly leaves",
      "Hardly plant"
    ],
    "orderQuery": "Morpankhi in 6 Inch Nursery Pot @149",
    "description": "Healthy nursery-grown Morpankhi in 6 Inch Nursery Pot (Thuja occidentalis). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 73,
    "slug": "73-morpankhi-in-10-inch-classy-red-plastic-pot",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Morpankhi in 10 Inch Classy Red Plastic Pot",
    "scientificName": "Thuja occidentalis",
    "price": 199,
    "image": "/images/morpankhi1.avif",
    "alt": "Morpankhi",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Pyramidal shape",
      "Scaly leaves",
      "Hardly plant"
    ],
    "orderQuery": "Morpankhi in 10 Inch Classy Red Plastic Pot @199",
    "description": "Healthy nursery-grown Morpankhi in 10 Inch Classy Red Plastic Pot (Thuja occidentalis). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 74,
    "slug": "74-tapioca-cassava-in-8-inch-nursery-pot",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Tapioca / Cassava in 8 Inch Nursery Pot",
    "scientificName": "Cassia fistula",
    "price": 199,
    "image": "/images/tapioca.avif",
    "alt": "Tapioca",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Pyramidal shape",
      "Scaly leaves",
      "Hardly plant"
    ],
    "orderQuery": "Tapioca / Cassava in 8 Inch Nursery Pot @199",
    "description": "Healthy nursery-grown Tapioca / Cassava in 8 Inch Nursery Pot (Cassia fistula). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 75,
    "slug": "75-tecoma-yellow-in-6-inch-nursery-pot",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Tecoma Yellow in 6 inch Nursery pot",
    "scientificName": "Tecoma stans",
    "price": 179,
    "image": "/images/tecoma.avif",
    "alt": "Tecoma Yellow",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Low Maintenance",
      "Lush green foliage",
      "Summer flowering plant"
    ],
    "orderQuery": "Tecoma Yellow in 6 inch Nursery pot @179",
    "description": "Healthy nursery-grown Tecoma Yellow in 6 inch Nursery pot (Tecoma stans). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 76,
    "slug": "76-tecoma-orange-in-4-inch-nursery-bag",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Tecoma Orange in 4 Inch Nursery Bag",
    "scientificName": "Tecoma stans",
    "price": 169,
    "image": "/images/tecoma1.avif",
    "alt": "Tecoma Orange",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Low Maintenance",
      "Lush green foliage",
      "Summer flowering plant"
    ],
    "orderQuery": "Tecoma Orange in 4 Inch Nursery Bag @169",
    "description": "Healthy nursery-grown Tecoma Orange in 4 Inch Nursery Bag (Tecoma stans). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 77,
    "slug": "77-tecoma-red-in-6-inch-nursery-pot",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Tecoma red in 6 Inch Nursery Pot",
    "scientificName": "Tecoma stans",
    "price": 199,
    "image": "/images/tecoma2.avif",
    "alt": "Tecoma Red",
    "bgStyle": "background: #f9fbe7",
    "tag": "Outdoor",
    "benefits": [
      "Low Maintenance",
      "Lush green foliage",
      "Summer flowering plant"
    ],
    "orderQuery": "Tecoma red in 6 Inch Nursery Pot @199",
    "description": "Healthy nursery-grown Tecoma red in 6 Inch Nursery Pot (Tecoma stans). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 78,
    "slug": "78-desi-rose-any-colour-in-6-inch-nursery-pot",
    "category": "flowering",
    "categoryName": "🌸 Flowering Plants",
    "name": "Desi Rose (Any Colour) in 6 Inch Nursery Pot",
    "scientificName": "Rosa × hybrida",
    "price": 99,
    "image": "/images/desi rose.jpg",
    "alt": "desi rose",
    "bgStyle": "background: #fce4ec",
    "tag": "Flowering",
    "badge": "❤️ Loved",
    "benefits": [
      "Fragrant",
      "Garden Favorite"
    ],
    "orderQuery": "Desi Rose (Any Colour) in 6 Inch Nursery Pot @99",
    "description": "Healthy nursery-grown Desi Rose (Any Colour) in 6 Inch Nursery Pot (Rosa × hybrida). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 79,
    "slug": "79-rosemary-in-4-inch-nursery-bag",
    "category": "flowering",
    "categoryName": "🌸 Flowering Plants",
    "name": "Rosemary in 4 Inch Nursery Bag",
    "scientificName": "Rosa × hybrida",
    "price": 199,
    "image": "/images/rosemary.jpg",
    "alt": "rosemary plant",
    "bgStyle": "background: #fce4ec",
    "tag": "Flowering",
    "badge": "❤️ Loved",
    "benefits": [
      "Fragrant",
      "Garden Favorite"
    ],
    "orderQuery": "Rosemary in 4 Inch Nursery Bag @199",
    "description": "Healthy nursery-grown Rosemary in 4 Inch Nursery Bag (Rosa × hybrida). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 80,
    "slug": "80-hibiscus-gudhal-red-in-8-inch-nursery-bag",
    "category": "flowering",
    "categoryName": "🌸 Flowering Plants",
    "name": "Hibiscus / Gudhal Red in 8 Inch Nursery Bag",
    "scientificName": "Hibiscus rosa-sinensis",
    "price": 199,
    "image": "/images/hibiscus1.jpg",
    "alt": "hibiscus plant",
    "bgStyle": "background: #fff3e0",
    "tag": "Flowering",
    "benefits": [
      "Large Blooms",
      "Butterfly Friendly"
    ],
    "orderQuery": "Hibiscus / Gudhal Red in 8 Inch Nursery Bag @199",
    "description": "Healthy nursery-grown Hibiscus / Gudhal Red in 8 Inch Nursery Bag (Hibiscus rosa-sinensis). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 81,
    "slug": "81-hibiscus-white-in-8-inch-nursery-bag",
    "category": "flowering",
    "categoryName": "🌸 Flowering Plants",
    "name": "Hibiscus White in 8 Inch Nursery Bag",
    "scientificName": "Hibiscus rosa-sinensis",
    "price": 199,
    "image": "/images/hibiscus.jpg",
    "alt": "hibiscus plant 1",
    "bgStyle": "background: #f8bbd0",
    "tag": "Flowering",
    "badge": "⭐ Popular",
    "benefits": [
      "Medicinal",
      "Daily Bloom"
    ],
    "orderQuery": "Hibiscus White in 8 Inch Nursery Bag @199",
    "description": "Healthy nursery-grown Hibiscus White in 8 Inch Nursery Bag (Hibiscus rosa-sinensis). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 82,
    "slug": "82-hibiscus-gudhal-red-in-6-inch-nursery-pot",
    "category": "flowering",
    "categoryName": "🌸 Flowering Plants",
    "name": "Hibiscus / Gudhal Red in 6 Inch Nursery Pot",
    "scientificName": "Hibiscus rosa-sinensis",
    "price": 179,
    "image": "/images/hibiscus2.jpg",
    "alt": "hibiscus plant 2",
    "bgStyle": "background: #f8bbd0",
    "tag": "Flowering",
    "badge": "⭐ Popular",
    "benefits": [
      "Medicinal",
      "Daily Bloom"
    ],
    "orderQuery": "Hibiscus / Gudhal Red in 6 Inch Nursery Pot @179",
    "description": "Healthy nursery-grown Hibiscus / Gudhal Red in 6 Inch Nursery Pot (Hibiscus rosa-sinensis). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 83,
    "slug": "83-aloe-vera-in-6-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Aloe Vera in 6 Inch Nursery Pot",
    "scientificName": "Aloe barbadensis",
    "price": 49,
    "image": "/images/aloe vera.jpg",
    "alt": "aloe vera plant",
    "bgStyle": "background: #e0f2f1",
    "tag": "Succulent",
    "badge": "🌿 Best Seller",
    "benefits": [
      "Medicinal",
      "Skincare",
      "Hardy"
    ],
    "orderQuery": "Aloe Vera in 6 Inch Nursery Pot @49",
    "description": "Healthy nursery-grown Aloe Vera in 6 Inch Nursery Pot (Aloe barbadensis). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 84,
    "slug": "84-aloe-vera-in-6-inch-nursery-bag",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Aloe Vera in 6 Inch Nursery Bag",
    "scientificName": "Aloe barbadensis",
    "price": 49,
    "image": "/images/aloe vera1.jpg",
    "alt": "aloe vera plant",
    "bgStyle": "background: #e0f2f1",
    "tag": "Succulent",
    "benefits": [
      "Medicinal",
      "Skincare",
      "Hardy"
    ],
    "orderQuery": "Aloe Vera in 6 Inch Nursery Bag @49",
    "description": "Healthy nursery-grown Aloe Vera in 6 Inch Nursery Bag (Aloe barbadensis). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 85,
    "slug": "85-mammillaria-cactus-in-3-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Mammillaria Cactus in 3 Inch Nursery Pot",
    "scientificName": "Ferocactus species",
    "price": 249,
    "image": "/images/cactus.jpg",
    "alt": "cactus plant",
    "bgStyle": "background: #efebe9",
    "tag": "Cactus",
    "badge": "🔥 Trending",
    "benefits": [
      "Low Water",
      "Easy Care"
    ],
    "orderQuery": "Mammillaria Cactus in 3 Inch Nursery Pot @249",
    "description": "Healthy nursery-grown Mammillaria Cactus in 3 Inch Nursery Pot (Ferocactus species). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 86,
    "slug": "86-shyama-tulsi-in-6-inch-nursery-pot",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Shyama Tulsi in 6 Inch Nursery Pot",
    "scientificName": "Ocimum tenuiflorum",
    "price": 69,
    "image": "/images/tulsi.jpg",
    "alt": "tulsi plant",
    "bgStyle": "background: #f1f8e9",
    "tag": "Herb",
    "badge": "🙏 Sacred",
    "benefits": [
      "Sacred",
      "Immunity",
      "Medicinal"
    ],
    "orderQuery": "Shyama Tulsi in 6 Inch Nursery Pot @69",
    "description": "Healthy nursery-grown Shyama Tulsi in 6 Inch Nursery Pot (Ocimum tenuiflorum). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 87,
    "slug": "87-shyama-tulsi-in-6-inch-tulsi-designer-ceramic-pot",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Shyama Tulsi in 6 Inch Tulsi Designer Ceramic Pot",
    "scientificName": "Ocimum tenuiflorum",
    "price": 299,
    "image": "/images/tulsi1.jpg",
    "alt": "tulsi plant",
    "bgStyle": "background: #f1f8e9",
    "tag": "Herb",
    "badge": "🙏 Sacred",
    "benefits": [
      "Sacred",
      "Immunity",
      "Medicinal"
    ],
    "orderQuery": "Shyama Tulsi in 6 Inch Tulsi Designer Ceramic Pot @299",
    "description": "Healthy nursery-grown Shyama Tulsi in 6 Inch Tulsi Designer Ceramic Pot (Ocimum tenuiflorum). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 88,
    "slug": "88-set-of-3-mint-pudina-in-4-inch-nursery-bag",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Set Of 3 - Mint / Pudina in 4 Inch Nursery Bag",
    "scientificName": "Mentha spicata",
    "price": 99,
    "image": "/images/mint.jpg",
    "alt": "mint plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Herb",
    "badge": "🌿 Kitchen Herb",
    "benefits": [
      "Culinary",
      "Fragrant"
    ],
    "orderQuery": "Set Of 3 - Mint / Pudina in 4 Inch Nursery Bag @99",
    "description": "Healthy nursery-grown Set Of 3 - Mint / Pudina in 4 Inch Nursery Bag (Mentha spicata). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 89,
    "slug": "89-mint-pudina-in-4-inch-nursery-pot",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Mint / Pudina in 4 Inch Nursery Pot",
    "scientificName": "Mentha spicata",
    "price": 49,
    "image": "/images/mint1.jpg",
    "alt": "mint plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Herb",
    "benefits": [
      "Culinary",
      "Fragrant"
    ],
    "orderQuery": "Mint / Pudina in 4 Inch Nursery Pot @49",
    "description": "Healthy nursery-grown Mint / Pudina in 4 Inch Nursery Pot (Mentha spicata). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 90,
    "slug": "90-curry-patta-in-4-inch-nursery-bag",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Curry Patta in 4 Inch Nursery bag",
    "scientificName": "Murraya koenigii",
    "price": 49,
    "image": "/images/curry leaf.jpg",
    "alt": "curry plant",
    "bgStyle": "background: #fafde7",
    "tag": "Herb",
    "badge": "🌿 Kitchen Essential",
    "benefits": [
      "Kitchen",
      "Medicinal"
    ],
    "orderQuery": "Curry Patta in 4 Inch Nursery bag @49",
    "description": "Healthy nursery-grown Curry Patta in 4 Inch Nursery bag (Murraya koenigii). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 91,
    "slug": "91-curry-patta-in-8-inch-nursery-bag",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Curry Patta in 8 Inch Nursery Bag",
    "scientificName": "Murraya koenigii",
    "price": 99,
    "image": "/images/curry leaf1.jpg",
    "alt": "curry plant",
    "bgStyle": "background: #fafde7",
    "tag": "Herb",
    "badge": "🌿 Kitchen Essential",
    "benefits": [
      "Kitchen",
      "Medicinal"
    ],
    "orderQuery": "Curry Patta in 8 Inch Nursery Bag @99",
    "description": "Healthy nursery-grown Curry Patta in 8 Inch Nursery Bag (Murraya koenigii). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 92,
    "slug": "92-set-of-2-curry-patta-in-4-inch-nursery-bag",
    "category": "outdoor",
    "categoryName": "🌳 Outdoor Plants",
    "name": "Set of 2 - Curry Patta in 4 Inch Nursery bag",
    "scientificName": "Murraya koenigii",
    "price": 79,
    "image": "/images/curry leaf2.jpg",
    "alt": "curry leaf",
    "bgStyle": "background: #fafde7",
    "tag": "Herb",
    "badge": "🌿 Kitchen Essential",
    "benefits": [
      "Kitchen",
      "Medicinal"
    ],
    "orderQuery": "Set of 2 - Curry Patta in 4 Inch Nursery bag @79",
    "description": "Healthy nursery-grown Set of 2 - Curry Patta in 4 Inch Nursery bag (Murraya koenigii). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 93,
    "slug": "93-grafted-mango-in-6-inch-nursery-bag",
    "category": "fruit",
    "categoryName": "🍋 Fruit Plants",
    "name": "Grafted Mango in 6 Inch Nursery Bag",
    "scientificName": "Mangifera indica",
    "price": 499,
    "image": "/images/mango.jpg",
    "alt": "mango plant",
    "bgStyle": "background: #fff9c4",
    "tag": "Fruit",
    "benefits": [
      "Sweet Fruits",
      "Grafted"
    ],
    "orderQuery": "Grafted Mango in 6 Inch Nursery Bag @499",
    "description": "Healthy nursery-grown Grafted Mango in 6 Inch Nursery Bag (Mangifera indica). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 94,
    "slug": "94-thai-mango-in-10-inch-nursery-bag",
    "category": "fruit",
    "categoryName": "🍋 Fruit Plants",
    "name": "Thai Mango in 10 Inch Nursery Bag",
    "scientificName": "Mangifera indica",
    "price": 699,
    "image": "/images/mango1.jpg",
    "alt": "mango plant",
    "bgStyle": "background: #fff9c4",
    "tag": "Fruit",
    "benefits": [
      "Sweet Fruits",
      "Grafted"
    ],
    "orderQuery": "Thai Mango in 10 Inch Nursery Bag @699",
    "description": "Healthy nursery-grown Thai Mango in 10 Inch Nursery Bag (Mangifera indica). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 95,
    "slug": "95-kagzi-lemon-in-8-inch-nursery-pot",
    "category": "fruit",
    "categoryName": "🍋 Fruit Plants",
    "name": "Kagzi Lemon in 8 inch Nursery Pot",
    "scientificName": "Citrus limon",
    "price": 299,
    "image": "/images/lemon.jpg",
    "alt": "lemon plant",
    "bgStyle": "background: #ffe0b2",
    "tag": "Fruit",
    "badge": "🍋 Popular",
    "benefits": [
      "Vitamin",
      "Container Friendly"
    ],
    "orderQuery": "Kagzi Lemon in 8 inch Nursery Pot @299",
    "description": "Healthy nursery-grown Kagzi Lemon in 8 inch Nursery Pot (Citrus limon). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 96,
    "slug": "96-lemon-grass-in-6-inch-nursery-pot",
    "category": "fruit",
    "categoryName": "🍋 Fruit Plants",
    "name": "Lemon Grass in 6 Inch Nursery Pot",
    "scientificName": "Citrus limon",
    "price": 59,
    "image": "/images/lemon1.jpg",
    "alt": "lemon plant",
    "bgStyle": "background: #ffe0b2",
    "tag": "Fruit",
    "benefits": [
      "Vitamin",
      "Container Friendly"
    ],
    "orderQuery": "Lemon Grass in 6 Inch Nursery Pot @59",
    "description": "Healthy nursery-grown Lemon Grass in 6 Inch Nursery Pot (Citrus limon). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 97,
    "slug": "97-mosambi-sweet-lemon-in-8-inch-nursery-bag",
    "category": "fruit",
    "categoryName": "🍋 Fruit Plants",
    "name": "Mosambi / Sweet Lemon in 8 Inch Nursery Bag",
    "scientificName": "Citrus limon",
    "price": 299,
    "image": "/images/lemon2.jpg",
    "alt": "lemon plant",
    "bgStyle": "background: #ffe0b2",
    "tag": "Fruit",
    "benefits": [
      "Vitamin",
      "Container Friendly"
    ],
    "orderQuery": "Mosambi / Sweet Lemon in 8 Inch Nursery Bag @299",
    "description": "Healthy nursery-grown Mosambi / Sweet Lemon in 8 Inch Nursery Bag (Citrus limon). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 98,
    "slug": "98-kagzi-lemon-nimbu-in-8-inch-nursery-bag",
    "category": "fruit",
    "categoryName": "🍋 Fruit Plants",
    "name": "Kagzi Lemon / Nimbu in 8 Inch Nursery Bag",
    "scientificName": "Citrus limon",
    "price": 289,
    "image": "/images/lemon3.jpg",
    "alt": "lemon plant",
    "bgStyle": "background: #ffe0b2",
    "tag": "Fruit",
    "benefits": [
      "Vitamin",
      "Container Friendly"
    ],
    "orderQuery": "Kagzi Lemon / Nimbu in 8 Inch Nursery Bag @289",
    "description": "Healthy nursery-grown Kagzi Lemon / Nimbu in 8 Inch Nursery Bag (Citrus limon). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 99,
    "slug": "99-amrood-guava-in-8-inch-nursery-bag",
    "category": "fruit",
    "categoryName": "🍋 Fruit Plants",
    "name": "Amrood / Guava in 8 Inch Nursery Bag",
    "scientificName": "Psidium guajava",
    "price": 234,
    "image": "/images/guava1.jpg",
    "alt": "guava plant 1",
    "bgStyle": "background: #fce4ec",
    "tag": "Fruit",
    "badge": "🍈 Healthy Choice",
    "benefits": [
      "Fruit Bearing",
      "Container Friendly"
    ],
    "orderQuery": "Amrood / Guava in 8 Inch Nursery Bag @234",
    "description": "Healthy nursery-grown Amrood / Guava in 8 Inch Nursery Bag (Psidium guajava). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 100,
    "slug": "100-amrood-guava-pink-taiwan-in-6-inch-nursery-bag",
    "category": "fruit",
    "categoryName": "🍋 Fruit Plants",
    "name": "Amrood / Guava Pink Taiwan in 6 Inch Nursery Bag",
    "scientificName": "Psidium guajava",
    "price": 299,
    "image": "/images/guava2.jpg",
    "alt": "guava plant 2",
    "bgStyle": "background: #fce4ec",
    "tag": "Fruit",
    "badge": "🍈 Healthy Choice",
    "benefits": [
      "Fruit Bearing",
      "Container Friendly"
    ],
    "orderQuery": "Amrood / Guava Pink Taiwan in 6 Inch Nursery Bag @299",
    "description": "Healthy nursery-grown Amrood / Guava Pink Taiwan in 6 Inch Nursery Bag (Psidium guajava). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 101,
    "slug": "101-set-of-3-amrood-guava-in-7-inch-nursery-bag",
    "category": "fruit",
    "categoryName": "🍋 Fruit Plants",
    "name": "Set of 3 - Amrood / Guava in 7 Inch Nursery Bag",
    "scientificName": "Psidium guajava",
    "price": 449,
    "image": "/images/guava3.jpg",
    "alt": "guava plant 3",
    "bgStyle": "background: #fce4ec",
    "tag": "Fruit",
    "badge": "🍈 Healthy Choice",
    "benefits": [
      "Fruit Bearing",
      "Container Friendly"
    ],
    "orderQuery": "Set of 3 - Amrood / Guava in 7 Inch Nursery Bag @449",
    "description": "Healthy nursery-grown Set of 3 - Amrood / Guava in 7 Inch Nursery Bag (Psidium guajava). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 102,
    "slug": "102-anar-pomegranate-in-8-inch-nursery-bag",
    "category": "fruit",
    "categoryName": "🍋 Fruit Plants",
    "name": "Anar / Pomegranate in 8 Inch Nursery Bag",
    "scientificName": "Punica granatum",
    "price": 299,
    "image": "/images/pomegranate.jpg",
    "alt": "pomegranate plant",
    "bgStyle": "background: #fce4ec",
    "tag": "Fruit",
    "badge": "❤️ Healthy Choice",
    "benefits": [
      "Fruit Bearing",
      "Container Friendly"
    ],
    "orderQuery": "Anar / Pomegranate in 8 Inch Nursery Bag @299",
    "description": "Healthy nursery-grown Anar / Pomegranate in 8 Inch Nursery Bag (Punica granatum). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 103,
    "slug": "103-china-orange-in-7-inch-nursery-bag",
    "category": "fruit",
    "categoryName": "🍋 Fruit Plants",
    "name": "China Orange in 7 Inch Nursery Bag",
    "scientificName": "Citrus sinensis",
    "price": 309,
    "image": "/images/orange.jpg",
    "alt": "orange plant",
    "bgStyle": "background: #fce4ec",
    "tag": "Fruit",
    "badge": "🍊 Popular",
    "benefits": [
      "Vitamin C",
      "Fruit Bearing"
    ],
    "orderQuery": "China Orange in 7 Inch Nursery Bag @309",
    "description": "Healthy nursery-grown China Orange in 7 Inch Nursery Bag (Citrus sinensis). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 104,
    "slug": "104-banana-in-8-inch-nursery-pot",
    "category": "fruit",
    "categoryName": "🍋 Fruit Plants",
    "name": "Banana in 8 Inch Nursery Pot",
    "scientificName": "Musa paradisiaca",
    "price": 199,
    "image": "/images/banana.jpg",
    "alt": "banana plant",
    "bgStyle": "background: #fce4ec",
    "tag": "Fruit",
    "benefits": [
      "Fruit Bearing",
      "Fast Growing"
    ],
    "orderQuery": "Banana in 8 Inch Nursery Pot @199",
    "description": "Healthy nursery-grown Banana in 8 Inch Nursery Pot (Musa paradisiaca). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 105,
    "slug": "105-banana-plant-in-6-inch-nursery-bag",
    "category": "fruit",
    "categoryName": "🍋 Fruit Plants",
    "name": "Banana Plant in 6 Inch Nursery Bag",
    "scientificName": "Musa paradisiaca",
    "price": 149,
    "image": "/images/banana1.jpg",
    "alt": "banana plant 1",
    "bgStyle": "background: #fce4ec",
    "tag": "Fruit",
    "benefits": [
      "Fruit Bearing",
      "Fast Growing"
    ],
    "orderQuery": "Banana Plant in 6 Inch Nursery Bag @149",
    "description": "Healthy nursery-grown Banana Plant in 6 Inch Nursery Bag (Musa paradisiaca). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 106,
    "slug": "106-banana-plant-in-8-inch-red-classy-plastic-pot",
    "category": "fruit",
    "categoryName": "🍋 Fruit Plants",
    "name": "Banana Plant in 8 Inch Red Classy Plastic Pot",
    "scientificName": "Musa paradisiaca",
    "price": 199,
    "image": "/images/banana2.jpg",
    "alt": "banana plant 2",
    "bgStyle": "background: #fce4ec",
    "tag": "Fruit",
    "benefits": [
      "Fruit Bearing",
      "Fast Growing"
    ],
    "orderQuery": "Banana Plant in 8 Inch Red Classy Plastic Pot @199",
    "description": "Healthy nursery-grown Banana Plant in 8 Inch Red Classy Plastic Pot (Musa paradisiaca). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 107,
    "slug": "107-ficus-bonsai-in-6-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Ficus Bonsai in 6 Inch Nursery Pot",
    "scientificName": "Ficus retusa",
    "price": 1,
    "image": "/images/ficus.jpg",
    "alt": "ficus plant",
    "bgStyle": "background: #e8eaf6",
    "tag": "Bonsai",
    "badge": "✨ Premium",
    "benefits": [
      "Artistic",
      "Indoor Decor",
      "Perfect Gift"
    ],
    "orderQuery": "Ficus Bonsai in 6 Inch Nursery Pot @1189",
    "description": "Healthy nursery-grown Ficus Bonsai in 6 Inch Nursery Pot (Ficus retusa). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 108,
    "slug": "108-jade-bonsai-in-6-inch-nursery-pot",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Jade Bonsai in 6 Inch Nursery Pot",
    "scientificName": "Crassula ovata",
    "price": 299,
    "image": "/images/jade-bonsai.jpg",
    "alt": "jade plant",
    "bgStyle": "background: #e8eaf6",
    "tag": "Bonsai",
    "badge": "🍀 Lucky Plant",
    "benefits": [
      "Lucky Plant",
      "Low Maintenance",
      "Indoor Decor"
    ],
    "orderQuery": "Jade Bonsai in 6 Inch Nursery Pot @299",
    "description": "Healthy nursery-grown Jade Bonsai in 6 Inch Nursery Pot (Crassula ovata). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 109,
    "slug": "109-adenium-bonsai-any-colour-in-10-inch-nursery-bag",
    "category": "indoor",
    "categoryName": "🪴 Indoor Plants",
    "name": "Adenium Bonsai (any colour) in 10 Inch Nursery Bag",
    "scientificName": ">Adenium obesum",
    "price": 1,
    "image": "/images/adenium.jpg",
    "alt": "adenium",
    "bgStyle": "background: #f9fbe7",
    "tag": "Bonsai",
    "badge": "✨ Premium",
    "benefits": [
      "Flowering",
      "Premium Bonsai"
    ],
    "orderQuery": "Adenium Bonsai (any colour) in 10 Inch Nursery Bag @1339",
    "description": "Healthy nursery-grown Adenium Bonsai (any colour) in 10 Inch Nursery Bag (>Adenium obesum). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 110,
    "slug": "110-bougainvillea-any-colour-in-8-inch-nursery-pot",
    "category": "flowering",
    "categoryName": "🌸 Flowering Plants",
    "name": "Bougainvillea (Any Colour) in 8 inch Nursery Pot",
    "scientificName": "Bougainvillea spectabilis",
    "price": 299,
    "image": "/images/Bougainvillea.jpg",
    "alt": "bougainvillea plant",
    "bgStyle": "background: #e8f5e9",
    "tag": "Climber",
    "badge": "🌟 Loved",
    "benefits": [
      "Flowering",
      "Fast Growing"
    ],
    "orderQuery": "Bougainvillea (Any Colour) in 8 inch Nursery Pot @299",
    "description": "Healthy nursery-grown Bougainvillea (Any Colour) in 8 inch Nursery Pot (Bougainvillea spectabilis). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 111,
    "slug": "111-bougainvillea-any-colour-in-6-inch-nursery-pot",
    "category": "flowering",
    "categoryName": "🌸 Flowering Plants",
    "name": "Bougainvillea (any colour) in 6 Inch Nursery Pot",
    "scientificName": "Bougainvillea spectabilis",
    "price": 199,
    "image": "/images/Bougainvillea1.jpg",
    "alt": "bougainvillea plant 2",
    "bgStyle": "background: #e8f5e9",
    "tag": "Climber",
    "badge": "🌟 Loved",
    "benefits": [
      "Flowering",
      "Fast Growing"
    ],
    "orderQuery": "Bougainvillea (any colour) in 6 Inch Nursery Pot @199",
    "description": "Healthy nursery-grown Bougainvillea (any colour) in 6 Inch Nursery Pot (Bougainvillea spectabilis). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 112,
    "slug": "112-mogra-jasmine-in-8-inch-nursery-bag",
    "category": "flowering",
    "categoryName": "🌸 Flowering Plants",
    "name": "Mogra / Jasmine in 8 Inch Nursery Bag",
    "scientificName": "Jasminum officinale",
    "price": 149,
    "image": "/images/jasmine.jpg",
    "alt": "jasmine plant",
    "bgStyle": "background: #fce4ec",
    "tag": "Climber",
    "badge": "✨ Popular",
    "benefits": [
      "Fragrant",
      "Spiritual"
    ],
    "orderQuery": "Mogra / Jasmine in 8 Inch Nursery Bag @149",
    "description": "Healthy nursery-grown Mogra / Jasmine in 8 Inch Nursery Bag (Jasminum officinale). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 113,
    "slug": "113-motia-jasmine-bushy-in-6-inch-nursery-pot",
    "category": "flowering",
    "categoryName": "🌸 Flowering Plants",
    "name": "Motia / Jasmine (Bushy) in 6 Inch Nursery Pot",
    "scientificName": "Jasminum officinale",
    "price": 199,
    "image": "/images/jasmine1.jpg",
    "alt": "jasmine plant 2",
    "bgStyle": "background: #fce4ec",
    "tag": "Climber",
    "benefits": [
      "Fragrant",
      "Easy Care"
    ],
    "orderQuery": "Motia / Jasmine (Bushy) in 6 Inch Nursery Pot @199",
    "description": "Healthy nursery-grown Motia / Jasmine (Bushy) in 6 Inch Nursery Pot (Jasminum officinale). Carefully selected by Aardhya Green Nursery for optimal vitality, lush foliage, and air purification. Hand-packed and delivered fresh to your doorstep across selected Delhi NCR areas."
  },
  {
    "id": 114,
    "slug": "114-classic-ceramic-planter-8-inch",
    "category": "pots",
    "categoryName": "🏺 Pots & Planters",
    "name": "Classic White Ceramic Planter (8 Inch)",
    "scientificName": "Glazed Ceramic Planter",
    "price": 249,
    "image": "/images/pot1.jpeg",
    "alt": "Classic White Ceramic Planter",
    "bgStyle": "background: #f1f8e9",
    "tag": "Pots",
    "badge": "✨ Popular",
    "benefits": [
      "Drainage Hole Included",
      "Glossy Finish",
      "Ideal for Indoors"
    ],
    "orderQuery": "Classic White Ceramic Planter (8 Inch) @249",
    "description": "Premium quality 8-inch ceramic planter pot from Aardhya Green Nursery in Greater Noida. Designed for excellent root health with built-in drainage. Available with home delivery across selected Delhi NCR areas."
  },
  {
    "id": 115,
    "slug": "115-decorative-textured-garden-pot-10-inch",
    "category": "pots",
    "categoryName": "🏺 Pots & Planters",
    "name": "Decorative Textured Garden Pot (10 Inch)",
    "scientificName": "Heavy Duty UV-Stabilized Pot",
    "price": 199,
    "image": "/images/pot2.jpeg",
    "alt": "Decorative Textured Garden Pot",
    "bgStyle": "background: #f1f8e9",
    "tag": "Pots",
    "badge": "🌱 Essential",
    "benefits": [
      "Weather Resistant",
      "Lightweight & Sturdy",
      "Modern Textured Look"
    ],
    "orderQuery": "Decorative Textured Garden Pot (10 Inch) @199",
    "description": "Durable 10-inch decorative planter pot from Aardhya Green Nursery in Greater Noida. Perfect for balconies, terraces, and living room greenery. Home delivery available across selected Delhi NCR areas."
  },
  {
    "id": 116,
    "slug": "116-terracotta-finish-planter-12-inch",
    "category": "pots",
    "categoryName": "🏺 Pots & Planters",
    "name": "Terracotta Finish Heavy Duty Planter (12 Inch)",
    "scientificName": "Terracotta Finish Nursery Pot",
    "price": 299,
    "image": "/images/pot3.jpeg",
    "alt": "Terracotta Finish Heavy Duty Planter",
    "bgStyle": "background: #f1f8e9",
    "tag": "Pots",
    "badge": "🏺 Top Pick",
    "benefits": [
      "Spacious Root Room",
      "Classic Garden Look",
      "Indoor & Outdoor"
    ],
    "orderQuery": "Terracotta Finish Heavy Duty Planter (12 Inch) @299",
    "description": "Spacious 12-inch terracotta style garden pot from Aardhya Green Nursery in Greater Noida. Ideal for medium to large plants, shrubs, and flowering blooms. Home delivery across selected Delhi NCR areas."
  },
  {
    "id": 117,
    "slug": "117-cocopeat-block-500-gm",
    "category": "soil",
    "categoryName": "🪵 Soil & Potting Mix",
    "name": "Cocopeat Block (500 gm)",
    "scientificName": "Washed Coconut Coir Block",
    "price": 49,
    "image": "/images/soil1.avif",
    "alt": "Cocopeat Block 500 gm",
    "bgStyle": "background: #efebe9",
    "tag": "Soil",
    "badge": "🌱 Essential",
    "benefits": [
      "High Water Retention",
      "Lightweight Medium",
      "Prevents Root Rot"
    ],
    "orderQuery": "Cocopeat Block 500 gm @49",
    "description": "Naturally washed 500g cocopeat block from Aardhya Green Nursery in Greater Noida. Improves soil moisture retention and aeration for home plants. Home delivery across selected Delhi NCR areas."
  },
  {
    "id": 118,
    "slug": "118-large-cocopeat-brick-5kg",
    "category": "soil",
    "categoryName": "🪵 Soil & Potting Mix",
    "name": "Large Cocopeat Brick (5 kg)",
    "scientificName": "High Expansion Coir Brick",
    "price": 349,
    "image": "/images/soil2.avif",
    "alt": "Large Cocopeat Brick 5kg",
    "bgStyle": "background: #efebe9",
    "tag": "Soil",
    "badge": "⭐ Value Pack",
    "benefits": [
      "Expands up to 75 Litres",
      "Low EC & Washed",
      "Retains Nutrients"
    ],
    "orderQuery": "Large Cocopeat Brick 5kg @349",
    "description": "Bulk 5kg cocopeat brick from Aardhya Green Nursery in Greater Noida. Expands to provide premium potting medium for terrace gardens and house plants. Home delivery across selected Delhi NCR areas."
  },
  {
    "id": 119,
    "slug": "119-premium-cocopeat-1kg",
    "category": "soil",
    "categoryName": "🪵 Soil & Potting Mix",
    "name": "Premium Cocopeat (1 kg)",
    "scientificName": "Washed Coconut Coir",
    "price": 99,
    "image": "/images/soil3.avif",
    "alt": "Premium Cocopeat 1kg",
    "bgStyle": "background: #efebe9",
    "tag": "Soil",
    "badge": "🌿 Popular",
    "benefits": [
      "Easy to Rehydrate",
      "Promotes Healthy Roots",
      "Ideal for Seed Starting"
    ],
    "orderQuery": "Premium Cocopeat 1kg @99",
    "description": "Premium 1kg cocopeat from Aardhya Green Nursery in Greater Noida. Perfect for seed germination and making light, breathable potting soil. Home delivery across selected Delhi NCR areas."
  },
  {
    "id": 120,
    "slug": "120-enriched-garden-potting-soil-mix-5kg",
    "category": "soil",
    "categoryName": "🪵 Soil & Potting Mix",
    "name": "Enriched Garden Potting Soil Mix (5 kg)",
    "scientificName": "Ready-to-Use Premium Potting Blend",
    "price": 199,
    "image": "/images/soil.avif",
    "alt": "Enriched Garden Potting Soil Mix",
    "bgStyle": "background: #efebe9",
    "tag": "Soil",
    "badge": "🪴 Ready to Use",
    "benefits": [
      "Pre-Mixed with Compost",
      "Excellent Drainage",
      "Enriched with Micro-nutrients"
    ],
    "orderQuery": "Enriched Garden Potting Soil Mix (5 kg) @199",
    "description": "Carefully prepared ready-to-use potting soil mix by Aardhya Green Nursery in Greater Noida. Contains garden soil, vermicompost, and aeration agents for lush plant growth. Home delivery across selected Delhi NCR areas."
  },
  {
    "id": 121,
    "slug": "121-organic-vermicompost-khad-5kg",
    "category": "fertilizers",
    "categoryName": "🌱 Fertilizers & Manure",
    "name": "Organic Vermicompost Khad (5 kg)",
    "scientificName": "Natural Earthworm Compost",
    "price": 199,
    "image": "/images/soil2.avif",
    "alt": "Organic Vermicompost Khad",
    "bgStyle": "background: #e8f5e9",
    "tag": "Fertilizer",
    "badge": "🌱 Pure Organic",
    "benefits": [
      "Boosts Foliage & Bloom",
      "Safe for All Plants",
      "Enriches Soil Health"
    ],
    "orderQuery": "Organic Vermicompost Khad (5 kg) @199",
    "description": "High-nutrient organic vermicompost from Aardhya Green Nursery in Greater Noida. Feeds plants naturally with essential nitrogen, phosphorus, and micro-nutrients. Home delivery across selected Delhi NCR areas."
  },
  {
    "id": 122,
    "slug": "122-aged-desi-cow-dung-manure-5kg",
    "category": "fertilizers",
    "categoryName": "🌱 Fertilizers & Manure",
    "name": "Aged Desi Cow Dung Manure / Gobar Khad (5 kg)",
    "scientificName": "Well-Composted Cow Manure",
    "price": 180,
    "image": "/images/soil1.avif",
    "alt": "Aged Desi Cow Dung Manure",
    "bgStyle": "background: #e8f5e9",
    "tag": "Fertilizer",
    "badge": "🌿 Traditional",
    "benefits": [
      "Fully Decomposed & Odor-Free",
      "Slow-Release Plant Food",
      "Improves Soil Structure"
    ],
    "orderQuery": "Aged Desi Cow Dung Manure (5 kg) @180",
    "description": "Fully matured, decomposed cow dung manure from Aardhya Green Nursery in Greater Noida. Odor-free and gentle on roots, ideal for flowering and fruit plants. Home delivery across selected Delhi NCR areas."
  },
  {
    "id": 123,
    "slug": "123-pure-organic-neem-cake-powder-1kg",
    "category": "fertilizers",
    "categoryName": "🌱 Fertilizers & Manure",
    "name": "Pure Organic Neem Cake Powder (1 kg)",
    "scientificName": "Cold-Pressed Neem Seed Meal",
    "price": 149,
    "image": "/images/soil3.avif",
    "alt": "Pure Organic Neem Cake Powder",
    "bgStyle": "background: #e8f5e9",
    "tag": "Fertilizer",
    "badge": "🛡️ Natural Pest Shield",
    "benefits": [
      "Prevents Nematodes & Root Pests",
      "Organic Nitrogen Rich",
      "Improves Plant Immunity"
    ],
    "orderQuery": "Pure Organic Neem Cake Powder (1 kg) @149",
    "description": "Pure organic neem khali powder from Aardhya Green Nursery in Greater Noida. Protects root zones from harmful pests and fungus while nourishing soil. Home delivery across selected Delhi NCR areas."
  }
];
