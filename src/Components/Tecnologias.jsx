import {
    SiClickup,
    SiDocker,
    SiDotnet,
    SiGit,
    SiGithub,
    SiGraphql,
    SiJavascript,
    SiJira,
    SiLinkedin,
    SiMongodb,
    SiNodedotjs,
    SiOpenproject,
    SiPostgresql,
    SiReact,
    SiSqlite,
    SiVite,
} from "react-icons/si";
import {
    TbBrandAzure,
    TbBrandCSharp,
    TbBrandFigma,
    TbBrandVscode,
    TbDatabase,
} from "react-icons/tb";
import "../StyleSheets/tecnologia.css";

const developmentTechnologies = [
    { name: "C#", Icon: TbBrandCSharp, color: "#a784ff" },
    { name: "GraphQL", Icon: SiGraphql, color: "#ff4fc5" },
    { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
    { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
    { name: ".NET", Icon: SiDotnet, color: "#7c4dff" },
    { name: "Node.js", Icon: SiNodedotjs, color: "#68a063" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#4d81c2" },
    { name: "React", Icon: SiReact, color: "#61dafb" },
    { name: "SQLite", Icon: SiSqlite, color: "#4db1ff" },
    { name: "SQL Server", Icon: TbDatabase, color: "#ff6b81" },
    { name: "Vite", Icon: SiVite, color: "#b184ff" },
];

const toolsTechnologies = [
    { name: "Azure", Icon: TbBrandAzure, color: "#59b3ff" },
    { name: "Azure DevOps", Icon: TbBrandAzure, color: "#5c8dff" },
    { name: "ClickUp", Icon: SiClickup, color: "#8b5cf6" },
    { name: "Docker", Icon: SiDocker, color: "#2496ed" },
    { name: "Figma", Icon: TbBrandFigma, color: "#f24e1e" },
    { name: "Git", Icon: SiGit, color: "#f1502f" },
    { name: "GitHub", Icon: SiGithub, color: "#f5f7ff" },
    { name: "Jira", Icon: SiJira, color: "#2684ff" },
    { name: "LinkedIn", Icon: SiLinkedin, color: "#0a66c2" },
    { name: "OpenProject", Icon: SiOpenproject, color: "#1461ff" },
    { name: "VS Code", Icon: TbBrandVscode, color: "#2f9cf4" },
];

const TechnologyItem = ({ name, Icon, color }) => (
    <div className="tech-item">
        <div className="tech-icon-shell">
            <Icon className="tech-icon" style={{ color }} aria-hidden="true" />
        </div>
        <h5>{name}</h5>
    </div>
);

const TechnologyGrid = ({ items }) => (
    <div className="tech-grid">
        {items.map((item) => (
            <TechnologyItem key={item.name} {...item} />
        ))}
    </div>
);

export const Tecnologias = () => {
    return (
        <section className="tecnologias">
            <div className="page-shell">
                <div className="title-box" id="tecnologias">
                    <h1>Tecnologias</h1>
                </div>
                <div className="tecno-bx">
                    <p>Stack Tecnologico</p>
                    <TechnologyGrid items={developmentTechnologies} />

                    <p>Infraestructura, DevOps y Gestion</p>
                    <TechnologyGrid items={toolsTechnologies} />
                </div>
            </div>
        </section>
    );
};
