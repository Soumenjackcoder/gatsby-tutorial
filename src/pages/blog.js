import React from "react"
import Layout from "../components/Layout"
import styles from '../components/blog.module.css'
const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is our page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet cnsectetur
          adipisicing elit. Hic,
          volupatem! pariatur ipsam eum quas error.cssfacilis ex in hic recusandue
          eveniet vitae, valuptatum sint laudantium.
        </p>
      </div>
    </Layout>
  )
}

export default blog
