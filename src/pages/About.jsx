import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


const MenuBar = ({ active }) => {
  const { t } = useTranslation();

  const items = [
    { label: t("about.menu.story"), id: "story" },
    { label: t("about.menu.vision"), id: "vision" },
    { label: t("about.menu.mission"), id: "mission" },
    { label: t("about.menu.philosophy"), id: "philosophy" },
    { label: t("about.menu.lifecycle"), id: "lifecycle" },
    { label: t("about.menu.how"), id: "how" },
    { label: t("about.menu.trust"), id: "trust" }
  ];

  return (
    <div className="w-fit bg-yellow-300 sticky top-[80px] z-40  ml-[100px]  p-[2px]">
      <div className="max-w-7xl justify-center flex  gap-4 flex-wrap py-3 ">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`px-5 py-2 text-sm font-semibold uppercase rounded-md transition
              ${
                active === item.id
                  ? "bg-green-600 text-white"
                  : "text-black hover:bg-green-200"
              }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};


const Section = ({ id, title, content }) => (
  <section
    id={id}
    className="max-w-5xl mx-auto px-6 py-28 scroll-mt-[160px] text-center"
  >
    <div className="mb-12 ">
      <h2 className="text-4xl text-left md:text-5xl font-bold text-gray-900 font-serif">
        {title}
      </h2>

      <div className="mt-6 flex ">
        <span className="w-20 h-1 bg-green-600 rounded-full"></span>
      </div>
    </div>

    <p className="text-gray-700 text-left text-2xl leading-relaxed">
      {content}
    </p>
  </section>
);


export default function About() {
  const { t } = useTranslation();
  const [active, setActive] = useState("story");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.6 
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className=" bg-white scroll-smooth font-serif ">

     
      <MenuBar active={active} />

      <Section
        id="story"
        title={t("about.story.title")}
        content={t("about.story.content")}
      />

      <Section
        id="vision"
        title={t("about.vision.title")}
        content={t("about.vision.content")}
      />

      <Section
        id="mission"
        title={t("about.mission.title")}
        content={t("about.mission.content")}
      />

      <Section
        id="philosophy"
        title={t("about.philosophy.title")}
        content={t("about.philosophy.content")}
      />

      <Section
        id="lifecycle"
        title={t("about.lifecycle.title")}
        content={t("about.lifecycle.content")}
      />

      <Section
        id="how"
        title={t("about.how.title")}
        content={t("about.how.content")}
      />

      <Section
        id="trust"
        title={t("about.trust.title")}
        content={t("about.trust.content")}
      />

    </div>
  );
}
