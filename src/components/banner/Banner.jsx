import React from "react";
import "./banner.css";

export default function banner() {
  return (
    <section className="banner">
      <div className="bannerTitle">
        <h1>Boplats AB</h1>
        <p>Söka bland lediga lägenheter från över 90 hyresvärdar i Skåne.</p>
      </div>
      <div className="bannerImg">
        <img src="https://images.pexels.com/photos/5129535/pexels-photo-5129535.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="en bild av skåne" />
       

      </div>
    </section>
  );
}
