import SimpleLayout from '../components/layout/simple'
import Carousel from 'react-bootstrap/Carousel'
import { CarouselItem } from 'react-bootstrap'
import ProjectsJumbo from '../components/jumbo/projects'


export default function Projects(initialData) {
  return (
    <SimpleLayout preContainer={<ProjectsJumbo />}>
      <Carousel variant="dark" interval={10000}>
        <CarouselItem style={{ 'height': "400px" }} >
          <img
            className="d-block w-100"
            src="/space-launch-instructions.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Game Instructions</h3>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem style={{ 'height': "400px" }} >
          <img
            className="d-block w-100"
            src="/space-launch-gameplay.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Gameplay</h3>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem style={{ 'height': "400px" }} >
          <img
            className="d-block w-100"
            src="/space-launch-endscreen.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Endscreen</h3>
          </Carousel.Caption>
        </CarouselItem>
      </Carousel>
      <p>This is a physics engine made entirely in C back in spring of 2021.
        I worked in a team of four and practiced software development
        techniques such as code review and git for version maintainence. Our
        final physics engine was then used to make the game pictured above.
      </p>

      <Carousel variant="dark" interval={10000}>
        <CarouselItem style={{ 'height': "800px" }} >
          <img
            className="d-block w-100"
            src="/snake-2d-play.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>2D Rendering</h3>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem style={{ 'height': "800px" }} >
          <img
            className="d-block w-100"
            src="/snake-3d-play.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>3D Rendering</h3>
          </Carousel.Caption>
        </CarouselItem>
      </Carousel>
      <p>I made a 3D rendered version of the snake game in Java back in Spring
        of 2019. I worked with a close friend to learn how 3D rendering worked
        and then implement it in a couple weeks for our school's computer
        science fair. Lots of people wanted to play!
        </p>
    </SimpleLayout>
  )
}
