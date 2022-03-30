import SimpleLayout from '../components/layout/simple'
import Carousel from 'react-bootstrap/Carousel'
import { CarouselItem } from 'react-bootstrap'

export default function Experience() {
  return (

    <SimpleLayout>
      <div className="row">
        Experience Form
      </div>
      <Carousel variant="dark">
        <CarouselItem style={{ 'height': "800px" }} >
          <img
            className="d-block w-100"
            src="src/screenshot-articles.png"
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
            src="src/screenshot-articles.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </CarouselItem>
      </Carousel>
    </SimpleLayout>
  )
}
