import ButtonLink from "@/_components/ui/buttons/button-link";

const HeroSection = () => {
  return (
    <section className="max-w-[1280px] mx-auto bg-[url(/images/hero-image.webp)] bg-center bg-cover w-full px-7 py-10 h-[550px] flex justify-center items-end desktop:items-center desktop:justify-start desktop:px-15 desktop:h-[500px]">
      <div className="w-full bg-white/85 p-5 rounded-[8px] grid gap-1.5 max-w-[318px] desktop:max-w-[372px] desktop:gap-1">
        <h1 className="text-[26px] min-[325px]:text-[30px] min-[375px]:text-[36px] tracking-tight desktop:text-heading">
          Big Day Event
        </h1>
        <hr className="text-green" />
        <h2 className="text-subheading desktop:text-[28px] desktop:tracking-[-0.028rem]">
          Crafting Weddings of Your Dreams,{" "}
          <span className="font-notoSerif font-extralight">Stress-Free</span>
        </h2>
        <ButtonLink
          cssClasses="desktop:mt-2 desktop:place-self-start"
          href="/contact"
        >
          Start Planning Today
        </ButtonLink>
      </div>
    </section>
  );
};

export default HeroSection;
