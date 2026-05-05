import { memo } from "react";
import {
    SiClickup, SiDocker, SiDotnet, SiGit, SiGithub,
    SiGraphql, SiJavascript, SiJira, SiLinkedin, SiMongodb,
    SiNodedotjs, SiOpenproject, SiPostgresql, SiReact, SiSqlite, SiVite,
} from "react-icons/si";
import {
    TbBrandAzure, TbBrandCSharp, TbBrandFigma, TbBrandVscode, TbDatabase,
} from "react-icons/tb";
import "../StyleSheets/tecnologia.css";

const categories = [
    {
        cat: "FE",
        label: "Front-End",
        color: "#61dafb",
        items: [
            { name: "React",      Icon: SiReact,      color: "#61dafb" },
            { name: "JavaScript", Icon: SiJavascript,  color: "#f7df1e" },
            { name: "GraphQL",    Icon: SiGraphql,     color: "#ff4fc5" },
            { name: "Vite",       Icon: SiVite,        color: "#b184ff" },
        ],
    },
    {
        cat: "BE",
        label: "Back-End",
        color: "#a784ff",
        items: [
            { name: "C#",         Icon: TbBrandCSharp, color: "#a784ff" },
            { name: ".NET",       Icon: SiDotnet,      color: "#9b72ff" },
            { name: "Node.js",    Icon: SiNodedotjs,   color: "#68a063" },
            { name: "PostgreSQL", Icon: SiPostgresql,  color: "#4d81c2" },
            { name: "MongoDB",    Icon: SiMongodb,     color: "#47a248" },
            { name: "SQLite",     Icon: SiSqlite,      color: "#4db1ff" },
            { name: "SQL Server", Icon: TbDatabase,    color: "#ff6b81" },
        ],
    },
    {
        cat: "DO",
        label: "DevOps & Herramientas",
        color: "#59b3ff",
        items: [
            { name: "Azure",        Icon: TbBrandAzure,  color: "#59b3ff" },
            { name: "Azure DevOps", Icon: TbBrandAzure,  color: "#5c8dff" },
            { name: "Docker",       Icon: SiDocker,      color: "#2496ed" },
            { name: "Git",          Icon: SiGit,         color: "#f1502f" },
            { name: "GitHub",       Icon: SiGithub,      color: "#dde0f0" },
            { name: "Jira",         Icon: SiJira,        color: "#2684ff" },
            { name: "ClickUp",      Icon: SiClickup,     color: "#8b5cf6" },
            { name: "Figma",        Icon: TbBrandFigma,  color: "#f24e1e" },
            { name: "VS Code",      Icon: TbBrandVscode, color: "#2f9cf4" },
            { name: "OpenProject",  Icon: SiOpenproject, color: "#5a7dff" },
            { name: "LinkedIn",     Icon: SiLinkedin,    color: "#0a66c2" },
        ],
    },
];

const PeriodicCell = memo(({ name, Icon, color, index }) => (
    <div className="periodic-cell" style={{ "--tech-color": color }}>
        <span className="cell-index">{String(index + 1).padStart(2, "0")}</span>
        <div className="cell-icon-wrap">
            <Icon className="cell-icon" style={{ color }} aria-hidden="true" />
        </div>
        <span className="cell-name">{name}</span>
    </div>
));

const CatSection = memo(({ cat, label, color, items }) => (
    <div className="cat-section" style={{ "--cat-color": color }}>
        <div className="cat-header">
            <div className="cat-header-left">
                <span className="cat-dot" />
                <span className="cat-key">{cat}</span>
                <span className="cat-name">{label}</span>
            </div>
            <div className="cat-divider" />
            <span className="cat-count">{String(items.length).padStart(2, "0")}</span>
        </div>
        <div className="cat-cells-grid">
            {items.map((item, i) => (
                <PeriodicCell key={item.name} {...item} index={i} />
            ))}
        </div>
    </div>
));

export const Tecnologias = () => (
    <section className="tecnologias">
        <div className="page-shell">
            <div className="title-box" id="tecnologias">
                <h1>Tecnologias</h1>
            </div>
            <div className="tecno-bx">
                {categories.map((cat) => (
                    <CatSection key={cat.cat} {...cat} />
                ))}
            </div>
        </div>
    </section>
);
