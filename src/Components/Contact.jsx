import "../StyleSheets/contact.css";

export const Contact = () => {
    return (
        <section className="contact-section">
            <div className="page-shell">
                <div className="section-title" id="contact">
                    <h2>Contacto</h2>
                    <span></span>
                </div>

                <div className="contact-form-shell">
                    <div className="contact-intro">
                        <h3>Hablemos</h3>
                        <p>
                            Si quieres conversar sobre una oportunidad, colaborar en un proyecto o simplemente saludar, puedes escribirme directamente al correo que aparece debajo.
                        </p>
                    </div>
                    <p>
                        ¡Contactate conmigo aqui!
                    </p>
                    <a
                        className="contact-mail-link"
                        href="mailto:Randymade220@gmail.com?subject=Me%20interesa%20trabajar%20contigo"
                    >
                        Randymade220@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
};
