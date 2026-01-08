import React from "react";
import { useParams } from "react-router-dom";
import { ourWorkData } from "../data/ourWorkData";
import { useTranslation } from "react-i18next";

const Section = ({ title, text, images }) => (
  <section className="py-20 border-b">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-extrabold mb-6">{title}</h2>
      <p className="text-lg text-gray-700 mb-10">{text}</p>

      {images && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="h-64 w-full object-cover rounded-xl shadow-md"
            />
          ))}
        </div>
      )}
    </div>
  </section>
);

export default function WorkDetails() {
  const { id } = useParams();
  const { t } = useTranslation();

  const work = ourWorkData.find((w) => w.id === id);

  if (!work) {
    return (
      <div className="py-32 text-center text-2xl">
        {t("common.notFound")}
      </div>
    );
  }

  return (
    <div className="bg-white font-serif">

      <Section
        title={t(`ourWork.${id}.whyTitle`)}
        text={t(`ourWork.${id}.whyText`)}
      />

      <Section
        title={t(`ourWork.${id}.whatTitle`)}
        text={t(`ourWork.${id}.whatText`)}
        images={work.whatImages}
      />

      <Section
        title={t(`ourWork.${id}.impactTitle`)}
        text={t(`ourWork.${id}.impactText`)}
      />

    </div>
  );
}
