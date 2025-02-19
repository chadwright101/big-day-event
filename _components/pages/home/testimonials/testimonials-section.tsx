import classNames from "classnames";

import ButtonLink from "@/_components/ui/buttons/button-link";
import TestimonialsSlider from "./testimonails-slider";
import testimonialsData from "@/_data/general-data.json";

const { testimonials } = testimonialsData;

interface TestimonialsProps {
  cssClasses?: string;
}

const TestimonialsSection = ({ cssClasses }: TestimonialsProps) => {
  return (
    <article
      className={classNames(
        "max-w-[1280px] mx-auto px-7 pb-15 space-y-10 tablet:px-10 desktop:px-0",
        cssClasses
      )}
    >
      <div className="space-y-10">
        <h2 className="text-[28px] min-[340px]:text-[32px] min-[390px]:text-heading desktop:text-[28px] desktop:font-notoSerif">
          Testimonials
        </h2>
        <div className="overflow-hidden border-y-[1.5px] border-green py-5">
          <TestimonialsSlider data={testimonials} />
        </div>
      </div>
      <ButtonLink href="/contact">Contact Us</ButtonLink>
    </article>
  );
};

export default TestimonialsSection;
