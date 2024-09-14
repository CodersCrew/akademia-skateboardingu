'use client';

import { useState } from 'react';

type DropdownProps = {
  border: string;
  bg: string;
  primaryColor: string;
  text: string;
  title: string;
};

export function Dropdown({
  border,
  bg,
  primaryColor,
  text,
  title
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(open => !open);

  return (
    <div className="relative">
      <button
        onClick={toggle}
        className={`flex w-full items-center justify-between border px-5 py-1 font-poetsen-one transition-all duration-100 ${border} ${bg} ${open ? '' : 'delay-150'} ${open ? 'rounded-t-[20px]' : 'rounded-[20px]'}`}
        style={{ color: primaryColor }}
      >
        <p className="text-base">{title}</p>
        <span
          className="relative bottom-px text-4xl text-transparent"
          style={{ WebkitTextStroke: `3px ${primaryColor}` }}
        >
          {open ? '-' : '+'}
        </span>
      </button>
      <div
        className={`overflow-hidden rounded-b-[20px] text-white transition-all ${border} ${open ? 'max-h-[150px] border px-4 py-3 delay-100' : 'max-h-0'}`}
      >
        {text}
      </div>
    </div>
  );
}
