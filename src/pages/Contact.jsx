import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="w-full font-sans">

      
      <div
        className="h-[320px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative h-full flex items-center max-w-7xl mx-auto px-6">
          <h1 className="text-white text-5xl font-bold">
            {t("contact.hero_title")}
          </h1>
        </div>
      </div>

      
      <div className="bg-white py-16 text-center">
        <p className="text-2xl text-gray-700">
          {t("contact.connect")}{" "}
          <a
            href="mailto:ashtavadhanifoundation@gmail.com"
            className="text-red-600 font-medium"
          >
            ashtavadhanifoundation@gmail.com
          </a>{" "}
          {t("contact.for_queries")}
        </p>
      </div>

     
      <div className="bg-[#1f1b17] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

          
          <div>
            <h3 className="text-xl font-semibold border-b border-red-600 inline-block pb-2 mb-6">
              {t("contact.contact_us")}
            </h3>

            <p className="font-semibold mt-6">
              {t("contact.registered_office")}
            </p>

            <p className="text-gray-300 mt-2 leading-relaxed">
              {t("contact.address")}
            </p>

            <p className="mt-3 text-gray-300">📞 9960000901</p>
            <p className="text-gray-300">
              📧 ashtavadhanifoundation@gmail.com
            </p>
          </div>

          {/* SUPPORT OFFICE */}
          <div>
            <h3 className="text-xl font-semibold border-b border-red-600 inline-block pb-2 mb-6">
              {t("contact.support_office")}
            </h3>

            <p className="text-gray-300 leading-relaxed">
              {t("contact.support_desc")}
            </p>

            <p className="mt-3 text-gray-300">📞 9175016550</p>
            <p className="text-gray-300">
              📧 ashtavadhanifoundation@gmail.com
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
