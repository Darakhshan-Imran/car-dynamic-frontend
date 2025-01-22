import {Heart} from 'lucide-react';
import RatingStar from "../components/ratingstar";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

  
  interface CarDetails {
    name: string;
    description: string;
    rating: number;
    reviews: string;
    carType: string;
    steering: string;
    capacity: string;
    gasoline: string;
    price: number;
    discountedPrice?: number;
  }
  
  interface CarCardProps {
    car: CarDetails;
  }
  
  const CarCard: React.FC<CarCardProps> = ({ car }) => {
    return (
      <div className="w-full lg:w-1/2 mt-9">
        <Card className="h-full flex justify-around flex-col border-none bg-white shadow-lg">
          <CardHeader>
            <CardTitle>
              <div className="text-2xl lg:text-4xl font-bold text-balance tracking-[0.010rem] flex justify-between items-center">
                {car.name}
                <span className="text-lg cursor-pointer hover:fill-red-600">
                  <Heart />
                </span>
              </div>
            </CardTitle>
            <CardDescription>
              <div className="flex items-center gap-1 mt-1">
                <RatingStar starcount={car.rating} />
                <span className="text-sm text-muted-foreground">
                  {car.reviews} Reviews
                </span>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base lg:text-lg font-thin">{car.description}</p>
            <div className="flex flex-col sm:flex-row w-full mt-4">
              <div className="flex flex-col w-full sm:w-1/2 mb-2 sm:mb-0">
                <div className="flex justify-between items-center">
                  <p className="text-base lg:text-lg text-gray-600 font-medium">
                    Car Type
                  </p>
                  <p className="text-base lg:text-lg text-gray-700 font-semibold">
                    {car.carType}
                  </p>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-base lg:text-lg text-gray-600 font-medium">
                    Steering
                  </p>
                  <p className="text-base lg:text-lg text-gray-700 font-semibold">
                    {car.steering}
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full sm:w-1/2">
                <div className="flex justify-between items-end">
                  <p className="text-base lg:text-lg text-gray-600 font-medium">
                    Capacity
                  </p>
                  <p className="text-base lg:text-lg text-gray-700 font-semibold">
                    {car.capacity}
                  </p>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-base lg:text-lg text-gray-600 font-medium">
                    Gasoline
                  </p>
                  <p className="text-base lg:text-lg text-gray-700 font-semibold">
                    {car.gasoline}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col gap-1">
              <p className="text-xl lg:text-2xl font-semibold mb-2 sm:mb-0">
                {car.price.toFixed(2)}/
                <span className="text-sm text-[#90A3BF] font-medium">day</span>
              </p>
              {car.discountedPrice && (
                <del className="text-[#90A3BF] text-sm font-medium">
                  {car.discountedPrice.toFixed(2)}
                </del>
              )}
            </div>
            <button className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white text-base rounded-lg hover:bg-blue-600 transition-colors">
              Rent Now
            </button>
          </CardFooter>
        </Card>
      </div>
    );
  };
  
  export default CarCard;
  
     