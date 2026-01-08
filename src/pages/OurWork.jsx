import React from "react";
import { ourWorkData } from "../data/ourWorkData";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function OurWork() {
  const { t } = useTranslation();

  return (
    <div className="bg-white py-20 font-serif">
      <h1 className="text-4xl font-bold text-center mb-16">
        {t("ourWork.title")}
      </h1>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {ourWorkData.map((work) => (
          <Link
            key={work.id}
            to={`/ourwork/${work.id}`}
            className="group bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={work.image}
              alt=""
              className="h-56 w-full object-cover group-hover:scale-105 transition"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">
                {t(`ourWork.${work.id}.title`)}
              </h2>

              <p className="text-gray-600">
                {t(`ourWork.${work.id}.short`)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
