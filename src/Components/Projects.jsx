import "../StyleSheets/projects.css";

const projects = [
    {
        title: "CarniCheck",
        description:
            "Sistema para la inspeccion de establecimientos que manejan el uso de carnicos para su venta, almacenamiento, produccion o sacrificio.",
        stack: ["C#", "React", "NodeJs", "SQL Server"],
        tag: "Proyecto Universitario",
    },
    {
        title: "API Universitaria",
        description:
            "API REST desarrollada para la gestion integral de un sistema universitario, orientada a la administracion de estudiantes, docentes e inscripciones.",
        stack: ["C#", "SQL Server", "Auth0"],
        tag: "Proyecto Universitario",
    },
    {
        title: "Business Dashboard",
        description:
            "Sistema web tipo dashboard para visualizar y gestionar reportes de venta mediante una interfaz moderna, con frontend interactivo, API backend, autenticacion por tokens y manejo seguro de contrasenas.",
        stack: ["C#", "React", "SQL Server", "JWT", "BCrypt"],
        tag: "Proyecto Freelancer",
    },
    {
        title: "Compilador C#",
        description:
            "Interprete de lenguaje de programacion personalizado creado con ANTLR4, con expresiones aritmeticas, estructuras de control y funciones recursivas.",
        stack: ["C#", "ANTLR4"],
        tag: "Proyecto Universitario",
    },
];

export const Projects = () => {
    return (
        <section className="projects">
            <div className="page-shell">
                <div className="proj-bx">
                    <div className="title-bx" id="projects">
                        <h2>Proyectos</h2>
                    </div>

                    <div className="projects-cards">
                        {projects.map((project) => (
                            <article className="project-card-col" key={project.title}>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">{project.title}</h3>
                                        <p className="card-text">{project.description}</p>
                                    </div>

                                    <ul className="project-stack" aria-label={`Tecnologias usadas en ${project.title}`}>
                                        {project.stack.map((item) => (
                                            <li className="list-group-item" key={`${project.title}-${item}`}>
                                                {item}
                                            </li>
                                        ))}
                                        <li className="list-group-item list-group-2">{project.tag}</li>
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="projects-more">
                        <a
                            className="projects-more-link"
                            href="https://github.com/Ntgm220?tab=repositories"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Mas proyectos aqui
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
