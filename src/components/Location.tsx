import React from "react";
import Section from "./ui/section";
import Heading from "./ui/title";
import LocationCard from "./LocationCard";
import { MapPinIcon } from "lucide-react";

type Props = {};

const Location = (props: Props) => {
  const locationLink =
    "https://www.google.com/maps/dir/40.8850515,-73.8511531/657+Meeker+Ave,+Brooklyn,+NY+11222/@40.8104697,-73.9644203,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89c2594c3925797b:0x45ad907a9c597717!2m2!1d-73.9407871!2d40.7226786?entry=ttu";

  return (
    <Section background="black">
      <Heading
        width={600}
        badgeColor="yellow"
        descriptionColor="light-gray"
        variant="white"
        badge="Visit Us"
        title="Explore Our Locations"
        description="Shop in-store, earn points, unlock rewards. Every purchase brings you closer to exclusive benefits. Start earning today!"
      />
      <div className="flex flex-col md:flex-row gap-12 items-start sm:items-center md:items-center justify-center mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7880269725083!2d-73.94336202358608!3d40.7226826369609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2594c3925797b%3A0x45ad907a9c597717!2s657%20Meeker%20Ave%2C%20Brooklyn%2C%20NY%2011222!5e0!3m2!1sen!2sus!4v1704855548964!5m2!1sen!2sus"
          loading="lazy"
          className="w-full min-h-80 md:h-[500px] rounded-2xl flex-1"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="flex flex-col sm:flex-row md:flex-col justify-between flex-[.3] items-start gap-6">
          <LocationCard
            icon={<MapPinIcon />}
            title="Store Address"
            openingTimes="Mon-Sat 12am to 12pm."
            location="657 Meeker Ave, Brooklyn, NY 11222"
            callToAction="Get Directions"
            callToActionLink={locationLink}
          />
          <LocationCard
            icon={<MapPinIcon />}
            title="Phone Number"
            location="+1 (123) 456-789"
            callToAction="Call Us"
            callToActionLink={"tel:1234567890"}
          />
        </div>
      </div>
    </Section>
  );
};

export default Location;
