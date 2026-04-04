"use client";

import Header from "./Header";
import ProgressBar from "./ProgressBar";
import RegistrationFooter from "./RegistrationFooter";
import NextButton from "./NextButton";
import StepInput from "./Steps";
import ModalHeader from "./ModalHeader";

import { SignUpProvider } from "../../context/SignUpContext";
export default function RegistrationModal() {
  return (
    <SignUpProvider>
      <div className="absolute w-[460px] left-[725px] top-[301.5px] bg-white rounded-[12px] flex flex-col justify-center items-center p-[50px] gap-[12px] isolate">
        <ModalHeader />
        <Header />
        <ProgressBar />
        <StepInput />
        <NextButton />
        <RegistrationFooter />
      </div>
    </SignUpProvider>
  );
}
