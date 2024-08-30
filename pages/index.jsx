import SimpleLayout from "../components/simple";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { Icon } from "@iconify/react";

export default function Home(initialData) {
    return (
        <SimpleLayout>
            {" "}
            <Container
                fluid
                style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
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
                        height: "65vh",
                        alignItems: "center",
                    }}
                >
                    <Row>
                        <Col md={4}>
                            <Card style={{ width: "20vw", height: "auto" }}>
                                <Card.Img
                                    variant="top"
                                    src="/profile_photo.jpg"
                                />
                                <Card.Body>
                                    <Card.Title>Me!</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={8}>
                            <Row
                                style={{
                                    textAlign: "left",
                                    display: "flex",
                                }}
                            >
                                <div>
                                    <h3>About Me</h3>
                                    <h5>
                                        I am a rising senior at the California
                                        Institute of Technology majoring in
                                        computer science. This summer, I
                                        returned to Stripe as a Software
                                        Engineer intern. I have professional
                                        experience coding in Ruby, TypeScript,
                                        and Python. While my interest has
                                        largely been as a backend or full-stack
                                        engineer thus far, I would be very
                                        interested in pursuing machine learning
                                        roles in the future. Beyond my academic
                                        interests, I am a captain of the Caltech
                                        track team and a leadership team member
                                        for Caltech's LGBTQ+ organization,
                                        PRISM.
                                    </h5>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <Icon
                                icon="akar-icons:python-fill"
                                style={{ fontSize: "48px" }}
                            />
                        </Col>
                        <Col>
                            <Icon
                                icon="simple-icons:ruby"
                                style={{ fontSize: "48px" }}
                            />
                        </Col>
                        <Col>
                            <Icon icon="la:java" style={{ fontSize: "48px" }} />
                        </Col>
                        <Col>
                            <Icon
                                icon="ion:logo-javascript"
                                style={{ fontSize: "48px" }}
                            />
                        </Col>
                        <Col>
                            <Icon icon="cib:c" style={{ fontSize: "48px" }} />
                        </Col>
                        <Col>
                            <Icon
                                icon="akar-icons:react-fill"
                                style={{ fontSize: "48px" }}
                            />
                        </Col>
                        <Col>
                            <Icon
                                icon="akar-icons:nextjs-fill"
                                style={{ fontSize: "48px" }}
                            />
                        </Col>
                        <Col>
                            <Icon
                                icon="akar-icons:html-fill"
                                style={{ fontSize: "48px" }}
                            />
                        </Col>
                        <Col>
                            <Icon
                                icon="akar-icons:css-fill"
                                style={{ fontSize: "48px" }}
                            />
                        </Col>
                        <Col>
                            {" "}
                            <a href="https://github.com/EzraJohnson02">
                                <Icon
                                    icon="akar-icons:github-fill"
                                    style={{ fontSize: "48px" }}
                                />
                            </a>
                        </Col>
                        <Col>
                            {" "}
                            <a href="https://www.linkedin.com/in/ezra-johnson/">
                                <Icon
                                    icon="akar-icons:linkedin-box-fill"
                                    style={{ fontSize: "48px" }}
                                />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </SimpleLayout>
    );
}
