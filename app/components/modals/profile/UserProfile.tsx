"use client";

import Image from "next/image";
import React from "react";

interface AvatarProps {
  username: string;
  statusText?: string; // e.g., "Profile is Complete"
  avatarSrc?: string; // user avatar
  width?: string; // width of the container
}

export default function UserProfile({
  username,
  statusText,
  avatarSrc,
  width = "360px",
}: AvatarProps) {
  return (
    <div className="flex flex-col gap-2" style={{ width }}>
      {/* Avatar Row */}
      <div className="flex items-center gap-3">
        <div className="relative w-14 h-14 rounded-full bg-white flex items-center justify-center">
          {avatarSrc ? (
            <Image
              src={avatarSrc}
              alt="User Avatar"
              width={56}
              height={56}
              className="rounded-full"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-gray-200" />
          )}
          {/* Optional status indicator */}
          {statusText && (
            <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white" />
          )}
        </div>

        {/* Username and status */}
        <div className="flex flex-col">
          <span className="font-inter font-semibold text-[20px] leading-[24px] text-[#0A0A0A]">
            {username}
          </span>
          {statusText && (
            <span className="font-inter font-normal text-[10px] leading-[12px] text-green-500">
              {statusText}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
