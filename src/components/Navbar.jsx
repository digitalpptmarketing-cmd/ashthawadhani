import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    const desktopLink = ({ isActive }) =>
        `relative text-sm font-medium tracking-wide transition
         ${isActive
            ? "text-orange-500 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-orange-500"
            : "text-white hover:text-orange-400"
         }`;

    const mobileLink = ({ isActive }) =>
        `block px-4 py-4 text-lg font-medium
         ${isActive ? "text-orange-400" : "text-white hover:text-orange-400"}`;

    return (
        <header className="fixed top-0 left-0 w-full z-50">

            {/* TOP BAR */}
            <div className="bg-black/60 backdrop-blur-md border-b border-white/10">
                <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4 py-3">

                    {/* LOGO */}
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src="/Asflogo.png"
                            alt="Ashtavadhani Santulan Foundation"
                            className="h-12 w-auto"
                        />
                        <span className="text-white font-semibold text-sm md:text-base">
                            {t("foundation_name")}
                        </span>
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden md:flex items-center gap-8">
                        <NavLink to="/" className={desktopLink}>{t("nav.home")}</NavLink>
                        <NavLink to="/about" className={desktopLink}>{t("nav.about")}</NavLink>
                        <NavLink to="/ourwork" className={desktopLink}>{t("nav.work")}</NavLink>
                        <NavLink to="/gallery" className={desktopLink}>{t("nav.media")}</NavLink>
                        <NavLink to="/contact" className={desktopLink}>{t("nav.contact")}</NavLink>
                    </nav>

                    {/* RIGHT ACTIONS */}
                    <div className="flex items-center gap-4">
                        <LanguageToggle />

                        <Link
                            to="/donate"
                            className="hidden md:inline-block px-6 py-2
                                       bg-orange-500 text-white font-semibold text-sm
                                       rounded-md hover:bg-orange-600 transition"
                        >
                            {t("nav.donate")}
                        </Link>

                        {/* MOBILE MENU BUTTON */}
                        <button
                            className="md:hidden text-white"
                            onClick={() => setOpen(true)}
                        >
                            <Menu size={26} />
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE DRAWER */}
            {open && (
                <div className="fixed inset-0 bg-black z-50 md:hidden">

                    {/* HEADER */}
                    <div className="flex justify-between items-center px-4 py-4 border-b border-white/20">
                        <span className="text-white font-semibold">Menu</span>
                        <button onClick={() => setOpen(false)} className="text-white">
                            <X size={26} />
                        </button>
                    </div>

                    {/* LINKS */}
                    <div className="flex flex-col py-4">
                        <NavLink to="/" onClick={() => setOpen(false)} className={mobileLink}>
                            {t("nav.home")}
                        </NavLink>
                        <NavLink to="/about" onClick={() => setOpen(false)} className={mobileLink}>
                            {t("nav.about")}
                        </NavLink>
                        <NavLink to="/ourwork" onClick={() => setOpen(false)} className={mobileLink}>
                            {t("nav.work")}
                        </NavLink>
                        <NavLink to="/gallery" onClick={() => setOpen(false)} className={mobileLink}>
                            {t("nav.media")}
                        </NavLink>
                        <NavLink to="/contact" onClick={() => setOpen(false)} className={mobileLink}>
                            {t("nav.contact")}
                        </NavLink>
                    </div>

                    {/* DONATE */}
                    <div className="mt-auto px-4 py-4 border-t border-white/20">
                        <Link
                            to="/donate"
                            onClick={() => setOpen(false)}
                            className="block text-center py-3 rounded-lg
                                       bg-orange-500 text-white font-bold text-lg
                                       hover:bg-orange-600 transition"
                        >
                            {t("nav.donate")}
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
