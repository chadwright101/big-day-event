export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  cssClasses?: string;
  color?: "salmon" | "white" | "green";
  href?: string;
  disabled?: boolean;
  ariaLabel?: string;
  type?: "submit" | "reset" | "button";
}
