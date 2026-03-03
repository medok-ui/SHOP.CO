export interface IProduct {
  id: number;
  name: string;
  image: string;
  thumbnails: number[];
  rating: number;
  star: number[];
  reviewCount: number;
  price: number;
  originalPrice: number | null;
  discount: number | null;
  colors: string[];
  sizes: string[];
  description: string;
  isTopSelling: boolean;
  isNew: boolean;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
}
