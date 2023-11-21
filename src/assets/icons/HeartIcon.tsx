import { FC } from "react";

interface IHeartIconProps {
  className?: string;
  width?: string;
  height?: string;
}

export const HeartIcon: FC<IHeartIconProps> = ({
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
      <g filter="url(#filter0_d_314_1617)">
        <path
          d="M9.5 4.5C6.4625 4.5 4 6.9625 4 10C4 15.5 10.5 20.5 14 21.663C17.5 20.5 24 15.5 24 10C24 6.9625 21.5375 4.5 18.5 4.5C16.64 4.5 14.995 5.4235 14 6.837C13.4928 6.1146 12.8191 5.52505 12.0358 5.11824C11.2525 4.71144 10.3826 4.49938 9.5 4.5Z"
          stroke="#1C1C36"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_314_1617"
          x="0.399902"
          y="0.899994"
          width="27.2002"
          height="24.363"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_314_1617"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_314_1617"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
