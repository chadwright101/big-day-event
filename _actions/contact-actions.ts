"use server";

import contactData from "@/_data/general-data.json";

const {
  contactDetails: { cheryl, heidi },
} = contactData;

export const fetchEmailAddress = async (person: string) => {
  if (person === "cheryl") {
    return cheryl.email;
  } else if (person === "heidi") {
    return heidi.email;
  } else null;
};

export const fetchPhoneNumber = async (person: string) => {
  if (person === "cheryl") {
    return cheryl.phone;
  } else if (person === "heidi") {
    return heidi.phone;
  } else null;
};
