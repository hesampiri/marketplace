import { CarFront, Armchair, Cable } from "lucide-react";
import { ReactNode } from "react";

interface CatProp {
  id: number;
  name: string;
  image: ReactNode;
}

export const Categories: CatProp[] = [
  {
    id: 0,
    name: "vehicle",
    image: <CarFront />,
  },
  {
    id: 1,
    name: "electronics",
    image: <Cable />,
  },
  {
    id: 2,
    name: "furniture",
    image: <Armchair />,
  },
];
