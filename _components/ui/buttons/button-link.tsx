import { buttonStyles } from "@/_lib/utils/button-styles";
import { ButtonProps } from "@/_types/button-types";
import Link from "next/link";

const ButtonLink = ({
  children,
  onClick,
  cssClasses,
  color = "salmon",
  href = "#",
  disabled,
  ariaLabel,
}: ButtonProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={buttonStyles(color, cssClasses, disabled)}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
