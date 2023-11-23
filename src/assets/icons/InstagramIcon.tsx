import { FC } from "react";

interface IInstagramIconProps {
  className?: string;
  width?: string;
  height?: string;
}

export const InstagramIcon: FC<IInstagramIconProps> = ({
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
      viewBox="0 0 19 19"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.168 0.267578H5.16797C2.69319 0.267578 0.667969 2.2919 0.667969 4.76758V13.7676C0.667969 16.2424 2.69319 18.2676 5.16797 18.2676H14.168C16.6427 18.2676 18.668 16.2424 18.668 13.7676V4.76758C18.668 2.2919 16.6427 0.267578 14.168 0.267578ZM9.66797 13.0174C7.59662 13.0174 5.91789 11.338 5.91789 9.26758C5.91789 7.19623 7.59662 5.5175 9.66797 5.5175C11.7384 5.5175 13.418 7.19623 13.418 9.26758C13.418 11.338 11.7384 13.0174 9.66797 13.0174ZM13.418 4.3925C13.418 5.01373 13.9211 5.5175 14.543 5.5175C15.1649 5.5175 15.668 5.01373 15.668 4.3925C15.668 3.77128 15.1649 3.2675 14.543 3.2675C13.9211 3.2675 13.418 3.77128 13.418 4.3925Z"
        fill="white"
      />
    </svg>
  );
};
