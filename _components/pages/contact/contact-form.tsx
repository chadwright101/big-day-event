"use client";

import { useEffect, useState } from "react";

import { sendEmail } from "@/_actions/send-email-actions";

import classNames from "classnames";

import Recaptcha from "@/_lib/recaptcha";
import ButtonType from "@/_components/ui/buttons/button-type";
import { ChevronDown, Calendar1 } from "lucide-react";

interface Props {
  cssClasses?: string;
  showEmailSubmitted: boolean;
  setShowEmailSubmitted: (showEmailSubmitted: boolean) => void;
  showMessage: boolean;
  setShowMessage: (showMessage: boolean) => void;
}

export default function ContactForm({
  cssClasses,
  showEmailSubmitted,
  showMessage,
  setShowEmailSubmitted,
  setShowMessage,
}: Props) {
  const [submissionStartTime, setSubmissionStartTime] = useState(0);
  const [validateRecaptcha, setValidateRecaptcha] = useState(false);

  useEffect(() => {
    const startSubmissionTimer = () => {
      setSubmissionStartTime(new Date().getTime());
    };
    startSubmissionTimer();
    if (showEmailSubmitted) {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showEmailSubmitted]);

  const handleRecaptchaChange = (value: string | null) => {
    if (value === null) {
      setValidateRecaptcha(false);
      console.log("Recaptcha expired");
    } else {
      const elapsedTime = new Date().getTime() - submissionStartTime;
      if (elapsedTime < 3000) {
        console.error("Form submitted too quickly. Possible bot activity.");
        return;
      } else {
        setValidateRecaptcha(!!value);
      }
    }
  };

  const labelStyles = "text-subheading font-medium text-white";
  const inputStyles =
    "h-10 px-3 bg-white rounded-[6px] border border-grey text-paragraph w-full";

  return (
    <div
      className={classNames(
        "bg-green px-5 py-7 rounded-[8px] space-y-10",
        cssClasses
      )}
      id="contact"
    >
      {showEmailSubmitted ? (
        <p className="font-medium text-white">
          Your email has been sent, we will be in touch soon.
        </p>
      ) : (
        <>
          <p className="text-white">
            Please fill out this form and we’ll get back to you ASAP...
          </p>
          <form
            action={async (formData) => {
              await sendEmail(formData);
              setShowEmailSubmitted(true);
            }}
            className="grid gap-10 desktop:gap-7"
          >
            <div className="grid gap-[10px]">
              <label className={labelStyles}>Name*</label>
              <input
                name="name"
                required
                placeholder="Name"
                className={inputStyles}
              />
            </div>

            <div className="grid gap-[10px]">
              <label className={labelStyles}>Email*</label>
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className={inputStyles}
              />
            </div>

            <div className="grid gap-[10px]">
              <label className={labelStyles}>Phone</label>
              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                className={inputStyles}
              />
            </div>
            <div className="grid gap-[10px]">
              <label htmlFor="weddingDate" className={labelStyles}>
                Wedding Date:
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="date"
                  name="date"
                  min={new Date().toISOString().split("T")[0]}
                  className={classNames(
                    "",
                    inputStyles,
                    "w-full",
                    "[appearance:none]",
                    "[-webkit-appearance:none]"
                  )}
                />
                <Calendar1
                  color="#8E8E93"
                  className="absolute bg-white right-3 w-7 p-0.5 top-[8px] pointer-events-none"
                />
              </div>
            </div>
            <div className="grid gap-[10px]">
              <label className={labelStyles}>Service Type</label>
              <div className="relative">
                <select
                  name="service"
                  required
                  defaultValue="general"
                  className={classNames("appearance-none", inputStyles)}
                >
                  <option value="Full Wedding Planning">
                    Full Wedding Planning
                  </option>
                  <option value="On-The-Day Coordination">
                    On-The-Day Coordination
                  </option>
                  <option value="Destination Wedding">
                    Destination Wedding
                  </option>
                  <option value="Other">Other</option>
                </select>
                <ChevronDown
                  color="#8E8E93"
                  className="absolute right-3 top-[9px] pointer-events-none"
                />
              </div>
            </div>
            {showMessage && (
              <div className="grid gap-[10px]">
                <label className={labelStyles}>Message</label>
                <textarea
                  name="message"
                  placeholder="Type your message here"
                  className="min-h-[180px] rounded-[6px] border border-darkGrey text-paragraph py-3 px-3"
                  required
                />
              </div>
            )}
            {showMessage ? (
              <>
                <ButtonType
                  cssClasses={classNames("w-full", {
                    "opacity-50 desktop:cursor-not-allowed desktop:hover:none":
                      !validateRecaptcha,
                    "hover:desktop:opacity-90": validateRecaptcha,
                  })}
                  disabled={!validateRecaptcha}
                >
                  Submit
                </ButtonType>
                <div className="overflow-x-auto w-full">
                  {!validateRecaptcha && (
                    <Recaptcha onChange={handleRecaptchaChange} />
                  )}
                </div>
              </>
            ) : (
              <ButtonType
                cssClasses="w-full desktop:mt-10"
                onClick={() => setShowMessage(true)}
                type="button"
              >
                Next
              </ButtonType>
            )}
          </form>
        </>
      )}
    </div>
  );
}
