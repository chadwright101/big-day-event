"use server";

import contactData from "@/_data/general-data.json";

const {
  contactDetails: { cheryl },
} = contactData;

export const fetchEmailAddress = async () => {
  return cheryl.email;
};

export const fetchPhoneNumber = async () => {
  return cheryl.phone;
};
