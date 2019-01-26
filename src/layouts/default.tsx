import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/navigation/header'
import Footer from '../components/navigation/footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/jaxdug.css'

type StaticQueryProps = {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

const DefaultLayout: React.FunctionComponent = ({ children }) => (
  <StaticQuery
    query={graphql`
      query DefaultLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: 'jaxdug, jacksonville developers users group' }
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
      </>
    )}
  />
)

export default DefaultLayout
