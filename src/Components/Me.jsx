import { TbUserSquareRounded } from "react-icons/tb";
import "../StyleSheets/me.css";

export const Me = () => {
    return (
        <section className="me-section">
            <div className="page-shell">
                <div className="section-title" id="conoceme">
                    <h2>Sobre mi</h2>
                    <span></span>
                </div>

                <div className="me-card">
                    <div className="me-header">
                        <div className="me-header-main">
                            <div className="me-header-icon">
                                <TbUserSquareRounded size={22} aria-hidden="true" />
                            </div>
                            <div className="me-title-wrap">
                                <h2>Ingeniero de Software</h2>
                                <p>Enfoque back-end y desarrollo en la nube</p>
                            </div>
                        </div>

                        <div className="me-date">Enero 2026</div>
                    </div>

                    <div className="me-content">
                        <p>
                            Mi nombre es Randy Made, estudiante de Ingenieria de Software apasionado por la programacion y los videojuegos.
                            Resiliente, dedicado y solidario: tres palabras que me definen tanto en lo personal como en lo profesional.
                        </p>
                        <p>
                            Cuento con experiencia en el desarrollo de productos web y de escritorio, con bases solidas como desarrollador, arquitecto, documentador y analista de software.
                            Me adapto con facilidad a nuevos desafios; si algo no lo se hacer hoy, puedes estar seguro de que lo aprendere manana.
                        </p>
                        <p>
                            Tengo un pensamiento logico bien estructurado, capaz de evaluar alternativas viables y construir soluciones de software escalables y seguras.
                            Mi objetivo es siempre entregar productos que no solo funcionen, sino que perduren.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
