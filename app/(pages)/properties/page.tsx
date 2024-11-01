import FilterProperty from "@/components/filterProperty";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import PropertyCardTwo from "@/components/propertyListItem";
import PropertyResult from "@/components/propertyResult";
import { Card } from "@/components/ui/card";
import db from "@/lib/db";
import { LayoutGrid } from "lucide-react";
import Link from "next/link";

export default async function Properties() {
  return (
    <>
      <header className="flex h-52 flex-col space-y-3 justify-center items-center">
        <h3 className="text-4xl font-bold">Properties Listing</h3>
        <p className="text-muted-foreground">Find your favorite properties</p>
      </header>

      <MaxWidthWrapper>
        <section className=" grid grid-cols-3 gap-2">
          <div className="grid col-span-2 space-y-2">
            <Card className="flex gap-3 items-center p-3">
              <LayoutGrid className="text-primary" />
              <p className="text-lg">Properties List</p>
            </Card>
            <div className="flex flex-col space-y-3">
              <PropertyResult />
            </div>
          </div>
          <FilterProperty />
        </section>
      </MaxWidthWrapper>
    </>
  );
}
