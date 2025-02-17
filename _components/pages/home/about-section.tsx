import ButtonLink from "@/_components/ui/buttons/button-link";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-7 py-15 grid gap-10 tablet:px-10">
      <h2>About Us</h2>
      <div className="grid gap-10 desktop:gap-5">
        <div className="grid gap-10 tablet:grid-cols-[1fr_300px] desktop:mb-5">
          <div className="h-full tablet:order-last">
            <Image
              src="/images/0008-JE.jpg"
              alt="Big Day Event team"
              width={800}
              height={800}
              sizes="(max-width:800px) 100vw, 33vw"
              className="object-cover h-full"
            />
          </div>
          <div className="space-y-10">
            <div className="space-y-5">
              <p className="desktop:col-span-2">
                Big Day Event is the brainchild of Cheryl Dempster and Heidi
                Twiss, two seasoned professionals with a combined wealth of
                experience in event planning, floral design, and client
                coordination. Cheryl's background lies in organising
                high-profile weddings and events, where her meticulous attention
                to detail and dedication to realising couples' dreams shine.
                Heidi contributes 19 years of expertise as a florist and event
                coordinator, honed in Johannesburg, South Africa. Her diverse
                skillset encompasses floristry, event design, and client
                liaison, guaranteeing seamless wedding execution.
              </p>
              <p>
                Together, Cheryl and Heidi offer a unique blend of local Garden
                Route knowledge and the capacity to orchestrate weddings
                internationally. Their specialisation lies in creating
                personalised, stress-free celebrations, allowing couples to
                fully enjoy their special day.
              </p>
            </div>
            <ButtonLink
              color="green"
              href="/contact"
              cssClasses="tablet:place-self-start"
            >
              Get In Touch
            </ButtonLink>
          </div>
        </div>
        {/* <div className="grid gap-10 desktop:grid-cols-3">
          <div className="grid gap-2.5">
            <h3>Cheryl&apos;s Expertise</h3>
            <p>
              Cheryl has a rich background in organizing and managing
              high-profile weddings and events, with an unmatched eye for detail
              and a deep passion for bringing couples&apos; visions to life.
            </p>
          </div>
          <div className="grid gap-2.5">
            <h3>Heidi&apos;s Expertise</h3>
            <p>
              Heidi brings 19 years of experience as a florist and event
              coordinator in Johannesburg, South Africa. Her versatility in
              floristry, event design, and client liaison ensures every wedding
              is executed seamlessly.
            </p>
          </div>
          <div className="grid gap-2.5">
            <h3>Combined Strengths</h3>
            <p>
              With local expertise in the Garden Route and an ability to craft
              weddings abroad, Cheryl and Heidi specialize in stress-free,
              personalized celebrations.
            </p>
          </div>
        </div>
        <div className="grid gap-5 tablet:grid-cols-2 desktop:grid-cols-3 desktop:gap-10">
          <Image
            src="/images/placeholder.png"
            alt="Big Day Event team"
            width={800}
            height={800}
            sizes="(max-width:600px) 100vw, (max-width:1280px) 50vw, 33vw"
            className="object-cover aspect-[4/3]"
          />
          <Image
            src="/images/placeholder.png"
            alt="Big Day Event team"
            width={800}
            height={800}
            sizes="(max-width:800px) 100vw, (max-width:1280px) 50vw, 33vw"
            className="object-cover aspect-[4/3]"
          />
          <Image
            src="/images/placeholder.png"
            alt="Big Day Event team"
            width={800}
            height={800}
            sizes="(max-width:800px) 100vw, (max-width:1280px) 50vw, 33vw"
            className="object-cover aspect-[4/3] hidden desktop:block"
          />
        </div> */}
      </div>
      {/* <ButtonLink color="green" href="/contact" cssClasses="desktop:hidden">
        Get In Touch
      </ButtonLink> */}
    </section>
  );
};

export default AboutSection;
