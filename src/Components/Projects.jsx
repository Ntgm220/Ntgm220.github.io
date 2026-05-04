import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "../StyleSheets/projects.css";

export const Projects = () => {
    return (
        <section className="projects">
            <Container>
                <div className="proj-bx">
                    <Row className="justify-content-center">
                        <Col md={12} className="text-center">
                            <div className="title-bx" id="projects">
                                <h2>Proyectos</h2>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center projects-cards">
                        <Col md={6} lg={6} className="d-flex justify-content-center project-card-col">
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Title>CarniCheck</Card.Title>
                                    <Card.Text>
                                        Sistema para la inspeccion de establecimientos que manejan el uso de carnicos
                                        para su venta, almacenamiento, produccion o sacrificio.
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>C#</ListGroup.Item>
                                    <ListGroup.Item>React</ListGroup.Item>
                                    <ListGroup.Item>NodeJs</ListGroup.Item>
                                    <ListGroup.Item>SQL Server</ListGroup.Item>
                                    <ListGroup.Item className="list-group-2">Proyecto Universitario</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>

                        <Col md={6} lg={6} className="d-flex justify-content-center project-card-col">
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Title>API Universitaria</Card.Title>
                                    <Card.Text>
                                        API REST desarrollada para la gestion integral de un sistema universitario,
                                        orientada a la administracion de estudiantes, docentes e inscripciones.
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>C#</ListGroup.Item>
                                    <ListGroup.Item>SQL Server</ListGroup.Item>
                                    <ListGroup.Item>Auth0</ListGroup.Item>
                                    <ListGroup.Item className="list-group-2">Proyecto Universitario</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>

                        <Col md={6} lg={6} className="d-flex justify-content-center project-card-col">
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Title>Business Dashboard</Card.Title>
                                    <Card.Text>
                                        Sistema web tipo dashboard para visualizar y gestionar reportes de venta mediante
                                        una interfaz moderna, con frontend interactivo, API backend, autenticacion
                                        por tokens y manejo seguro de contrasenas.
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>C#</ListGroup.Item>
                                    <ListGroup.Item>React</ListGroup.Item>
                                    <ListGroup.Item>SQL Server</ListGroup.Item>
                                    <ListGroup.Item>JWT</ListGroup.Item>
                                    <ListGroup.Item>BCrypt</ListGroup.Item>
                                    <ListGroup.Item className="list-group-2">Proyecto Freelancer</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>

                        <Col md={6} lg={6} className="d-flex justify-content-center project-card-col">
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Title>Compilador C#</Card.Title>
                                    <Card.Text>
                                        Interprete de lenguaje de programacion personalizado creado con ANTLR4, con
                                        expresiones aritmeticas, estructuras de control y funciones recursivas.
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>C#</ListGroup.Item>
                                    <ListGroup.Item>ANTLR4</ListGroup.Item>
                                    <ListGroup.Item className="list-group-2">Proyecto Universitario</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>

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
            </Container>
        </section>
    );
};
