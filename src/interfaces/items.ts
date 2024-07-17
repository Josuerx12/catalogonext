export interface IItem {
  name: string;
  category: string;
  stock: number;
  unit: string;
  photos: Photo[];
  value: number;
  description: string;
  _id: string;
  updatedAt: string;
  createdAt: string;
}

export interface Photo {
  photo: string;
  _id: string;
}
