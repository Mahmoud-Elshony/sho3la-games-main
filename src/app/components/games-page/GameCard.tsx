import Image from "next/image";
import Link from "next/link";
import React from "react";

type PropsGameCardInfo = {
  src: string;
  title: string;
  alt?: string;
  width?: number;
  height?: number;
  link: string;
};

const DEFAULT_IMAGE_WIDTH = 500;
const DEFAULT_IMAGE_HEIGHT = 500;

export default function GameCard({
  src,
  title,
  alt = "game image",
  width = DEFAULT_IMAGE_WIDTH,
  height = DEFAULT_IMAGE_HEIGHT,
  link,
}: PropsGameCardInfo) {
  return (
    <Link href={link}>
      <div className="relative m-1 overflow-hidden rounded-lg w-100 group">
        <div className="relative overflow-hidden transition-all transform duration-700 group-hover:scale-[103%] group-hover:brightness-75">
          <Image
            className="w-full object-cover"
            src={src}
            width={width}
            height={height}
            alt={alt}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-5/6 bg-gradient-to-t from-gray-700  to-transparent text-white flex items-end p-4">
          <p className="font-semibold">{title}</p>
        </div>
      </div>
    </Link>
  );
}