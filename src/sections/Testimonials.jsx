import React from "react";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About me?"
          sub="Client Feedback Highlights"
        />
      </div>
      <div className="lg:columns-3 md:columns-2 columns-1 my-16">
        {testimonials.map((testimonial) => (
          <GlowCard card={testimonial}>
            <div className="flex items-center gap-3">test</div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
