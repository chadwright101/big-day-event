import classNames from "classnames";

export const buttonStyles = (
  color: string,
  cssClasses?: string,
  disabled?: boolean,
  pending?: boolean
) =>
  classNames(
    "flex text-[1.1rem] text-center font-notoSerif py-1.5 px-6 justify-center duration-500 border-2 rounded-[8px] font-bold tracking-[-0.01rem] drop-shadow-default",
    cssClasses,
    {
      "bg-salmon border-salmon text-white": color === "salmon",
      "desktop:hover:bg-transparent desktop:hover:text-black":
        color !== "white" && !disabled && !pending,
      "bg-green border-green text-white": color === "green",
      "bg-white border-salmon": color === "white",
      "desktop:hover:bg-salmon desktop:hover:text-white":
        color === "white" && !disabled && !pending,
      "opacity-50 desktop:cursor-not-allowed desktop:hover:none": pending,
    }
  );
