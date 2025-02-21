"use client";

import { useState } from "react";
import Image from "next/image";

import ContactForm from "@/_components/pages/contact/contact-form";
import ContactInfo from "@/_components/pages/contact/contact-info";
import classNames from "classnames";

const Contact = () => {
  const [showEmailSubmitted, setShowEmailSubmitted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <main className="max-w-[1280px] mx-auto py-15 px-7 space-y-10 tablet:px-10">
      <h2>Contact</h2>
      <div className="grid gap-10 desktop:grid-cols-2">
        <div className="grid gap-10 tablet:grid-cols-2 desktop:flex flex-col">
          <div className="space-y-10">
            <p>We can’t wait to hear about your wedding dreams!</p>
            <ContactInfo />
          </div>
          <div className="w-full h-full">
            <Image
              src="/images/general/3917508713.jpg"
              alt="Big Day Event"
              width={800}
              height={800}
              className={classNames(
                "aspect-square object-cover h-full tablet:aspect-video",
                {
                  "desktop:hidden": showEmailSubmitted,
                }
              )}
              sizes="(max-width:800px) 100vw, 50vw"
            />
          </div>
        </div>
        <ContactForm
          showEmailSubmitted={showEmailSubmitted}
          setShowEmailSubmitted={setShowEmailSubmitted}
          showMessage={showMessage}
          setShowMessage={setShowMessage}
        />
      </div>
    </main>
  );
};

export default Contact;
