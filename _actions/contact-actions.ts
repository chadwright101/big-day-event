"use server";

import contactData from "@/_data/general-data.json";

const {
  contactDetails: { emailAddresses, phoneNumbers },
} = contactData;

interface ContactDepartmentProps {
  department: "creative" | "general" | "publicRelations";
}

export const fetchEmailAddresses = async ({
  department,
}: ContactDepartmentProps) => {
  if (department === "creative") {
    return emailAddresses.creative;
  } else if (department === "general") {
    return emailAddresses.general;
  } else {
    null;
  }
};

export const fetchPhoneNumbers = async ({
  department,
}: ContactDepartmentProps) => {
  if (department === "creative") {
    return phoneNumbers.creative;
  } else if (department === "general") {
    return phoneNumbers.general;
  } else if (department === "publicRelations") {
    return phoneNumbers.publicRelations;
  } else {
    null;
  }
};
