import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sign Up",
  description: "Generated by create next app",
};
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-5xl">
        <SignUpForm />
      </div>
    </div>
  );
}
