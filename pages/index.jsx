import SimpleLayout from "../components/simple";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { Icon } from "@iconify/react";

export default function Home(initialData) {
    return (
        <SimpleLayout>
            <Container
                fluid
                style={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                }}
            >
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1>Hello! I'm Ezra Johnson</h1>
                        <Typewriter
                            options={{
                                strings: [
                                    "Software Engineer Intern @ Stripe",
                                    "Captain of Varsity Track and Field Team",
                                    "Senior @ Caltech",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 60,
                                pauseFor: 3000,
                            }}
                        />
                    </div>
                </section>

                <Container
                    fluid
                    style={{
                        display: "flex",
                        flexGrow: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Row style={{ width: "100%", height: "100%" }}>
                        <Col
                            xs={12}
                            md={4}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Card
                                style={{
                                    width: "100%",
                                    maxWidth: "300px",
                                    height: "auto",
                                    margin: "auto",
                                }}
                            >
                                <Card.Img
                                    variant="top"
                                    src="/profile_photo.jpg"
                                    style={{ width: "100%", height: "auto" }}
                                />
                                <Card.Body>
                                    <Card.Title>Me!</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col
                            xs={12}
                            md={8}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <div style={{ padding: "0 20px" }}>
                                <h3>About Me</h3>
                                <h5>
                                    I am a rising senior at the California
                                    Institute of Technology majoring in computer
                                    science. This summer, I returned to Stripe
                                    as a Software Engineer intern. I have
                                    professional experience coding in Ruby,
                                    TypeScript, and Python. While my interest
                                    has largely been as a backend or full-stack
                                    engineer thus far, I would be very
                                    interested in pursuing machine learning
                                    roles in the future. Beyond my academic
                                    interests, I am a captain of the Caltech
                                    track team and a leadership team member for
                                    Caltech's LGBTQ+ organization, PRISM.
                                </h5>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row className="text-center" style={{ flexWrap: "wrap" }}>
                        <Col xs={4} md={1}>
                            <Icon
                                icon="akar-icons:python-fill"
                                style={{ fontSize: "4vw", maxWidth: "48px" }}
                            />
                        </Col>
                        <Col xs={4} md={1}>
                            <Icon
                                icon="simple-icons:ruby"
                                style={{ fontSize: "4vw", maxWidth: "48px" }}
                            />
                        </Col>
                        <Col xs={4} md={1}>
                            <Icon
                                icon="la:java"
                                style={{ fontSize: "4vw", maxWidth: "48px" }}
                            />
                        </Col>
                        <Col xs={4} md={1}>
                            <Icon
                                icon="ion:logo-javascript"
                                style={{ fontSize: "4vw", maxWidth: "48px" }}
                            />
                        </Col>
                        <Col xs={4} md={1}>
                            <Icon
                                icon="cib:c"
                                style={{ fontSize: "4vw", maxWidth: "48px" }}
                            />
                        </Col>
                        <Col xs={4} md={1}>
                            <Icon
                                icon="akar-icons:react-fill"
                                style={{ fontSize: "4vw", maxWidth: "48px" }}
                            />
                        </Col>
                        <Col xs={4} md={1}>
                            <Icon
                                icon="akar-icons:nextjs-fill"
                                style={{ fontSize: "4vw", maxWidth: "48px" }}
                            />
                        </Col>
                        <Col xs={4} md={1}>
                            <Icon
                                icon="akar-icons:html-fill"
                                style={{ fontSize: "4vw", maxWidth: "48px" }}
                            />
                        </Col>
                        <Col xs={4} md={1}>
                            <Icon
                                icon="akar-icons:css-fill"
                                style={{ fontSize: "4vw", maxWidth: "48px" }}
                            />
                        </Col>
                        <Col xs={4} md={1}>
                            <a href="https://github.com/EzraJohnson02">
                                <Icon
                                    icon="akar-icons:github-fill"
                                    style={{
                                        fontSize: "4vw",
                                        maxWidth: "48px",
                                    }}
                                />
                            </a>
                        </Col>
                        <Col xs={4} md={1}>
                            <a href="https://www.linkedin.com/in/ezra-johnson/">
                                <Icon
                                    icon="akar-icons:linkedin-box-fill"
                                    style={{
                                        fontSize: "4vw",
                                        maxWidth: "48px",
                                    }}
                                />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </SimpleLayout>
    );
}
