import React from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import SimpleLayout from "../components/simple";

export default function Resume() {
    return (
        <SimpleLayout>
            <iframe
                src="/Ezra_Johnson_Resume.pdf"
                layout="responsive"
                width={800}
                height={1000}
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
