import SimpleLayout from "../components/simple";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";

export default function Projects() {
    return (
        <SimpleLayout>
            <Carousel interval={10000} variant="dark">
                <CarouselItem style={{ height: "400px" }}>
                    <Image
                        className="d-block w-100"
                        src="/robot.JPG"
                        layout="fill"
                        objectFit="cover"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Localizing and Planning Robot</h3>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem style={{ height: "400px" }}>
                    <Image
                        className="d-block w-100"
                        src="/early-robot.jpeg"
                        layout="fill"
                        objectFit="cover"
                        alt="second slide"
                    />
                </CarouselItem>
            </Carousel>
            <p>
                I constructed a mobile robot capable of localization, mapping,
                and planning around obstacles in a team of two. We utilized
                Python and ROS2 to build the robot over the course of 10 weeks.
                The robot was eventually able to showcase its abilities in a
                "heist" competition where it had to avoid sentries and scan
                "treasures" to score points.
            </p>

            <Carousel interval={10000} variant="dark">
                <CarouselItem style={{ height: "400px" }}>
                    <Image
                        className="d-block w-100"
                        src="/space-launch-instructions.png"
                        layout="fill"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Game Instructions</h3>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem style={{ height: "400px" }}>
                    <Image
                        className="d-block w-100"
                        src="/space-launch-gameplay.png"
                        alt="Second slide"
                        layout="fill"
                    />
                    <Carousel.Caption>
                        <h3>Gameplay</h3>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem style={{ height: "400px" }}>
                    <Image
                        className="d-block w-100"
                        src="/space-launch-endscreen.png"
                        alt="Third slide"
                        layout="fill"
                    />
                    <Carousel.Caption>
                        <h3>Endscreen</h3>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
            <p>
                This is a physics engine made entirely in C back in spring of
                2021. I worked in a team of four and practiced software
                development techniques such as code review and git for version
                maintainence. Our final physics engine was then used to make the
                game pictured above.
            </p>

            <Carousel variant="dark" interval={10000}>
                <CarouselItem style={{ height: "800px" }}>
                    <img
                        className="d-block w-100"
                        src="/snake-2d-play.png"
                        alt="First slide"
                        layout="fill"
                    />
                    <Carousel.Caption>
                        <h3>2D Rendering</h3>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem style={{ height: "800px" }}>
                    <img
                        className="d-block w-100"
                        src="/snake-3d-play.png"
                        alt="Second slide"
                        layout="fill"
                    />
                    <Carousel.Caption>
                        <h3>3D Rendering</h3>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
            <p>
                I made a 3D rendered version of the snake game in Java back in
                Spring of 2019. I worked with a close friend to learn how 3D
                rendering worked and then implement it in a couple weeks for our
                school's computer science fair. Lots of people wanted to play!
            </p>
        </SimpleLayout>
    );
}
