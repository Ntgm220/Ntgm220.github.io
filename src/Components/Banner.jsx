import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import MePic from "../assets/Images/My_Picture.jpeg";
import "../StyleSheets/banner.css";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [delta, setDelta] = useState(150 - Math.random() * 100);
    const [text, setText] = useState("");

    const toRotate = ["Ingeniero de Software", "Desarrollador Backend", "Desarrollo Agile"];

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text, delta]);

    const tick = () => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
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
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    const scrollToPageEnd = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };

    return (
        <section className="banner">
            <div className="section-anchor" id="home" aria-hidden="true"></div>
            <Container>
                <Row className="align-items-start">
                    <Col xs={12} xl={5}>
                        <div className="banner-image-wrapper">
                            <div className="banner-image-ring">
                                <img src={MePic} alt="Randy portrait" className="banner-image" />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} xl={7}>
                        <span className="banner-kicker">Disponible para crear soluciones robustas</span>
                        <h1>{`Hola, soy Randy`}</h1>
                        <h2>
                            <span className="wrap">{text}</span>
                        </h2>
                        <p>
                            Detrás de cada buen producto de software hay alguien que no se rinde. 
                            Ese alguien soy yo. ¿Quieres saber cómo lo hago?
                        </p>
                        <button className="banner-cta" onClick={scrollToPageEnd}>
                            Contactame <ArrowRightCircle size={25} />
                        </button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
