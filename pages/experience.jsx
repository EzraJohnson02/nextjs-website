import React from "react";
import SimpleLayout from "../components/simple";
import useWindowDimensions from "../components/useWindowDimensions";
import { Chrono } from "react-chrono";

export default function Experience() {
    const { height, width } = useWindowDimensions();

    const items = [
        {
            title: "Summer 2023",
            cardTitle: "Stripe",
            cardDetailedText: "I will work for Stripe this upcoming summer!",
        },

        {
            title: "June 2022 - September 2022",
            cardTitle: "Meta",
            cardSubtitle: "Instagram",
            cardDetailedText:
                "I worked on the Instagram Sharing Interactions team to build up the backend for a new feature for Instagram Stories! I learned about HTTP, Django, and APIs in order to build the product.",
        },

        {
            title: "June 2021 - September 2021",
            cardTitle: "Google",
            cardSubtitle: "Lens in Photos",
            cardDetailedText:
                "At Google, I worked on the Lens in Photos team to develop an internal webpage. I used valuable technology such as JavaScript, gRPC, and google closure templates.",
        },

        {
            title: "July 2020 - August 2020",
            cardTitle: "Caltech",
            cardSubtitle: "Mazmanian Lab",
            cardDetailedText:
                "I participated in the Freshman Summer Research Institute before my freshman year at Caltech, and I was able to research Parkinson's Disease in the Mazmanian Lab.",
        },

        {
            title: "June 2019 - August 2019",
            cardTitle: "Nationwide Children's Hospital",
            cardSubtitle: "Partida-Sanchez Lab",
            cardDetailedText:
                "I worked at Nationwide Children's Hospital in the Partida-Sanchez lab. My research was centered around understanding the function of the innate immune system in kidney scarring during upper urinary tract infections. I earned the Abstract of Distinction award for my research and final presentation.",
        },
    ];

    return (
        <SimpleLayout>
            <div style={{ width: { width }, height: { height } }}>
                <Chrono
                    items={items}
                    mode="VERTICAL_ALTERNATING"
                    theme={{
                        primary: "black",
                        secondary: "white",
                        cardBgColor: "white",
                        cardForeColor: "black",
                        titleColor: "black",
                    }}
                />
            </div>
        </SimpleLayout>
    );
}
