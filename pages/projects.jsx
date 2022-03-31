import SimpleLayout from '../components/layout/simple'
import Carousel from 'react-bootstrap/Carousel'
import { CarouselItem } from 'react-bootstrap'

export default function Projects(initialData) {
  return (
    <SimpleLayout>
      <Carousel variant="dark">
      <CarouselItem style={{ 'height': "400px" }} >
          <img
            className="d-block w-100"
            src="/space-launch-instructions.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem style={{ 'height': "400px" }} >
          <img
            className="d-block w-100"
            src="/space-launch-gameplay.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem style={{ 'height': "400px" }} >
          <img
            className="d-block w-100"
            src="/space-launch-endscreen.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </CarouselItem>
      </Carousel>
      
      <Carousel variant="dark">
      <CarouselItem style={{ 'height': "800px" }} >
          <img
            className="d-block w-100"
            src="/snake-instructions.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem style={{ 'height': "800px" }} >
          <img
            className="d-block w-100"
            src="/snake-2d-play.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem style={{ 'height': "800px" }} >
          <img
            className="d-block w-100"
            src="/snake-3d-play.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </CarouselItem>
      </Carousel>
    </SimpleLayout>
  )
}
