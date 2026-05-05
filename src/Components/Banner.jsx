import { useEffect, useState } from "react";
import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import MePic from "../assets/Images/My_Picture.webp";
import "../StyleSheets/banner.css";

const roles = ["Ingeniero de Software", "Desarrollador Backend", "Desarrollo Agile"];

const RotatingRole = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [delta, setDelta] = useState(150 - Math.random() * 100);
    const [text, setText] = useState("");

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text, delta]);

    const tick = () => {
        const i = loopNum % roles.length;
        const fullText = roles[i];
        const updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);
        setDelta(100);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(3000);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum((currentLoop) => currentLoop + 1);
            setDelta(500);
        }
    };

    return <span className="wrap">{text}</span>;
};

export const Banner = () => {
    const scrollToPageEnd = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };

    return (
        <section className="banner">
            <div className="section-anchor" id="home" aria-hidden="true"></div>
            <div className="page-shell">
                <div className="banner-grid">
                    <div className="banner-media">
                        <div className="banner-image-wrapper">
                            <div className="banner-image-ring">
                                <img
                                    src={MePic}
                                    alt="Randy portrait"
                                    className="banner-image"
                                    width="362"
                                    height="362"
                                    fetchPriority="high"
                                    decoding="async"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="banner-copy">
                        <span className="banner-kicker">Disponible para crear soluciones robustas</span>
                        <h1>{`Hola, soy Randy`}</h1>
                        <h2>
                            <RotatingRole />
                        </h2>
                        <p>
                            Detras de cada buen producto de software hay alguien que no se rinde.
                            Ese alguien soy yo. Quieres saber como lo hago?
                        </p>
                        <button className="banner-cta" onClick={scrollToPageEnd}>
                            Contactame <HiOutlineArrowRightCircle size={25} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
