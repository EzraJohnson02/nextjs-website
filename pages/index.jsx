import SimpleLayout from "../components/simple";
import "bootstrap/dist/css/bootstrap.min.css";
import Typical from "react-typical";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Icon } from "@iconify/react";

export default function Home(initialData) {
    return (
        <SimpleLayout>
            <section className="jumbotron text-center">
                <div className="container">
                    <h1>Howdy! I'm Ezra</h1>
                    <Typical
                        steps={[
                            "software engineer",
                            5000,
                            "junior @ Caltech",
                            5000,
                            "captain on the track team",
                            5000,
                        ]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </div>
            </section>

            <Container fluid>
                <Row>
                    <Col>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src="/profile_photo.jpg" />
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center" }}>
                                    Me!
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <h4>
                            <br />
                            <br />

                            <Typical
                                style={{ textAlign: "center" }}
                                steps={[
                                    "This is my website. It should give a deeper understanding of my skills and interests than a simple resume, and it has been more fun for me to create. Let me know if you have any ways I could improve it!",
                                ]}
                                wrapper="p"
                            />
                        </h4>
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
                        <Icon icon="tabler:sql" style={{ fontSize: "48px" }} />
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
