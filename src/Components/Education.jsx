import { Container } from "react-bootstrap";
import "../StyleSheets/education.css";

export const Education = () => {
    return (
        <section className="education-section">
            <Container>
                <div className="section-title" id="educacion">
                    <h2>Educacion</h2>
                    <span></span>
                </div>

                <div className="education-shell">
                    <article className="education-item">
                        <div className="education-badge">
                            <span>INTEC</span>
                        </div>

                        <div className="education-body">
                            <h3>Ingenieria en Software</h3>
                            <h4>Instituto Tecnologico de Santo Domingo (INTEC)</h4>
                            <div className="education-meta">2023 - Presente (Estudiante de termino)</div>
                        </div>
                    </article>
                </div>
            </Container>
        </section>
    );
};
