import { FC } from "react";

interface ILocationIconProps {
  className?: string;
  width?: string;
  height?: string;
}

export const LocationIcon: FC<ILocationIconProps> = ({className = "", width = "24", height = '24'}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"

      viewBox="0 0 18 19"
      fill="none"
    >
      <g clip-path="url(#clip0_237_269)">
        <path
          d="M9 10.0176C10.2426 10.0176 11.25 9.01022 11.25 7.76758C11.25 6.52494 10.2426 5.51758 9 5.51758C7.75736 5.51758 6.75 6.52494 6.75 7.76758C6.75 9.01022 7.75736 10.0176 9 10.0176Z"
          stroke="#01001F"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 1.76758C7.4087 1.76758 5.88258 2.39972 4.75736 3.52494C3.63214 4.65016 3 6.17628 3 7.76758C3 9.18658 3.3015 10.1151 4.125 11.1426L9 16.7676L13.875 11.1426C14.6985 10.1151 15 9.18658 15 7.76758C15 6.17628 14.3679 4.65016 13.2426 3.52494C12.1174 2.39972 10.5913 1.76758 9 1.76758V1.76758Z"
          stroke="#01001F"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_237_269">
          <rect y="0.267578" width="18" height="18" rx="6" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
