import { FC } from "react";

interface IChroomIconProps {
  className?: string;
  width?: string;
  height?: string;
}

export const ChroomIcon: FC<IChroomIconProps> = ({
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
      viewBox="0 0 24 25"
      fill="none"
    >
      <g clip-path="url(#clip0_314_1747)">
        <path
          d="M23.0299 16.553L12.3649 11.22C12.4309 11.037 12.5439 10.871 12.6669 10.818C13.8879 10.299 14.8069 8.751 14.8069 8C14.8069 6.346 13.4609 5 11.8069 5C10.1529 5 8.80693 6.346 8.80693 8C8.80693 8.276 9.03093 8.5 9.30693 8.5C9.58293 8.5 9.80693 8.276 9.80693 8C9.80693 6.898 10.7049 6 11.8069 6C12.9099 6 13.8069 6.898 13.8069 8C13.8069 8.302 13.1719 9.518 12.2769 9.898C11.7619 10.116 11.4529 10.66 11.3529 11.168L0.520932 16.59C0.0679319 16.905 -0.111068 17.474 0.0669319 18.038C0.246932 18.613 0.744932 19 1.30693 19H22.3069C22.8679 19 23.3659 18.613 23.5459 18.039C23.7229 17.475 23.5449 16.905 23.0299 16.553ZM22.5919 17.739C22.5619 17.836 22.4669 18 22.3069 18H1.30693C1.14593 18 1.05193 17.836 1.02193 17.739C1.00393 17.685 0.959932 17.503 1.03093 17.447L11.8069 12.058L22.5209 17.41C22.6529 17.503 22.6079 17.685 22.5919 17.739Z"
          fill="#01001F"
        />
      </g>
      <defs>
        <clipPath id="clip0_314_1747">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
