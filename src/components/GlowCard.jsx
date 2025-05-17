import React from "react";

const GlowCard = ({ card, children }) => {
  return (
    <div className="card card-bordr timeline-card rounded-xl p-10">
      <div className="glow" />
      <div>
        {Array.from({ length: 5 }, (_, i) => (
          <img src="/images/star.png" key={i} alt="star" className="size-5" />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
