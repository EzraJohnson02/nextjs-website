import Head from 'next/head'
import SimpleLayout from '../components/layout/simple'
import 'bootstrap/dist/css/bootstrap.min.css';  

export default function Home(initialData) {
  return (
    <SimpleLayout>
      <section className="jumbotron text-center">
        <div className="container">
          <h1>Subscribe to GyanBlog</h1>
          <p className="lead text-muted">
            Learn and Share
          </p>
        </div>
      </section>

      <typing-bar />
      <div className="row">
        <h1>Hey People</h1>
      </div>
      <div className="row">
        <typing-bar/>
      </div>
    </SimpleLayout>
  )
}


