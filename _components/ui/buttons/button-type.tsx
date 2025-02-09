import { useFormStatus } from "react-dom";
import classNames from "classnames";
import { ButtonProps } from "@/_types/button-types";
import { buttonStyles } from "@/_lib/utils/button-styles";

const ButtonType = ({
  children,
  onClick,
  cssClasses,
  color = "white",
  type = "submit",
  disabled = false,
}: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        buttonStyles(color, cssClasses, disabled, pending),
        {
          "opacity-50 desktop:cursor-not-allowed desktop:hover:none": pending,
        }
      )}
      disabled={disabled || pending}
    >
      {pending ? (
        <div className="py-[3px]">
          <div className="spinner-white"></div>
        </div>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export default ButtonType;
