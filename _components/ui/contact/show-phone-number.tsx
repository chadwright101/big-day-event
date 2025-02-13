"use client";

import Link from "next/link";
import { useState } from "react";

import classNames from "classnames";

import { fetchPhoneNumber } from "@/_actions/contact-actions";

import { showContactProps } from "./show-email-address";

const ShowPhoneNumber = ({
  buttonClasses,
  linkClasses,
  person,
}: showContactProps) => {
  const [showPhone, setShowPhone] = useState("Show phone number");
  const [showSpinnerEmail, setShowSpinnerEmail] = useState(false);

  const handleShowPhoneNumbers = async (person: string) => {
    setShowSpinnerEmail(true);
    const phoneNumber =
      (await fetchPhoneNumber(person)) || "Phone number not found";
    setShowPhone(phoneNumber);
    setShowSpinnerEmail(false);
  };

  if (showPhone === "Show phone number") {
    return (
      <button
        onClick={() => handleShowPhoneNumbers(person)}
        className={classNames(
          "px-2 text-left -mx-2 text-paragraph py-3 -my-3 hover:tablet:opacity-80 hover:cursor-pointer tablet:p-0 tablet:m-0 italic",
          buttonClasses
        )}
        aria-label="Show phone number"
      >
        {showSpinnerEmail ? <div className="spinner"></div> : showPhone}
      </button>
    );
  } else {
    return (
      <Link
        href={`tel:${showPhone}`}
        className={classNames(
          "py-3 text-left px-2 -my-3 -mx-2 text-paragraph text-linkBlue tablet:hover:opacity-80 tablet:p-0 tablet:m-0",
          linkClasses
        )}
      >
        {showPhone}
      </Link>
    );
  }
};

export default ShowPhoneNumber;
