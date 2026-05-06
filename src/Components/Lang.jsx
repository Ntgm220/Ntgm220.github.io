import "../StyleSheets/lang.css";

const languages = [
    {
        code: "ES",
        name: "Español",
        level: "Nativo",
        width: "100%",
    },
    {
        code: "EN",
        name: "Inglés",
        level: "Avanzado - C1",
        width: "88%",
    },
];

export const Lang = () => {
    return (
        <section className="lang-section">
            <div className="page-shell">
                <div className="section-title" id="idiomas">
                    <h2>Idiomas</h2>
                    <span></span>
                </div>

                <div className="lang-grid">
                    {languages.map((language) => (
                        <div className="lang-grid-item" key={language.code}>
                            <div className="lang-card">
                                <div className="lang-top">
                                    <span className="lang-badge">{language.code}</span>
                                    <h3 className="lang-name">{language.name}</h3>
                                </div>

                                <p className="lang-level">{language.level}</p>

                                <div className="lang-bar" aria-hidden="true">
                                    <div className="lang-bar-fill" style={{ width: language.width }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
