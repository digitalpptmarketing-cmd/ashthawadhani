import React from "react";
import { useTranslation } from "react-i18next";

export default function Donate() {
  const { t } = useTranslation();

  return (
    <div className="w-full font-sans">

      {/* BACKGROUND */}
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/smilechild.avif')" }}
      >
        {/* SOFT OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* CONTENT */}
        <div className="relative z-10 py-24 px-6">

          {/* HEADER */}
          <div className="text-center mb-20 text-white">
            <h1 className="text-4xl md:text-5xl font-bold font-serif">
              {t("donate.title")}
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto opacity-90">
              {t("donate.subtitle")}
            </p>
          </div>

          {/* GRID */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* QR GLASS CARD */}
            <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-10 text-center text-white shadow-lg">
              <h2 className="text-3xl font-bold mb-6 font-serif">
                {t("donate.scan_title")}
              </h2>

              <div className="flex justify-center mb-6">
                <img
                  src="/donation-qr.png"
                  alt="Donate QR Code"
                  className="w-64 h-64 object-contain bg-white p-3 rounded-lg"
                />
              </div>

              <p className="text-lg leading-relaxed opacity-90">
                {t("donate.scan_desc")}
              </p>

              <p className="mt-4 text-sm opacity-75">
                {t("donate.note")}
              </p>
            </div>

            {/* CONTRIBUTIONS GLASS CARD */}
            <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-10 text-white shadow-lg space-y-8">

              <h2 className="text-3xl font-bold font-serif">
                {t("donate.suggested")}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { amount: "₹500", text: t("donate.amount_500") },
                  { amount: "₹1,000", text: t("donate.amount_1000") },
                  { amount: "₹2,500", text: t("donate.amount_2500") },
                  { amount: "₹5,000+", text: t("donate.amount_5000") },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/25 border border-white/30 rounded-xl p-6 text-center hover:bg-white/30 transition"
                  >
                    <h3 className="text-2xl font-bold text-yellow-300">
                      {item.amount}
                    </h3>
                    <p className="mt-3 text-sm opacity-90">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* TRUST NOTE */}
              <div className="bg-white/25 border-l-4 border-green-400 p-6 rounded-lg">
                <p className="text-sm leading-relaxed opacity-90">
                  <strong>{t("donate.trust_title")}</strong>{" "}
                  {t("donate.trust_desc")}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
