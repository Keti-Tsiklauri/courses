"use client";

import SignUpContent from "../components/modals/sign-up/SignUpContent";
import { SignUpProvider } from "../context/SignUpContext";
export default function SignUp() {
  return (
    <SignUpProvider>
      <SignUpContent />
    </SignUpProvider>
  );
}
