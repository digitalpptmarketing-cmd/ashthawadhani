import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

/* ---------------- MENU BAR ---------------- */
const MenuBar = ({ active }) => {
  const { t } = useTranslation();

  const items = [
    { label: t("about.menu.story"), id: "story" },
    { label: t("about.menu.vision"), id: "vision" },
    { label: t("about.menu.mission"), id: "mission" },
    { label: t("about.menu.philosophy"), id: "philosophy" },
    { label: t("about.menu.lifecycle"), id: "lifecycle" },
    { label: t("about.menu.how"), id: "how" },
    { label: t("about.menu.trust"), id: "trust" },
  ];

  return (
    <div className="sticky top-[72px] z-40 bg-yellow-300">
      <div className="max-w-7xl mx-auto px-4 py-2 overflow-x-auto">
        <div className="flex gap-3 w-max md:w-full md:justify-center">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-4 py-2 text-xs md:text-sm font-semibold uppercase rounded-full transition whitespace-nowrap
                ${
                  active === item.id
                    ? "bg-green-600 text-white"
                    : "bg-white text-black hover:bg-green-200"
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------------- SECTION ---------------- */
const Section = ({ id, title, content }) => (
  <section
    id={id}
    className="max-w-5xl mx-auto px-4 md:px-6 py-20 md:py-28 scroll-mt-[140px]"
  >
    <div className="mb-10 text-center md:text-left">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif">
        {title}
      </h2>

      <div className="mt-4 flex justify-center md:justify-start">
        <span className="w-20 h-1 bg-green-600 rounded-full"></span>
      </div>
    </div>

    <p className="text-gray-700 text-base md:text-xl leading-relaxed text-center md:text-left">
      {content}
    </p>
  </section>
);

/* ---------------- MAIN PAGE ---------------- */
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
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white font-serif scroll-smooth pt-[72px]">
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
