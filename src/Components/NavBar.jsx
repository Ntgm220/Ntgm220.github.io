import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import GitHub from "../assets/Logo/Tools/GitHub-Logo.png";
import LinkedIn from "../assets/Logo/Tools/LinkedInLogo.png";
import MySiteLogo from "../assets/Images/MySiteLogo.png";
import "../StyleSheets/navBar.css";

const getLinkFromHash = (hash) => {
    const normalizedHash = hash.replace("#", "");
    const validLinks = ["home", "conoceme", "tecnologias", "projects", "educacion", "idiomas", "contact"];

    return validLinks.includes(normalizedHash) ? normalizedHash : "home";
};

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState(() => getLinkFromHash(window.location.hash));
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        const onScroll = () => {
            setScrolled(window.scrollY > 90);
        };

        const onHashChange = () => {
            setActiveLink(getLinkFromHash(window.location.hash));
        };

        onHashChange();
        onScroll();
        window.addEventListener("scroll", onScroll);
        window.addEventListener("hashchange", onHashChange);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("hashchange", onHashChange);
        };
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
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
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };

    return (
        <Navbar
            expand="xl"
            className={`${scrolled ? "scrolled" : ""} ${activeLink === "home" ? "is-home" : ""} ${activeLink === "contact" ? "is-contact" : ""}`}
        >
            <Container>
                <Navbar.Brand href="#home" onClick={() => setActiveLink("home")}>
                    <img className="brand-logo" src={MySiteLogo} alt="My Site Logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#conoceme"
                            className={activeLink === "conoceme" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("conoceme")}
                        >
                            Conoceme
                        </Nav.Link>
                        <Nav.Link
                            href="#tecnologias"
                            className={activeLink === "tecnologias" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("tecnologias")}
                        >
                            Tecnologias
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                            onClick={(event) => {
                                event.preventDefault();
                                onUpdateActiveLink("projects");
                                if (window.innerWidth > 1100) {
                                    scrollToProjects();
                                    return;
                                }

                                scrollToSection("projects", "start");
                            }}
                        >
                            Proyectos
                        </Nav.Link>
                        <Nav.Link
                            href="#educacion"
                            className={activeLink === "educacion" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("educacion")}
                        >
                            Educacion
                        </Nav.Link>
                        <Nav.Link
                            href="#idiomas"
                            className={activeLink === "idiomas" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("idiomas")}
                        >
                            Idiomas
                        </Nav.Link>
                    </Nav>

                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://github.com/Ntgm220" target="_blank" rel="noreferrer"  aria-label="GitHub">
                                <img src={GitHub} alt="" />
                            </a>
                            <a href="https://www.linkedin.com/in/randy-made" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <img src={LinkedIn} alt="" />
                            </a>
                        </div>
                        <button
                            className="vvd"
                            onClick={scrollToPageEnd}
                        >
                            <span>Contactame</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
