"use client";

import { useContext } from "react";
import { SignUpContext } from "@/app/context/SignUpContext";

import Input from "../shared/Input";
import PasswordInput from "../shared/PasswordInput";
import AvatarUpload from "../shared/AvatarUpload";

function StepOne() {
  return <Input label="Email*" placeholder="you@example.com" type="email" />;
}

function StepTwo() {
  return (
    <div className="flex flex-col gap-[24px]">
      <PasswordInput label="Password*" placeholder="Password" />
      <PasswordInput
        label="Confirm Password*"
        placeholder="Repeat your password"
      />
    </div>
  );
}

function StepThree() {
  return (
    <div className="flex flex-col gap-[24px]">
      <Input label="UserName*" placeholder="Username" type="text" />
      <AvatarUpload />
    </div>
  );
}

export default function Steps() {
  const context = useContext(SignUpContext);

  if (!context) {
    throw new Error("Steps must be used within SignUpProvider");
  }

  type Step = 1 | 2 | 3;

  const { step } = context as { step: Step };
  const stepsMap: Record<number, React.ReactNode> = {
    1: <StepOne />,
    2: <StepTwo />,
    3: <StepThree />,
  };

  return <div className="w-[360px]">{stepsMap[step] || null}</div>;
}
