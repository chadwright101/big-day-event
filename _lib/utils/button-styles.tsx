import classNames from "classnames";

export const buttonStyles = (
  color: string,
  cssClasses?: string,
  disabled?: boolean,
  pending?: boolean
) =>
  classNames(
    "flex py-1.5 px-6 justify-center duration-500 border-2 rounded-[8px] font-semibold tracking-[-0.01rem]",
    cssClasses,
    {
      "bg-salmon border-salmon text-white": color === "salmon",
      "desktop:hover:bg-white desktop:hover:text-black":
        (color === "salmon" || color === "green") && !disabled && !pending,
      "bg-green border-green text-white": color === "green",
      "bg-white border-salmon": color === "white",
      "desktop:hover:bg-salmon desktop:hover:text-white":
        color === "white" && !disabled && !pending,
      "opacity-50 pointer-events-none": pending,
    }
  );
