"use client";

import { useState } from "react";

import GallerySlider from "./gallery-slider";
import ButtonGallery from "@/_components/ui/buttons/button-gallery";

import galleryData from "@/_data/general-data.json";
import TestimonialsSection from "../../testimonials/testimonials-section";

const {
  gallery: { decor, destination, gardenRoute },
} = galleryData;

const GallerySection = () => {
  const [showDecorGallery, setShowDecorGallery] = useState(true);
  const [showDestinationGallery, setShowDestinationGallery] = useState(false);
  const [showGardenRouteGallery, setShowGardenRouteGallery] = useState(false);

  return (
    <section className="max-w-[1280px] mx-auto py-15 space-y-10 desktop:px-10">
      <div className="grid gap-10 px-7 tablet:px-10 desktop:px-0">
        <h2>Gallery</h2>
        <p>
          Every wedding tells a story. Here are some of the moments we’ve had
          the privilege to create.
        </p>
      </div>
      <div className="space-y-5">
        <div className="flex flex-wrap gap-4 px-7 tablet:px-10 desktop:px-0">
          <ButtonGallery
            onClick={() => {
              setShowDecorGallery(true),
                setShowDestinationGallery(false),
                setShowGardenRouteGallery(false);
            }}
            active={
              showDecorGallery
                ? !showDecorGallery
                : showDestinationGallery
                ? showDestinationGallery
                : showGardenRouteGallery
            }
          >
            Décor & Details
          </ButtonGallery>
          <ButtonGallery
            onClick={() => {
              setShowDestinationGallery(true),
                setShowDecorGallery(false),
                setShowGardenRouteGallery(false);
            }}
            active={
              showDecorGallery
                ? showDecorGallery
                : showDestinationGallery
                ? !showDestinationGallery
                : showGardenRouteGallery
            }
          >
            Destination Weddings
          </ButtonGallery>
          <ButtonGallery
            onClick={() => {
              setShowGardenRouteGallery(true),
                setShowDecorGallery(false),
                setShowDestinationGallery(false);
            }}
            active={
              showDecorGallery
                ? showDecorGallery
                : showDestinationGallery
                ? showDestinationGallery
                : !showGardenRouteGallery
            }
          >
            Garden Route Weddings
          </ButtonGallery>
        </div>
        <div className="desktop:grid grid-cols-[2fr_1fr] gap-10">
          <div className="overflow-hidden">
            {showDecorGallery && (
              <>
                <div className="hidden desktop:block">
                  <GallerySlider
                    data={decor}
                    cssClasses=" h-[550px] w-full"
                    desktop
                  />
                </div>
                <div className="desktop:hidden">
                  <GallerySlider
                    data={decor}
                    cssClasses="w-full h-[280px] min-[380px]:h-[320px] phone:h-[380px] min-[550px]:h-[450px] tablet:h-[600px]"
                  />
                </div>
              </>
            )}
            {showDestinationGallery && (
              <>
                <div className="hidden desktop:block">
                  <GallerySlider
                    data={destination}
                    cssClasses="w-full h-[550px]"
                    desktop
                  />
                </div>
                <div className="desktop:hidden">
                  <GallerySlider
                    data={destination}
                    cssClasses="w-full h-[280px] min-[380px]:h-[320px] phone:h-[380px] min-[550px]:h-[450px] tablet:h-[600px]"
                  />
                </div>
              </>
            )}
            {showGardenRouteGallery && (
              <div>
                <div className="hidden desktop:block">
                  <GallerySlider
                    data={gardenRoute}
                    cssClasses="w-full h-[550px]"
                    desktop
                  />
                </div>
                <div className="desktop:hidden">
                  <GallerySlider
                    data={gardenRoute}
                    cssClasses="w-full h-[280px] min-[380px]:h-[320px] phone:h-[380px] min-[550px]:h-[450px] tablet:h-[600px]"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="overflow-hidden">
            <TestimonialsSection cssClasses="hidden desktop:flex flex-col h-full justify-between desktop:py-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
