import Image from "next/image";
import Link from "next/link";

import navData from "@/_data/nav-data.json";
import { HeaderProps } from "../mobile/mobile-header";
import classNames from "classnames";

export function DesktopHeader({ isScrolled }: HeaderProps) {
  return (
    <div className="hidden pt-5 pb-4 px-15 items-end justify-between desktop:flex ease-in-out duration-300">
      <Link
        href="/"
        className={classNames("duration-300", {
          "translate-y-3": isScrolled,
        })}
      >
        <Image
          src="/big-day-event-logo.png"
          alt="Big Day Event Logo"
          width={230}
          height={150}
          priority
          className={classNames("h-auto w-[155px] ease-in-out duration-300", {
            "scale-[70%] -translate-x-5": isScrolled,
          })}
        />
      </Link>
      <nav
        className={classNames("ease-in-out duration-300", {
          "translate-y-1.5": isScrolled,
        })}
      >
        <ul className="flex gap-2.5 items-center">
          {navData.map(({ title, url }, id) => {
            return (
              <li key={id}>
                <Link
                  href={url}
                  className="font-light tracking-[-0.01rem] ease-in-out duration-200 hover:text-green"
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
