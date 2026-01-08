import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
    const { t } = useTranslation();

    const navItemClass = ({ isActive }) =>
        `px-4 py-2 rounded-full text-sm font-semibold transition
        ${isActive
            ? "bg-black text-white"
            : "bg-black/70 text-white hover:bg-black"
        }`;

    return (
        <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-black/20 font-serif">
            <div className="max-w-[1300px] mx-auto flex items-center justify-between px-6 py-3">

                {/* LOGO */}
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src="/Asflogo.png"
                        alt="Ashthvadhani Santulan Foundation"
                        className="h-14 w-auto"
                    />
                    <p className="font-bold text-white text-sm md:text-base">
                        {t("foundation_name")}
                    </p>
                </Link>

                {/* NAV LINKS */}
                <div className="hidden md:flex items-center gap-3">
                    <NavLink to="/" className={navItemClass}>
                        {t("nav.home")}
                    </NavLink>
                    <NavLink to="/about" className={navItemClass}>
                        {t("nav.about")}
                    </NavLink>
                    <NavLink to="/ourwork" className={navItemClass}>
                        {t("nav.work")}
                    </NavLink>
                    <NavLink to="/gallery" className={navItemClass}>
                        {t("nav.media")}
                    </NavLink>
                    <NavLink to="/contact" className={navItemClass}>
                        {t("nav.contact")}
                    </NavLink>
                </div>

                {/* RIGHT ACTIONS */}
                <div className="flex items-center gap-4">

                    {/* LANGUAGE TOGGLE */}
                    <LanguageToggle />

                    {/* DONATE */}
                    <Link
                        to="/donate"
                        className="px-6 py-2 rounded-full bg-orange-500 text-white font-bold
                                   hover:bg-orange-600 transition"
                    >
                        {t("nav.donate")}
                    </Link>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
