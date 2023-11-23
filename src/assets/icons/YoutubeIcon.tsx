import { FC } from "react";

interface IYoutubeIconProps {
  className?: string;
  width?: string;
  height?: string;
}

export const YoutubeIcon: FC<IYoutubeIconProps> = ({
  className = "",
  width = "21",
  height = "17",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 23 17"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.6353 0.999161C21.597 1.12446 22.5162 2.05977 22.6331 3.03517C23.0472 6.60989 23.0472 10.0763 22.6331 13.6499C22.5162 14.6253 21.597 15.5617 20.6353 15.6859C14.7709 16.4146 8.84018 16.4146 2.97745 15.6859C2.01486 15.5614 1.0957 14.6253 0.978752 13.6499C0.5647 10.076 0.5647 6.60989 0.978752 3.03517C1.0957 2.05977 2.01486 1.12418 2.97745 0.999161C8.84018 0.270462 14.7706 0.270462 20.6353 0.999161ZM9.94952 4.6304V12.0558L15.5185 8.34323L9.94952 4.6304Z"
        fill="white"
      />
    </svg>
  );
};
