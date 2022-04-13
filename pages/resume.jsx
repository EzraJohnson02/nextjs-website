import React from "react";
import Image from "next/image";
import SimpleLayout from "../components/simple";

export default function Resume() {
    return (
        <SimpleLayout>
            <Image
                src="/Ezra_Johnson_Resume.jpg"
                layout="responsive"
                width={800}
                height={1000}
                quality="100"
            />
        </SimpleLayout>
    );
}
