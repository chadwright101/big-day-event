"use client";

import Link from "next/link";
import { useState } from "react";

import classNames from "classnames";

import { fetchPhoneNumbers } from "@/_actions/contact-actions";

import { showContactProps } from "./show-email-address";

const ShowPhoneNumber = ({
  buttonClasses,
  linkClasses,
  spinnerColor = "purple",
  smallText,
  department,
  whiteText,
}: showContactProps) => {
  const [showPhone, setShowPhone] = useState("Show phone number");
  const [showSpinnerEmail, setShowSpinnerEmail] = useState(false);

  const handleShowPhoneNumbers = async () => {
    setShowSpinnerEmail(true);
    const phoneNumber =
      (await fetchPhoneNumbers({ department })) || "Phone number not found";
    setShowPhone(phoneNumber);
    setShowSpinnerEmail(false);
  };

  if (showPhone === "Show phone number") {
    return (
      <button
        onClick={handleShowPhoneNumbers}
        className={classNames(
          "px-2 -mx-2 py-3 -my-3 hover:tablet:opacity-80 hover:cursor-pointer tablet:p-0 tablet:m-0 italic",
          {
            "text-[14px] tracking-[-0.0075rem]": smallText,
            "text-paragraph": !smallText,
            "text-white": whiteText,
          },
          buttonClasses
        )}
        aria-label="Show phone number"
      >
        {showSpinnerEmail ? (
          <div
            className={classNames({
              "spinner-purple": spinnerColor === "purple",
              "spinner-white": spinnerColor === "white",
            })}
          ></div>
        ) : (
          showPhone
        )}
      </button>
    );
  } else {
    return (
      <Link
        href={`tel:${showPhone}`}
        className={classNames(
          "py-3 px-2 -my-3 -mx-2 tablet:hover:opacity-80 tablet:p-0 tablet:m-0",
          {
            "text-[14px] tracking-[-0.0075rem]": smallText,
            "text-paragraph": !smallText,
            "text-white": whiteText,
          },
          linkClasses
        )}
      >
        {showPhone}
      </Link>
    );
  }
};

export default ShowPhoneNumber;
