import classNames from "classnames";

interface GalleryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  cssClasses?: string;
  active: boolean;
}

const ButtonGallery = ({
  children,
  onClick,
  cssClasses,
  active,
}: GalleryButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        "py-1.5 px-5 flex text-[1.1rem] bg-salmon text-center font-notoSerif justify-center rounded-[8px] font-bold tracking-[-0.01rem] drop-shadow-default ease-in-out duration-300",
        {
          "text-white": !active,
          "opacity-50 desktop:hover:opacity-75": active,
        },
        cssClasses
      )}
      style={{ fontVariant: "small-caps" }}
    >
      {children}
    </button>
  );
};

export default ButtonGallery;
