import Link from 'next/link';
import React from 'react'
import { twMerge } from 'tailwind-merge';

interface Props {
  href: string;
  label: string;
  className?: string;
}

function LinkItem({ href, label, className }: Props) {
  const defaultClass = "hover:text-primary cursor-pointer hover:scale-110 transition-all ease-in-out";
  return (
    <li className={twMerge(defaultClass, className)}>
      <Link href={href}>
        {label}
      </Link>
    </li>
  )
}

export default LinkItem
