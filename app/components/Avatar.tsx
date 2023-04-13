'use client';

import Image from "next/image";
import { SafeUser } from "../types";

interface AvaterProps {
  src: string | null | undefined
}

const Avatar: React.FC<AvaterProps> = ({ src }) => {
  return (
    <Image 
      className="rounded-full"
      height={30}
      width={30}
      src={ src ? src : '/images/placeholder.jpg' }
      alt="Avatar"
    />
  )
}

export default Avatar