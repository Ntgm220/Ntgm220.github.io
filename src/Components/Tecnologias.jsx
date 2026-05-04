import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../StyleSheets/tecnologia.css";

export const Tecnologias = () => {
    const developmentRaw = import.meta.glob("../assets/Logo/Development/*.{png,jpg,jpeg,svg}", { eager: true });
    const toolsRaw = import.meta.glob("../assets/Logo/Tools/*.{png,jpg,jpeg,svg}", { eager: true });

    const formatImages = (rawObj) => {
        return Object.fromEntries(
            Object.entries(rawObj).map(([path, module]) => {
                const fileName = path.split("/").pop().split(".")[0].replace("-Logo", "");
                return [fileName, module.default];
            })
        );
    };

    const images = {
        development: formatImages(developmentRaw),
        tools: formatImages(toolsRaw),
    };

    const carouselSettings = {
        responsive: {
            desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
            tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
        },
        autoPlay: true,
        autoPlaySpeed: 1,
        infinite: true,
        rewind: false,
        customTransition: "transform 2500ms linear",
        transitionDuration: 2500,
        arrows: false,
        pauseOnHover: false,
        containerClass: "carousel-container",
        itemClass: "carousel-item-padding",
    };

    return (
        <section className="tecnologias">
            <Container>
                <Row>
                    <Col>
                        <div className="title-box" id="tecnologias">
                            <h1>Tecnologias</h1>
                        </div>
                        <div className="tecno-bx">
                            <p>Stack Tecnologico</p>

                            <Carousel {...carouselSettings}>
                                {Object.entries(images.development).map(([name, url]) => (
                                    <div className="item" key={name}>
                                        <img src={url} alt={name} />
                                        <h5>{name.replace("_", " ")}</h5>
                                    </div>
                                ))}
                            </Carousel>

                            <p>Infraestructura, DevOps y Gestion</p>
                            <Carousel {...carouselSettings}>
                                {Object.entries(images.tools).map(([name, url]) => (
                                    <div className="item" key={name}>
                                        <img src={url} alt={name} />
                                        <h5>{name.replace("_", " ")}</h5>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
