import Image from "next/image";
import serviceData from "@/_data/general-data.json";
import classNames from "classnames";
import ButtonLink from "@/_components/ui/buttons/button-link";

const { services } = serviceData;

const ServicesSection = () => {
  return (
    <main className="max-w-[1280px] grid gap-10 mx-auto px-7 py-15 tablet:px-10">
      <h2>Services</h2>
      <ul className="grid gap-10 tablet:grid-cols-2 desktop:grid-cols-4">
        {services.map(({ name, image, paragraph }, index) => (
          <li
            key={index}
            className="flex flex-col gap-10 tablet:justify-between"
          >
            <div className="grid gap-2">
              <h3>{name}</h3>
              <p>{paragraph}</p>
            </div>
            <Image
              src={image}
              alt={name}
              width={800}
              height={800}
              sizes="(max-width:600px) 100vw, (max-width:1280px) 50vw, 25vw"
              className={classNames("object-cover aspect-square", {
                "object-bottom": name === "Full Wedding Planning",
              })}
            />
          </li>
        ))}
        <li className="flex flex-col gap-5 tablet:justify-between">
          <div className="grid gap-5">
            <h4>Unsure which package is right for you?</h4>
            <p>Let’s discuss your vision and create a personalised plan.</p>
            <ButtonLink href="/contact">Contact Us For Details</ButtonLink>
          </div>
          <Image
            src="/images/gallery/decor-and-details/1342y53u6.jpg"
            alt="Big Day Event"
            width={800}
            height={800}
            sizes="(max-width:600px) 100vw, (max-width:1280px) 50vw, 25vw"
            className="hidden object-cover aspect-square tablet:block"
          />
        </li>
      </ul>
    </main>
  );
};

export default ServicesSection;
