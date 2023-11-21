import { FC } from "react";

interface IGeoPozProps {
  className?: string;
  width?: string;
  height?: string;
}

export const GeoPoz: FC<IGeoPozProps> = ({
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M120 6C120 2.68629 117.314 0 114 0H6C2.68629 0 0 2.68629 0 6V114C0 117.314 2.68629 120 6 120H114C117.314 120 120 117.314 120 114V6Z"
        fill="url(#pattern0)"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        ></pattern>
      </defs>
    </svg>
  );
};
