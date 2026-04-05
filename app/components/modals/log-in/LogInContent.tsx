import Button from "../shared/Button";
import Input from "../shared/Input";
import ModalHeader from "../shared/ModalHeader";
import PasswordInput from "../shared/PasswordInput";
import RegistrationFooter from "../shared/RegistrationFooter";
import Header from "../sign-up/Header";

export default function LogInContent() {
  return (
    <div className="absolute shadow-sm w-[460px] left-[725px] top-[301.5px] bg-white rounded-[12px] flex flex-col justify-start items-center pt-5 pb-10 gap-[12px] isolate">
      <ModalHeader />
      <Header
        title="Welcome Back"
        subtitle="Log in to continue your learning"
      />
      <div className="flex flex-col gap-4">
        {/* email */}
        <Input label="Email" placeholder="you@example.com" type="email" />
        {/* password */}
        <PasswordInput label="Password" placeholder="Password" />
      </div>
      <Button text="Next" width="360px" height="47px" />
      <RegistrationFooter
        normalText="Don’t have an account?"
        linkText="Sign Up"
      />
    </div>
  );
}
