import UserProfile from "../components/modals/profile/UserProfile";
import AvatarUpload from "../components/modals/shared/AvatarUpload";
import Button from "../components/modals/shared/Button";
import Input from "../components/modals/shared/Input";
import ModalHeader from "../components/modals/shared/ModalHeader";
import Header from "../components/modals/sign-up/Header";

export default function Profile() {
  return (
    <div className="absolute shadow-sm w-[460px] left-[725px] top-[301.5px] bg-white rounded-[12px] flex flex-col justify-start items-center pt-5 pb-10 gap-[12px] isolate">
      <ModalHeader />
      <div className="flex flex-col gap-6 pb-2">
        <Header title="Profile" />
        <UserProfile
          username="John Doe"
          statusText="Profile is Complete"
          avatarSrc="/images/user-avatar.svg"
          width="292px"
        />
      </div>
      {/* email */}
      <Input
        label="Full Name"
        placeholder="Username"
        type="text"
        iconSrc="/images/pen.svg"
        iconAlt="pen"
      />
      {/* email */}
      <Input
        label="Email"
        placeholder="you@example.com"
        type="email"
        iconAlt="checkmark"
        iconSrc="/images/checkmark.svg"
      />
      <div className="flex flex-row justify-between w-[360px]">
        {/* mobile number */}
        <Input
          label="Mobile number"
          placeholder="+995 579 71 33 40"
          type="mobile"
          iconAlt="checkmark"
          iconSrc="/images/checkmark.svg"
          width="270px"
        />
        {/* age  */}
        <Input
          label="Age"
          placeholder="29"
          type="mobile"
          iconAlt="checkmark"
          iconSrc="/images/checkmark.svg"
          width="80px"
        />
      </div>
      <AvatarUpload />
      <Button text="Update Profile" width="360px" height="47px" />
    </div>
  );
}
