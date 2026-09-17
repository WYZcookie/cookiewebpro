"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { navItems, siteConfig } from "@/data/site";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const previousY = useRef(0);
  const firstMenuLink = useRef<HTMLAnchorElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = previousY.current;
    setScrolled(latest > 24);

    if (!menuOpen) {
      if (latest > 140 && latest > previous + 6) {
        setHidden(true);
      } else if (latest < previous - 6 || latest < 80) {
        setHidden(false);
      }
    }

    previousY.current = latest;
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    if (menuOpen) {
      firstMenuLink.current?.focus();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <motion.header
        className="site-nav"
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: hidden ? -110 : 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`site-nav__inner${scrolled ? " is-scrolled" : ""}`}>
          <a className="brand-link" href="#top" aria-label="回到顶部">
            <span className="brand-mark" aria-hidden="true">
              {siteConfig.initials}
            </span>
            <span className="brand-name">{siteConfig.name}</span>
          </a>

          <nav className="desktop-nav" aria-label="主导航">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="nav-contact" href="#contact">
            与我联系
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "关闭导航菜单" : "打开导航菜单"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="移动端导航"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.nav
              className="mobile-menu__nav"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
              }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  ref={index === 0 ? firstMenuLink : undefined}
                  href={item.href}
                  onClick={closeMenu}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <span>0{index + 1}</span>
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                className="mobile-menu__contact"
                href="#contact"
                onClick={closeMenu}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                联系方式
              </motion.a>
            </motion.nav>
            <div className="mobile-menu__footer">
              <span>{siteConfig.role}</span>
              <span>个人主页 / 2026</span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}