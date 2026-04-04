"use client";

import RegistrationModal from "../components/registration/RegistrationModal";
import { SignUpProvider } from "../context/SignUpContext";
export default function SignUp() {
  return (
    <SignUpProvider>
      <RegistrationModal />
    </SignUpProvider>
  );
}
