import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CountUp from "../components/CountUp";

export default function Home() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const slides = [
    { image: "/edu.jpg", text: t("home.slider.text") },
    { image: "/we.jpg", text: t("home.slider.text") },
    { image: "/Slide3.png", text: t("home.slider.text") },
    { image: "/Slide4.png", text: t("home.slider.text") },
    { image: "/g4.png", text: t("home.slider.text") },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden relative font-serif">

      
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-full h-[700px] flex-shrink-0 relative">
            <img src={slide.image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-6">
                {slide.text}
              </h1>
            </div>
          </div>
        ))}
      </div>

   
      <section className="w-full bg-[#EFDECD] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <p className="text-gray-800 text-lg leading-relaxed font-medium">
              {t("home.about")}
            </p>
          </div>
        </div>
      </section>

      
      <section className="w-full bg-[#F7F7F7] py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-3xl font-extrabold mb-16 tracking-wide">
            {t("home.impact.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">

            <div>
              <h3 className="text-[#8CC63E] text-6xl font-extrabold">
                <CountUp end={20} />+
              </h3>
              <p className="text-[#8CC63E] text-lg font-semibold mt-2">
                {t("home.impact.thousand")}
              </p>
              <p className="text-gray-700 mt-3">
                {t("home.impact.children")}
              </p>
            </div>

            <div>
              <h3 className="text-[#8CC63E] text-6xl font-extrabold">
                <CountUp end={200} />+
              </h3>
              <p className="text-[#8CC63E] text-lg font-semibold mt-2">
                {t("home.impact.villages")}
              </p>
              <p className="text-gray-700 mt-3">
                {t("home.impact.villagesDesc")}
              </p>
            </div>

            <div>
              <h3 className="text-[#8CC63E] text-6xl font-extrabold">
                <CountUp end={40} />+
              </h3>
              <p className="text-[#8CC63E] text-lg font-semibold mt-2">
                {t("home.impact.projects")}
              </p>
              <p className="text-gray-700 mt-3">
                {t("home.impact.projectsDesc")}
              </p>
            </div>

            <div>
              <h3 className="text-[#8CC63E] text-6xl font-extrabold">
                <CountUp end={2} />+
              </h3>
              <p className="text-[#8CC63E] text-lg font-semibold mt-2">
                {t("home.impact.states")}
              </p>
              <p className="text-gray-700 mt-3">
                {t("home.impact.statesDesc")}
              </p>
            </div>

          </div>
        </div>
      </section>

      
      <section className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-3xl font-extrabold mb-20 tracking-wide">
            {t("home.programmes.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">

            <Program
              title={t("home.programmes.education")}
              desc={t("home.programmes.educationDesc")}
              color="#F5C77A"
            />

            <Program
              title={t("home.programmes.healthcare")}
              desc={t("home.programmes.healthcareDesc")}
              color="#C7B3E5"
            />

            <Program
              title={t("home.programmes.women")}
              desc={t("home.programmes.womenDesc")}
              color="#A7D3D0"
            />

            <Program
              title={t("home.programmes.livelihood")}
              desc={t("home.programmes.livelihoodDesc")}
              color="#E2C2A5"
            />

          </div>
        </div>
      </section>

    </div>
  );
}


const Program = ({ title, desc, color }) => (
  <div className="flex gap-6 items-start">
    <div>
      <h3
        className="text-xl font-bold underline underline-offset-4"
        style={{ color }}
      >
        {title}
      </h3>
      <p className="text-gray-700 mt-3 leading-relaxed">
        {desc}
      </p>
    </div>
  </div>
);
