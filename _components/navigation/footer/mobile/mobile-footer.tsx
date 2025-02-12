import SocialIcons from "@/_lib/utils/social-icons";
import Image from "next/image";
import Link from "next/link";

export function MobileFooter() {
  return (
    <div className="flex flex-col gap-10 items-center px-7 py-10 desktop:hidden">
      <SocialIcons />
      <Image
        src="/big-day-event-logo.png"
        alt="Big Day Event Logo"
        width={200}
        height={100}
        className="w-[160px] h-auto"
      />
      <div className="grid gap-5 place-items-center">
        <div className="text-center">
          <p className="text-[14px] tracking-[-0.0075rem]">
            Designed & developed by
          </p>
          <Link
            href="https://thewrightdesigns.co.za"
            aria-label="The Wright Designs"
            className="text-[14px] tracking-[-0.0075rem] p-2 -m-2 text-linkBlue font-light"
            target="_blank"
          >
            The Wright Designs
          </Link>
        </div>
        <hr className="text-black/25 w-[70px]" />
        <div className="text-center">
          <h4
            className="font-light text-[14px] tracking-[-0.0075rem]"
            style={{ fontVariant: "normal" }}
          >
            © Big Day Event
          </h4>
          <Link
            href="/"
            className="text-[14px] tracking-[-0.0075rem] p-2 -m-2 text-linkBlue font-light"
          >
            www.bigdayevent.co.za
          </Link>
        </div>
      </div>
    </div>
  );
}
