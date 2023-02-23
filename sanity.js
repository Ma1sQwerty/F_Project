import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const config = sanityClient({
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2022-12-05',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(config);

export const urlFor = (source) => builder.image(source)