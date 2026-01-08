import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "mr" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-full border border-white/40
                 text-white text-sm font-semibold
                 hover:bg-white hover:text-black transition"
    >
      {i18n.language === "en" ? "मराठी" : "English"}
    </button>
  );
};

export default LanguageToggle;
