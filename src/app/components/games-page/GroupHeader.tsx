import React from "react";

type Props = {
  gameName: string;
};

export default function GroupHeader({ gameName }: Props) {
  return (
    <div className="flex items-center justify-center my-4 px-2">
      <hr className="flex-1 h-[2px] bg-gray-300" />
      <span className="px-4 font-semibold text-gray-700">{gameName}</span>
      <hr className="flex-1 h-[2px] bg-gray-300" />
    </div>
  );
}