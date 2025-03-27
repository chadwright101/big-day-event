import ButtonLink from "@/_components/ui/buttons/button-link";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-7 py-15 grid gap-10 tablet:px-10">
      <h2>About</h2>
      <div className="grid gap-10 desktop:gap-5">
        <div className="grid gap-10 tablet:grid-cols-[1fr_300px] desktop:mb-5">
          <div className="h-full tablet:order-last">
            <Image
              src="/images/general/Cheryl-Dempster-Big-Day-Event.jpg"
              alt="Cheryl Dempster - Big Day Event"
              width={800}
              height={800}
              sizes="(max-width:600px) 100vw, (max-width:1280px) 50vw, 33vw"
              className="object-cover aspect-[4/3]"
            />
          </div>
          <div className="space-y-10">
            <div className="space-y-5">
              <p className="desktop:col-span-2">
                Big Day Event is the brainchild of Cheryl Dempster, a seasoned
                professional with over 15 years of experience in event planning,
                and client coordination.
              </p>
              <p>
                Cheryl has organised high-profile weddings and events across
                South Africa where her meticulous attention to detail and
                dedication to realising couples’ dreams shine.
              </p>
              <p>
                With an in-depth understanding of the Garden Route and a passion
                for creating unforgettable celebrations, Big Day Event
                specialises in crafting personalised, stress-free weddings,
                ensuring couples can fully immerse themselves in the joy of
                their special day without the pressure of planning.
              </p>
            </div>
            <ButtonLink href="/contact" cssClasses="tablet:place-self-start">
              Get In Touch
            </ButtonLink>
          </div>
        </div>
      </div>
      {/* <ButtonLink href="/contact" cssClasses="desktop:hidden">
        Get In Touch
      </ButtonLink> */}
    </section>
  );
};

export default AboutSection;
