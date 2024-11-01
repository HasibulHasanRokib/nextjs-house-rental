import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchCheck } from "lucide-react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "./ui/button";
import db from "@/lib/db";

async function filterProperty(formData: FormData) {
  "use server";
  console.log(formData);
}

const FilterProperty = async () => {
  const locations = (await db.property
    .findMany({
      select: { city: true },
      distinct: ["city"],
    })
    .then((cites) =>
      cites.map(({ city }) => city).filter(Boolean)
    )) as string[];

  return (
    <aside>
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-2">
            <SearchCheck className="text-primary" />
            <p className="font-normal">Advance search</p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={filterProperty} className="my-3 space-y-3">
            {/* Search */}
            <Input name="q" id="q" placeholder="Search here..." />

            {/* Property status */}
            <Select name="status">
              <SelectTrigger>
                <SelectValue placeholder="Property status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup id="status">
                  <SelectLabel>Property status</SelectLabel>
                  <SelectItem value="sale">For Sale</SelectItem>
                  <SelectItem value="rent">For Rent</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/*  Property type */}
            <Select name="type">
              <SelectTrigger>
                <SelectValue placeholder="Property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup id="type">
                  <SelectLabel>Property type</SelectLabel>
                  <SelectItem value="houses">Houses</SelectItem>
                  <SelectItem value="apartments">Apartments</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* City*/}
            <Select name="city">
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup id="city">
                  <SelectLabel>Location</SelectLabel>
                  {locations.map((item) => (
                    <SelectItem className="capitalize" value={item} key={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* Bedrooms */}
            <Select name="bedrooms">
              <SelectTrigger>
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup id="bedrooms">
                  <SelectLabel>Bedrooms</SelectLabel>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <SelectItem key={item} value={item.toString()}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* Bathrooms*/}
            <Select name="bathrooms">
              <SelectTrigger>
                <SelectValue placeholder="Bathrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup id="bathrooms">
                  <SelectLabel>Bathrooms</SelectLabel>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <SelectItem key={item} value={item.toString()}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* More options */}

            <Button type="submit">Search property</Button>
          </form>
        </CardContent>
      </Card>
    </aside>
  );
};

export default FilterProperty;
