import * as React from 'react';
import { SVGProps } from 'react';

function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={2}
        d="M5 12h15M5 17h15M5 7h15"
      />
    </svg>
  );
}
export default MenuIcon;
