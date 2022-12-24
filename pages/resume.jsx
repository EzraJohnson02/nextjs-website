import React from "react";
import Button from "react-bootstrap/Button";
import SimpleLayout from "../components/simple";
import useWindowDimensions from "../components/useWindowDimensions";

export default function Resume() {
    const { height, width } = useWindowDimensions();

    return (
        <SimpleLayout>
            <iframe
                src="/Ezra_Johnson_Resume.pdf"
                layout="responsive"
                width={width}
                height={height}
                alt="My resume"
            />
            <a href="/Ezra_Johnson_Resume.pdf" download>
                <Button variant="outline-secondary" size="lg">
                    Download PDF
                </Button>
            </a>
        </SimpleLayout>
    );
}
