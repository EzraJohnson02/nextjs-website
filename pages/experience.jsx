import SimpleLayout from '../components/layout/simple'
import { Container, Row, Col } from 'react-bootstrap';

export default function Experience() {
  return (


    <SimpleLayout>
      <Container fluid>
        <Row>
          <Col>
            <div className="card mb-4 shadow-sm">
              <img
                className="d-block w-100"
                src="/google-lens.png"
                alt="Second slide"
              />
              <div className="card-body">
                <h3>Google STEP</h3>
                <p className="card-text">I worked on the Lens in Photos team at Google through their STEP internship in the summer of 2021.</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card mb-4 shadow-sm">
              <img
                className="d-block w-100"
                src="/meta-logo.png"
                alt="Second slide"
              />
              <div className="card-body">
                <h3>Meta SWE Intern</h3>
                <p className="card-text">Upcoming!</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </SimpleLayout>
  )
}
