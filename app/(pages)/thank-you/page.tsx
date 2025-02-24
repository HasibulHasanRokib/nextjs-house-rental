import React, { Suspense } from "react";
import ThankYou from "./ThankYou";
import { auth } from "@/auth";
import { notFound, redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Generated by create next app",
};

const Page = async () => {
  const session = await auth();
  if (!session || !session.user) {
    return redirect("/auth/login");
  }

  return (
    <Suspense>
      <ThankYou />
    </Suspense>
  );
};

export default Page;
