import Link from "next/link";
import Image from "next/image";

import navData from "@/_data/nav-data.json";
import SocialIcons from "@/_lib/utils/social-icons";

export function DesktopFooter() {
  return (
    <div className="hidden desktop:block bg-white pt-10 pb-5">
      <div className="max-w-[1280px] mx-auto px-10 desktop:px-15">
        <div className="flex justify-between">
          <nav>
            <ul className="flex flex-col">
              {navData.map((item) => {
                return (
                  <li key={item.title}>
                    <Link
                      href={item.url}
                      className=" text-[14px] font-light tracking-[-0.0075rem] hover:text-opacity-80 ease-in-out duration-200 desktop:hover:text-green"
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
              <SocialIcons small cssClasses="mt-2" />
            </ul>
          </nav>

          <div className="flex flex-col items-end justify-around">
            <Image
              src="/images/big-day-event-logo.png"
              alt="Big Day Event Logo"
              width={200}
              height={100}
              className="w-[150px] h-auto"
            />
            <div className="text-right">
              <p className="text-[14px] tracking-[-0.0075rem] ">
                Designed & developed by
              </p>
              <Link
                href="https://thewrightdesigns.co.za"
                aria-label="The Wright Designs"
                className="text-[14px] font-light tracking-[-0.0075rem] hover:opacity-80 ease-in-out duration-200 text-linkBlue"
                target="_blank"
              >
                The Wright Designs
              </Link>
            </div>
          </div>
        </div>
        <hr className="text-green w-[28%] mx-auto mt-4" />
        <div className="text-center col-span-2 place-self-center mt-5">
          <h4
            className="font-light text-[14px] tracking-[-0.0075rem]"
            style={{ fontVariant: "normal" }}
          >
            © Big Day Event |{" "}
            <Link
              href="/"
              className="text-[14px] tracking-[-0.0075rem] hover:opacity-80 ease-in-out duration-200 text-linkBlue"
              style={{ fontVariant: "normal" }}
            >
              www.bigdayevent.co.za
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}
