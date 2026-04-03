import Image from "next/image";
export default function ModalHeader() {
  return (
    <button className="absolute w-[24px] h-[24px] left-[421px] top-[20.5px] flex-none order-0 flex-grow-0 z-0">
      <Image
        src="/images/close-icon.svg"
        alt="Close"
        width={14}
        height={14}
        className="w-full h-full cursor-pointer"
      />
    </button>
  );
}
