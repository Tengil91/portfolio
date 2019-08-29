import React from "react"
import { graphql, Link } from "gatsby"
import BlogPage from "../components/blogpage"
import { blogHomeLinkStyles } from '../styles/styles'

export default ({ data }) => {
  const post = data.markdownRemark
  console.log(post.frontmatter.description);
  return (
    <BlogPage headerImgUrl={post.frontmatter.headerimg} pageTitle={post.frontmatter.title} headerDescription={post.frontmatter.description}>
      <div>
        <Link style={blogHomeLinkStyles} to="/">Hem</Link>
        <h2>{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <a href={post.frontmatter.githublink} target="_blank">Till githubsidan</a><br />
        <a href="mailto:kachiun91@gmail.com">Maila mig</a>
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
        githublink
      }
    }
  }
`