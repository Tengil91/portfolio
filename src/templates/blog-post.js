import React from "react"
import { graphql, Link } from "gatsby"
import BlogPage from "../components/blogpage"

export default ({ data }) => {
  const post = data.markdownRemark
  console.log(post.frontmatter.description);
  return (
    <BlogPage headerImgUrl={post.frontmatter.headerimg} pageTitle={post.frontmatter.title} headerDescription={post.frontmatter.description}>
      <div>
        <Link to="/">Hem</Link>
        <h2>{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </BlogPage>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        headerimg
      }
    }
  }
`