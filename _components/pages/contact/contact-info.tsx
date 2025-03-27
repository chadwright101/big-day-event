import ShowEmailAddress from "@/_components/ui/contact/show-email-address";
import ShowPhoneNumber from "@/_components/ui/contact/show-phone-number";
import SocialIcons from "@/_lib/utils/social-icons";

const ContactInfo = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-4 desktop:space-y-3">
        <h3>Cheryl</h3>
        <div className="grid gap-4 place-content-start desktop:gap-3">
          <ShowPhoneNumber />
          <ShowEmailAddress />
        </div>
      </div>
      <SocialIcons cssClasses="desktop:hidden" />
      <SocialIcons small cssClasses="hidden desktop:flex" />
    </div>
  );
};

export default ContactInfo;
