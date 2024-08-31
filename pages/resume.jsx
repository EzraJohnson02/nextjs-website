import React from "react";
import Button from "react-bootstrap/Button";
import SimpleLayout from "../components/simple";
import useWindowDimensions from "../components/useWindowDimensions";
import { Container } from "react-bootstrap";

export default function Resume() {
    return (
        <SimpleLayout>
            <Container
                fluid
                style={{
                    padding: 0,
                    margin: 0,
                    width: "100%",
                }}
            >
                <iframe
                    src="/Ezra_Johnson_Resume.pdf"
                    style={{
                        width: "100%",
                        height: "80vh",
                        border: "none",
                    }}
                    title="My resume"
                />
                <div style={{ textAlign: "center", marginTop: "1rem" }}>
                    <a href="/Ezra_Johnson_Resume.pdf" download>
                        <Button variant="outline-secondary" size="lg">
                            Download PDF
                        </Button>
                    </a>
                </div>
            </Container>
        </SimpleLayout>
    );
}
