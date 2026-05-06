import { useEffect, useRef, useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import MySiteLogo from "../assets/Images/MySiteLogo.webp";
import "../StyleSheets/navBar.css";

const getLinkFromHash = (hash) => {
    const normalizedHash = hash.replace("#", "");
    const validLinks = ["home", "conoceme", "tecnologias", "projects", "educacion", "idiomas", "contact"];

    return validLinks.includes(normalizedHash) ? normalizedHash : "home";
};

const navItems = [
    { id: "conoceme", label: "Conóceme" },
    { id: "tecnologias", label: "Tecnologías" },
    { id: "projects", label: "Proyectos" },
    { id: "educacion", label: "Educación" },
    { id: "idiomas", label: "Idiomas" },
];

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState(() => getLinkFromHash(window.location.hash));
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const scrolledRef = useRef(false);
    const frameRef = useRef(0);

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        const onScroll = () => {
            if (frameRef.current) return;

            frameRef.current = window.requestAnimationFrame(() => {
                const nextScrolled = window.scrollY > 90;

                if (scrolledRef.current !== nextScrolled) {
                    scrolledRef.current = nextScrolled;
                    setScrolled(nextScrolled);
                }

                frameRef.current = 0;
            });
        };

        const onHashChange = () => {
            const nextLink = getLinkFromHash(window.location.hash);
            setActiveLink((currentLink) => (currentLink === nextLink ? currentLink : nextLink));
        };

        const onResize = () => {
            if (window.innerWidth > 1100) {
                setMenuOpen(false);
            }
        };

        onHashChange();
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("hashchange", onHashChange);
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("hashchange", onHashChange);
            window.removeEventListener("resize", onResize);

            if (frameRef.current) {
                window.cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
        setMenuOpen(false);
    };

    const getNavOffset = () => {
        if (window.innerWidth <= 767) return 96;
        if (window.innerWidth <= 1100) return 104;
        return 118;
    };

    const scrollToSection = (sectionId, align = "start") => {
        const target = document.getElementById(sectionId);

        if (!target) {
            window.location.hash = sectionId;
            return;
        }

        const targetTop = window.scrollY + target.getBoundingClientRect().top;
        const maxScrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);

        let nextScrollTop = targetTop;

        if (align === "center") {
            nextScrollTop = targetTop - (window.innerHeight / 2) + (target.offsetHeight / 2);
        } else {
            const navOffset = getNavOffset();
            nextScrollTop = targetTop - navOffset - 6;
        }

        window.scrollTo({
            top: Math.min(Math.max(nextScrollTop, 0), maxScrollable),
            behavior: "smooth",
        });

        window.history.replaceState(null, "", `#${sectionId}`);
    };

    const scrollToProjects = () => {
        const title = document.getElementById("projects");
        const cardsRow = document.querySelector(".projects-cards");

        if (!title || !cardsRow) {
            scrollToSection("projects", "start");
            return;
        }

        const navOffset = getNavOffset();
        const maxScrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
        const titleTop = window.scrollY + title.getBoundingClientRect().top;
        const cardsTop = window.scrollY + cardsRow.getBoundingClientRect().top;
        const centeredCardsScroll = cardsTop - (window.innerHeight / 2) + (cardsRow.offsetHeight / 2);
        const maxScrollForVisibleTitle = titleTop - navOffset - 14;
        const nextScrollTop = Math.min(centeredCardsScroll, maxScrollForVisibleTitle);

        window.scrollTo({
            top: Math.min(Math.max(nextScrollTop, 0), maxScrollable),
            behavior: "smooth",
        });

        window.history.replaceState(null, "", "#projects");
    };

    const scrollToPageEnd = () => {
        setActiveLink("contact");
        setMenuOpen(false);
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };

    const handleNavClick = (event, sectionId) => {
        event.preventDefault();
        onUpdateActiveLink(sectionId);

        if (sectionId === "projects" && window.innerWidth > 1100) {
            scrollToProjects();
            return;
        }

        scrollToSection(sectionId, "start");
    };

    return (
        <nav
            className={`navbar ${scrolled ? "scrolled" : ""} ${activeLink === "home" ? "is-home" : ""} ${activeLink === "contact" ? "is-contact" : ""}`}
        >
            <div className="page-shell navbar-shell">
                <a className="navbar-brand" href="#home" onClick={() => onUpdateActiveLink("home")}>
                    <img
                        className="brand-logo"
                        src={MySiteLogo}
                        alt="My Site Logo"
                        width="72"
                        height="72"
                        decoding="async"
                    />
                </a>

                <button
                    type="button"
                    className={`navbar-toggler ${menuOpen ? "" : "collapsed"}`}
                    aria-controls="site-navigation"
                    aria-expanded={menuOpen}
                    aria-label="Abrir menu"
                    onClick={() => setMenuOpen((currentValue) => !currentValue)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    id="site-navigation"
                    className={`navbar-collapse ${menuOpen ? "is-open" : ""}`}
                >
                    <div className="nav navbar-nav">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={activeLink === item.id ? "active nav-link navbar-link" : "nav-link navbar-link"}
                                onClick={(event) => handleNavClick(event, item.id)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://github.com/Ntgm220" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <SiGithub aria-hidden="true" />
                            </a>
                            <a href="https://www.linkedin.com/in/randy-made" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <SiLinkedin aria-hidden="true" />
                            </a>
                        </div>
                        <button className="vvd" onClick={scrollToPageEnd}>
                            <span>Contáctame</span>
                        </button>
                    </span>
                </div>
            </div>
        </nav>
    );
};
