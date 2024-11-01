import db from "@/lib/db";
import PropertyListItem from "./propertyListItem";
import Link from "next/link";

export default async function PropertyResult() {
  const properties = await db.property.findMany({
    select: {
      id: true,
      propertyTitle: true,
      bathrooms: true,
      bedrooms: true,
      imagesUrl: true,
      address: true,
      city: true,
      state: true,
      area: true,
      price: true,
      slug: true,
      createdAt: true,
    },
  });
  return (
    <>
      {properties.map((property) => {
        return (
          <Link href={`/properties/${property.slug}`} key={property.id}>
            <PropertyListItem property={property} />
          </Link>
        );
      })}
    </>
  );
}
