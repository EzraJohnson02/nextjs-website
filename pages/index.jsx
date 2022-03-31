import Head from 'next/head'
import SimpleLayout from '../components/layout/simple'
import 'bootstrap/dist/css/bootstrap.min.css';
import Typical from 'react-typical'
import Image from 'next/image'

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
      
      <div className="col">
        <Image alt="Profile Photo" src={"/profile-photo.jpg"} width={200} height={300} />
      </div>
      <div className="col">
        <h3>This is my website. It should give a deeper understanding of my
          skills and interests than a simple resume, and it is more fun to
          create. Let me know if you have any ways I could improve it!
        </h3>
      </div>
    </SimpleLayout>
  )
}


