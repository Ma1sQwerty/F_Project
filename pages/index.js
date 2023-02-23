import About from '../components/About'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import LaunchPage from '../components/LaunchPage'
import Members from '../components/Members'
import Navbar from '../components/Navbar'
import Purpose from '../components/Purpose'
import RecentProjects from '../components/RecentProjects'
import Tshirts from '../components/Tshirts'
import { config } from '../sanity'

function Home ({ posts, tshirts }) {
  return (
    <div className="bg-gradient-to-tr from-slate-700 via-slate-800 to-neutral-800 mx-auto">
      <Navbar />
      <LaunchPage />
      <RecentProjects props={posts.slice(0,2)} />
      <Tshirts props={tshirts} />
      <About />
      <Purpose />
      <Members />
      <ContactForm />
      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[ _type == "post"]{
    _id,
    title,
    author-> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`;

  const posts = await config.fetch(query)

  const query2 = `*[ _type == "tshirt"]{
    _id,
    title,
    image,
    slug,
    price
  }`

  const tshirts = await config.fetch(query2)

  return {
    props: {
      posts,
      tshirts
    }
  }
}

export default Home
