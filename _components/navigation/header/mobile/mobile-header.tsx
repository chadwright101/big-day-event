"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Equal, X } from "lucide-react";

import navData from "@/_data/nav-data.json";
import classNames from "classnames";

export interface HeaderProps {
  isScrolled: boolean;
}

export function MobileHeader({ isScrolled }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={classNames(
        "relative flex w-full items-center justify-between px-7 py-5 tablet:px-10 desktop:hidden ease-in-out duration-300",
        {
          "pb-1": isScrolled,
        }
      )}
    >
      <Link href="/">
        <Image
          src="/images/big-day-event-logo.png"
          alt="Big Day Event Logo"
          width={200}
          height={100}
          priority
          className={classNames("ease-in-out duration-300 h-auto w-[124px]", {
            "scale-[80%] -translate-x-3 -translate-y-1": isScrolled,
          })}
        />
      </Link>

      <button
        onClick={() => setIsOpen(true)}
        className={classNames("ease-in-out duration-300 -mr-3", {
          "-translate-y-1.5": isScrolled,
        })}
        aria-label="Open menu"
      >
        <Equal color="#2D2C33" strokeWidth={1.5} className="h-12 w-12 p-1" />
      </button>

      {/* Slide-out Menu */}
      <div
        className={`fixed inset-0 z-50 transform bg-green transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-y-full"
        }`}
      >
        <div className="flex py-5 items-center justify-end px-7">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="-mr-3"
          >
            <X color="#FFFFFF" className="h-14 w-14 p-2" strokeWidth={1.5} />
          </button>
        </div>
        <nav className="px-7">
          <ul className="grid gap-5">
            {navData.map(({ title, url }, id) => {
              return (
                <li key={id}>
                  <Link
                    href={url}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-[22px] font-medium p-2 -m-2"
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
