"use client";

import { MobileHeader } from "./mobile/mobile-header";
import { DesktopHeader } from "./desktop/desktop-header";
import { useEffect, useState } from "react";
import useScrollPosition from "@/_lib/hooks/scroll-position";
import classNames from "classnames";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [scrollPosition]);

  return (
    <header
      className={classNames(
        "sticky top-0 left-0 border-b-[3px] bg-white border-green z-50 ease-in-out duration-300",
        {
          "-top-2 desktop:-top-[22px]": isScrolled,
        }
      )}
    >
      <div className="max-w-[1280px] mx-auto relative">
        <MobileHeader isScrolled={isScrolled} />
        <DesktopHeader isScrolled={isScrolled} />
      </div>
    </header>
  );
}
