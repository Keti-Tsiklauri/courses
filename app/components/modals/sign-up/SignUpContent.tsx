"use client";

import Header from "./Header";
import ProgressBar from "./ProgressBar";
import RegistrationFooter from "../shared/RegistrationFooter";

import StepInput from "./Steps";
import ModalHeader from "../shared/ModalHeader";
import { useContext } from "react";
import { SignUpContext } from "@/app/context/SignUpContext";
import Button from "../shared/Button";
export default function SignUpContent() {
  const context = useContext(SignUpContext);

  if (!context) {
    throw new Error("Steps must be used within SignUpProvider");
  }
  const { step, setStep } = context;

  return (
    <div className="absolute w-[460px] left-[725px] top-[301.5px] bg-white rounded-[12px] flex flex-col justify-start items-center pt-5 pb-10 gap-[12px] isolate">
      <ModalHeader />
      <Header title="Create Account" subtitle="Join and start learning today" />
      <ProgressBar />
      <StepInput />
      <Button text="Next" onClick={() => setStep(step + 1)} />
      <RegistrationFooter
        normalText="Already have an account? "
        linkText="Log In"
      />
    </div>
  );
}
