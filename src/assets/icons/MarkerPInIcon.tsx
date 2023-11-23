import { FC } from "react";

interface IMarkerPinIconProps {
  className?: string;
  width?: string;
  height?: string;
}

export const MarkerPinIcon: FC<IMarkerPinIconProps> = ({
  className = "",
  width = "24",
  height = "24",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        d="M12.5 13.5C14.1569 13.5 15.5 12.1569 15.5 10.5C15.5 8.84315 14.1569 7.5 12.5 7.5C10.8431 7.5 9.5 8.84315 9.5 10.5C9.5 12.1569 10.8431 13.5 12.5 13.5Z"
        stroke="#01001F"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 22.5C16.5 18.5 20.5 14.9183 20.5 10.5C20.5 6.08172 16.9183 2.5 12.5 2.5C8.08172 2.5 4.5 6.08172 4.5 10.5C4.5 14.9183 8.5 18.5 12.5 22.5Z"
        stroke="#01001F"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
