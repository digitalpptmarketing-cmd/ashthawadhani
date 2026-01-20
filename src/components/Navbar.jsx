import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/ourwork", label: t("nav.work") },
    { to: "/gallery", label: t("nav.media") },
    { to: "/contact", label: t("nav.contact") },
  ];

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

          {/* DESKTOP NAV (NO PILL) */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                className={({ isActive }) =>
                  `relative text-sm font-medium tracking-wide transition
                   ${
                     isActive
                       ? "text-orange-500 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-orange-500"
                       : "text-white hover:text-orange-400"
                   }`
                }
              >
                {/* 🔥 Firecracker sparks */}
                {hoverIndex === index && (
                  <span className="absolute inset-0 pointer-events-none">
                    <span className="spark"></span>
                    <span className="spark"></span>
                    <span className="spark"></span>
                    <span className="spark"></span>
                    <span className="spark"></span>
                    <span className="spark"></span>
                  </span>
                )}

                {item.label}
              </NavLink>
            ))}
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
          <div className="flex justify-between items-center px-4 py-4 border-b border-white/20">
            <span className="text-white font-semibold">Menu</span>
            <button onClick={() => setOpen(false)} className="text-white">
              <X size={26} />
            </button>
          </div>

          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={mobileLink}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

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
