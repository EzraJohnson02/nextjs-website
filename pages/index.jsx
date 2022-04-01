import SimpleLayout from '../components/layout/simple'
import 'bootstrap/dist/css/bootstrap.min.css';
import Typical from 'react-typical'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';

export default function Home(initialData) {
  return (
    <SimpleLayout>
      <section className="jumbotron text-center">
        <div className="container">
          <h1>Howdy! I'm Ezra</h1>
          <Typical
            steps={['software engineer', 5000, 'sophomore @ Caltech', 5000,
              'sprinter on the track team', 5000]}
            loop={Infinity}
            wrapper="p"
          />
        </div>
      </section>

      <Container fluid>
        <Row>
          <Col>
            <Image alt="Profile Photo" src={"/profile-photo.jpg"} width={200} height={300} />
          </Col>
          <Col>
          <h3>This is my website. It should give a deeper understanding of my
            skills and interests than a simple resume, and it is more fun to
            create. Let me know if you have any ways I could improve it!
          </h3>
        </Col>
        </Row>

        <Row> 
        <Col><Icon icon="akar-icons:python-fill" style={{ fontSize: '48px' }}/></Col>
        <Col><Icon icon="la:java" style={{ fontSize: '48px' }}/></Col>
        <Col><Icon icon="ion:logo-javascript" style={{ fontSize: '48px' }}/></Col>
        <Col><Icon icon="cib:c" style={{ fontSize: '48px' }}/></Col>
        <Col><Icon icon="akar-icons:react-fill" style={{ fontSize: '48px' }}/></Col>
        <Col><Icon icon="akar-icons:nextjs-fill" style={{ fontSize: '48px' }}/></Col>
        <Col><Icon icon="akar-icons:bootstrap-fill" style={{ fontSize: '48px' }}/></Col>
        <Col><Icon icon="akar-icons:html-fill" style={{ fontSize: '48px' }}/></Col>
        <Col><Icon icon="akar-icons:css-fill" style={{ fontSize: '48px' }}/></Col>
        <Col> <a href="https://github.com/EzraJohnson02"><Icon icon="akar-icons:github-fill" style={{ fontSize: '48px' }}/></a></Col>
        </Row>
      </Container>
    </SimpleLayout>
  )
}


