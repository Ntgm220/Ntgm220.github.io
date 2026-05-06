import "../StyleSheets/education.css";

export const Education = () => {
    return (
        <section className="education-section">
            <div className="page-shell">
                <div className="section-title" id="educacion">
                    <h2>Educación </h2>
                    <span></span>
                </div>

                <div className="education-shell">
                    <article className="education-item">
                        <div className="education-badge">
                            <span>INTEC</span>
                        </div>

                        <div className="education-body">
                            <h3>Ingeniería en Software</h3>
                            <h4>Instituto Tecnológico de Santo Domingo (INTEC)</h4>
                            <div className="education-meta">2023 - Presente</div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};
