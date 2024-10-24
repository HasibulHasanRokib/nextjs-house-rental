import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Property1 from "@/public/images/properties-1.jpg";
import { CalendarDays, MapPin } from "lucide-react";
import { FaBath, FaBed } from "react-icons/fa";
import { BsBoundingBoxCircles } from "react-icons/bs";

const PropertyCard = () => {
  return (
    <Card>
      <CardHeader>
        <Image className="rounded-md" src={Property1} alt="property" />
      </CardHeader>
      <CardContent className="space-y-5">
        <CardTitle className="space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-xl text-gray-800">
              Big Head House
            </h2>
            <p className="text-primary font-normal">BDT 500 / month</p>
          </div>
          <p className="flex items-center gap-1 text-muted-foreground font-normal">
            <MapPin className="text-primary" />
            123 Kathal St. Tampa City
          </p>
        </CardTitle>
        <ul className="flex gap-6">
          <li className="flex items-center gap-2">
            <BsBoundingBoxCircles className="text-primary" />
            <p className="text-sm"> 4200 sq ft</p>
          </li>
          <li className="flex items-center gap-2">
            <FaBed className="text-primary" />
            <p className="text-sm"> 3 Beds</p>
          </li>
          <li className="flex items-center gap-2">
            <FaBath className="text-primary" />
            <p className="text-sm"> 2 Baths</p>
          </li>
        </ul>
      </CardContent>

      <CardFooter className="border ">
        <div className="flex items-center gap-1.5 pt-4">
          <CalendarDays className="text-primary " />
          <p className="text-muted-foreground text-sm">5 Days ago</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
