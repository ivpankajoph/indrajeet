export interface Plant {
  _id?: string;
  id?: number | string;
  slug: string;
  category: string;
  categoryName: string;
  name: string;
  scientificName?: string;
  price: number;
  image: string;
  alt?: string;
  bgStyle?: string;
  tag?: string;
  badge?: string;
  benefits?: string[];
  orderQuery?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

// Dummy data has been cleared. Plants are loaded dynamically from the MongoDB API backend.
export const plants: Plant[] = [];
