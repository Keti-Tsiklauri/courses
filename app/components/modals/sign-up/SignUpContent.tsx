"use client";

import Header from "./Header";
import ProgressBar from "./ProgressBar";
import RegistrationFooter from "../shared/RegistrationFooter";

import ModalHeader from "../shared/ModalHeader";
import { useContext } from "react";
import { SignUpContext } from "@/app/context/SignUpContext";
import Button from "../shared/Button";
import Steps from "./Steps";
export default function SignUpContent() {
  const context = useContext(SignUpContext);

  if (!context) {
    throw new Error("Steps must be used within SignUpProvider");
  }
  const { step, setStep } = context;

  return (
    <div className="absolute shadow-sm w-[460px] left-[725px] top-[301.5px] bg-white rounded-[12px] flex flex-col justify-start items-center pt-5 pb-10 gap-[12px] isolate">
      <ModalHeader showBack={true} />
      <Header title="Create Account" subtitle="Join and start learning today" />
      <ProgressBar />
      <Steps />
      <Button
        text="Next"
        onClick={() => setStep(step + 1)}
        width="360px"
        height="47px"
      />
      <RegistrationFooter
        normalText="Already have an account? "
        linkText="Log In"
      />
    </div>
  );
}
