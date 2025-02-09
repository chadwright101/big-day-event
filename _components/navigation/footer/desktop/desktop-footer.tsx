import Link from "next/link";
import Image from "next/image";

import navData from "@/_data/nav-data.json";
import ShowPhoneNumber from "@/_components/ui/contact/show-phone-number";
import ShowEmailAddress from "@/_components/ui/contact/show-email-address";

export function DesktopFooter() {
  return (
    <div className="hidden tablet:block bg-purple pt-10 pb-5">
      <div className="max-w-[1280px] mx-auto px-10 desktop:px-10">
        <div className="flex justify-between">
          <nav>
            <ul className="flex flex-col">
              {navData.map((item) => {
                if (item.title !== "Contact Us") {
                  return (
                    <li key={item.title}>
                      <Link
                        href={item.url}
                        className="text-white text-[14px] font-normal tracking-[-0.0075rem] hover:text-opacity-80 ease-in-out duration-200"
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                } else {
                  return (
                    <li key={item.title}>
                      <Link
                        href={item.url}
                        className="flex mt-1 justify-center px-2 py-0.5 font-light text-[14px] tracking-[-0.0075rem] rounded-[6px] duration-200 bg-white text-purple desktop:hover:bg-purple desktop:hover:text-white desktop:hover:outline-white desktop:hover:outline desktop:hover:outline-1"
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </nav>

          <div className="flex flex-col items-end justify-between">
            <div className="flex gap-2">
              <Link
                href="https://www.facebook.com/lavntulicom"
                aria-label="Facebook"
                target="_blank"
                className="hover:opacity-80 ease-in-out duration-200"
              >
                <Image
                  src="/icons/facebook.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/laverick-ntuli-communications/"
                aria-label="LinkedIn"
                target="_blank"
                className="hover:opacity-80 ease-in-out duration-200"
              >
                <Image
                  src="/icons/linkedin.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </Link>
            </div>
            <div className="flex flex-col items-end text-right">
              <ShowPhoneNumber
                department="general"
                buttonClasses="text-white hover:opacity-80 ease-in-out duration-200"
                linkClasses="text-white hover:opacity-80 ease-in-out duration-200"
                spinnerColor="white"
                smallText
              />
              <ShowEmailAddress
                department="general"
                buttonClasses="text-white hover:opacity-80 ease-in-out duration-200"
                linkClasses="text-white hover:opacity-80 ease-in-out duration-200"
                spinnerColor="white"
                smallText
              />
            </div>
            <div className="text-right">
              <p className="text-[14px] tracking-[-0.0075rem] text-white">
                Designed & developed by
              </p>
              <Link
                href="https://thewrightdesigns.co.za"
                aria-label="The Wright Designs"
                className="text-[14px] tracking-[-0.0075rem] text-white hover:opacity-80 ease-in-out duration-200"
                target="_blank"
              >
                The Wright Designs
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center col-span-2 place-self-center mt-5">
          <h4 className="text-white font-light text-[14px] tracking-[-0.0075rem]">
            © Laverick Ntuli Communications |{" "}
            <Link
              href="/"
              className="text-[14px] tracking-[-0.0075rem] hover:opacity-80 ease-in-out duration-200"
            >
              www.laverickntuli.co.za
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}
