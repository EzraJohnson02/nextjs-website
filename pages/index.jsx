import SimpleLayout from "../components/simple";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { Icon } from "@iconify/react";

export default function Home(initialData) {
    return (
        <SimpleLayout>
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

            <Container fluid>
                <Row>
                    <Col>
                        <Card
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "50%",
                            }}
                        >
                            <Card.Img variant="top" src="/profile_photo.jpg" />
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center" }}>
                                    Me!
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "30px",
                            }}
                        >
                            I am a rising senior at the California Institute of
                            Technology majoring in computer science. This
                            summer, I am returning to Stripe as a Software
                            Engineer intern. I have professional experience
                            coding in Ruby, TypeScript, and Python. While my
                            interest has largely been as a backend or full-stack
                            engineer thus far, I would be very interested in
                            pursuing machine learning roles in the future.
                            Beyond my academic interests, I am a captain of the
                            Caltech track team and a leadership team member for
                            Caltech's LGBTQ+ organization.
                        </Card>
                    </Col>
                </Row>
                <br />
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
        </SimpleLayout>
    );
}
