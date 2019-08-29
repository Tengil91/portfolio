import React from "react"
import { graphql, Link } from "gatsby"
import Header from './../components/header';
import { containerStyles, blogContentStyles } from '../styles/styles';
import FullImageHeader from '../components/fullimageheader';
import headerImg from './../images/headerimg2.jpg';


export default ({ data }) => {
  console.log(data)
  return (
    
    <div style={containerStyles}>
      <FullImageHeader url={headerImg}>
        <h1 style={{color: '#fff', fontSize: 48}}>Welcome!</h1>
        <p style={{color: 'goldenrod', fontSize: 28}}>Here are a couple of my projects</p>
      </FullImageHeader>
      <div style={blogContentStyles}>
      <Header headerText="Click on a project for more info" />
        <div style={{display: 'flex'}}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div style={{maxWidth: '50%', padding: 10}}>
              <Link className="project-summary" to={node.fields.slug} style={{color: '#fff', textDecoration: 'none'}}>
                <h3>
                  {node.frontmatter.title}{" "}
                  <span>
                    — {node.frontmatter.date}
                  </span>
                </h3>
                <p>{node.frontmatter.description}</p>
              </Link>
            </div>
          ))}
        </div>
        <a href="mailto:kachiun91@gmail.com">Maila mig</a>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`