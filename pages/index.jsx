import Head from 'next/head'
import SimpleLayout from '../components/layout/simple'
import 'bootstrap/dist/css/bootstrap.min.css';
import Typical from 'react-typical'

export default function Home(initialData) {
  return (
    <SimpleLayout>
      <section className="jumbotron text-center">
        <div className="container">
          <h1>Howdy! I'm Ezra, a </h1>
          <Typical
            steps={['software engineer', 5000, 'sophomore @ Caltech', 5000,
          'sprinter on the track team', 5000]}
            loop={Infinity}
            wrapper="p"
          />
        </div>
      </section>

      <typing-bar />
      <div className="row">
        <h1>Hey People</h1>
      </div>
      <div className="row">
        <typing-bar />
      </div>
    </SimpleLayout>
  )
}


