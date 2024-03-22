export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
}

export interface CounterItems<T> {
  item: T;
  count: number;
}

export interface OptionsSelect {
  id: number;
  name: string;
  value: string;
}

enum Category {
  Electronics = 'electronics',
  Jewelery = 'jewelery',
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

interface Rating {
  rate: number;
  count: number;
}
