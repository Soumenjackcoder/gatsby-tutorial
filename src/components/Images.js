import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import img from '../images/image3.png'
import Image from 'gatsby-image'

const getImages = graphql`
{
  fixed: file(relativePath: {eq: "image3.png"}) {
    childImageSharp {
      fixed(width: 200, grayscale: true) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluid: file(relativePath: {eq: "image4.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  example: file(relativePath: {eq: "image4.png"}) {
    childImageSharp {
      fluid(maxWidth: 100) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
}
`

const Images = () => {
const data = useStaticQuery(getImages);

  return (
  <section className="images">
    <article className="single-images">
      <h3>basic image</h3>
      <img src={img} alt="image1" width="100%" />
      <h2>Content</h2>
    </article>
    <article className="single-images">
      <h3>fixed image/blur</h3>
      <Image fixed={data.fixed.childImageSharp.fixed} />
      <h2>Content</h2>
    </article>
    <article className="single-images">
      <h3>fluid image/svg</h3>
      <Image fluid={data.fluid.childImageSharp.fluid} />
      <h2>Content</h2>
      <Image fluid={data.example.childImageSharp.fluid} />
    </article>
  </section>
  )
}

export default Images