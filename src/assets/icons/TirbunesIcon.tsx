import { FC } from "react";

interface ITirBunesIconProps {
  className?: string;
  width?: string;
  height?: string;
}

export const TirBunesIcon: FC<ITirBunesIconProps> = ({
  className = "",
  width = "28",
  height = "26",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M23.5 16H20V15H21C22.103 15 23 14.103 23 13C23 11.897 22.103 11 21 11H20V10H21C22.103 10 23 9.103 23 8C23 6.897 22.103 6 21 6H3C1.898 6 1 6.897 1 8C1 9.103 1.898 10 3 10H4V11H3C1.898 11 1 11.897 1 13C1 14.103 1.898 15 3 15H4V16H0.5C0.224 16 0 16.224 0 16.5V19.5C0 19.776 0.224 20 0.5 20H2V23.5C2 23.776 2.224 24 2.5 24C2.776 24 3 23.776 3 23.5V23H21V23.5C21 23.776 21.224 24 21.5 24C21.776 24 22 23.776 22 23.5V20H23.5C23.776 20 24 19.776 24 19.5V16.5C24 16.224 23.776 16 23.5 16ZM2 8C2 7.449 2.448 7 3 7H21C21.552 7 22 7.449 22 8C22 8.551 21.552 9 21 9H3C2.448 9 2 8.551 2 8ZM5 10H19V11H5V10ZM2 13C2 12.449 2.448 12 3 12H21C21.552 12 22 12.449 22 13C22 13.551 21.552 14 21 14H3C2.448 14 2 13.551 2 13ZM5 15H19V16H5V15ZM21 22H3V20H21V22ZM23 19H1V17H23V19Z"
        fill="#01001F"
      />
    </svg>
  );
};
