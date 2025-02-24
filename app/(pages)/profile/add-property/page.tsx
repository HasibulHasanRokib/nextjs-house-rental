import { auth } from "@/auth";
import AddPropertyForm from "@/components/property/AddPropertyForm";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { notFound } from "next/navigation";
import { Metadata } from "next";
import db from "@/lib/db";

export const metadata: Metadata = {
  title: "Add Property",
  description: "Generated by create next app",
};
export default async function Page() {
  const session = await auth();

  if (session?.user.role !== "owner") return notFound();

  const user = await db.user.findFirst({
    where: {
      id: session.user.id,
    },
    select: {
      username: true,
      email: true,
      phoneNo: true,
    },
  });
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl">Add your Property</CardTitle>
        <CardDescription>
          This is how others will see you on the site.
        </CardDescription>
      </CardHeader>
      <CardContent>{user && <AddPropertyForm user={user} />}</CardContent>
    </>
  );
}
