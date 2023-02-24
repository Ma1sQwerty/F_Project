
import Navbar from '../../components/Navbar';
import { config, urlFor } from '../../sanity';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

function Index({ posts }) {
    console.log(posts);
    
  return (
    <div className='bg-gradient-to-tr from-slate-800 to-neutral-900'>
        <Navbar />
        <h1 className='text-center text-5xl font-bold text-white my-10'>BLOGS</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {posts.map((post) => {
            return (
              <Link href={'/blogs/' + post.slug.current} className='px-5 py-2 bg-slate-900 mx-5 rounded-xl mb-5 hover:scale-[101%] transition-all duration-200 '>
                <h1 className='text-white text-xl font-mono mb-2 font-bold'>{post.title}</h1>
                <Image src={urlFor(post.mainImage)} alt="" className='mb-2 w-full object-cover h-62 md:h-52 lg:h-64 xl:h-[20rem] 2xl:h-[20rem] rounded-xl' />
                <p className='text-white font-mono lg:text-2xl lg:my-2'>{post.description}</p>
              </Link>
            )
            })}
        </div>
        <Footer />
    </div>
  )
}

export default Index

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

  return {
    props: {
      posts,
    }
  }
}
