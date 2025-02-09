"use client";

import Link from "next/link";
import { useState } from "react";

import classNames from "classnames";

import { fetchEmailAddresses } from "@/_actions/contact-actions";

export interface showContactProps {
  buttonClasses?: string;
  linkClasses?: string;
  spinnerColor?: "purple" | "white";
  smallText?: boolean;
  department: "creative" | "general" | "publicRelations";
  whiteText?: boolean;
}

const ShowEmailAddress = ({
  buttonClasses,
  linkClasses,
  spinnerColor = "purple",
  smallText,
  department = "general",
  whiteText,
}: showContactProps) => {
  const [showEmail, setShowEmail] = useState("Show email address");
  const [showSpinnerEmail, setShowSpinnerEmail] = useState(false);

  const handleShowEmailAddresses = async () => {
    setShowSpinnerEmail(true);
    const emailAddress =
      (await fetchEmailAddresses({ department })) || "Email not found";
    setShowEmail(emailAddress);
    setShowSpinnerEmail(false);
  };

  if (showEmail === "Show email address") {
    return (
      <button
        onClick={handleShowEmailAddresses}
        className={classNames(
          "px-2 -mx-2 py-3 -my-3 hover:tablet:opacity-80 hover:cursor-pointer tablet:p-0 tablet:m-0 italic",
          {
            "text-[14px] tracking-[-0.0075rem]": smallText,
            "text-paragraph": !smallText,
            "text-white": whiteText,
          },
          buttonClasses
        )}
        aria-label="Show email address"
      >
        {showSpinnerEmail ? (
          <div
            className={classNames({
              "spinner-purple": spinnerColor === "purple",
              "spinner-white": spinnerColor === "white",
            })}
          ></div>
        ) : (
          showEmail
        )}
      </button>
    );
  } else {
    return (
      <Link
        href={`mailto:${showEmail}`}
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
        {showEmail}
      </Link>
    );
  }
};

export default ShowEmailAddress;
