import { useEffect, useRef, useState } from "react";
import "./Menu.css";
import { AnimatePresence, motion } from "framer-motion";

interface MenuProps {
  setPage: (page: number) => void;
}

const Menu = ({ setPage }: MenuProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  // Optional: lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  // click outside menu and close
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="menu-btn" onClick={() => setOpen(!isOpen)}>
        ☰
      </div>
      {isOpen && <div className="overlay" onClick={() => setOpen(false)}></div>}

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            key="sidebar"
            ref={sidebarRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="menu-content"
          >
            <nav>
              <a href="#all" onClick={() => setOpen(false)}>
                X
              </a>
              <a
                href="#home"
                onClick={() => {
                  setPage(0);
                  setOpen(false);
                }}
              >
                Home
              </a>
              {/* <a
                href="#about"
                onClick={() => {
                  setPage(1);
                  setOpen(false);
                }}
              >
                About
              </a> */}
              <a
                href="#team"
                onClick={() => {
                  setPage(2);
                  setOpen(false);
                }}
              >
                Team
              </a>
              <a
                href="#events"
                onClick={() => {
                  setPage(3);
                  setOpen(false);
                }}
              >
                Events
              </a>
              <a
                href="#sponsor"
                onClick={() => {
                  setPage(4);
                  setOpen(false);
                }}
              >
                Sponsorship
              </a>
              <a
                href="#code-of-conduct"
                onClick={() => {
                  setPage(5);
                  setOpen(false);
                }}
              >
                Code of Conduct
              </a>

              {/* <a
                href="#volunteer"
                onClick={() => {
                  // setPage(4);
                  // setOpen(false);
                }}
                style={{ color: "grey", cursor: "not-allowed" }}
              >
                Volunteer
              </a>
              <a
                href="#contact"
                onClick={() => {
                  // setPage(5);
                  // setOpen(false);
                }}
                style={{ color: "grey", cursor: "not-allowed" }}
              >
                Contact
              </a> */}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
