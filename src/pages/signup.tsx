import * as React from 'react'
import { Helmet } from 'react-helmet'
import SignupForm from '../components/signup/form-mailchimp'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Layout from '../layouts/no-header'
import styled from '@emotion/styled'

const BgOverlay = styled.div`
  min-height: 100vh;
  background: rgba(8, 53, 81, 0.8);
`

interface FormData {
  imageLogo: any
  imageBg: any
}

const IndexPage = (props: any) => (
  <StaticQuery
    query={graphql`
      query SignupLogoQuery {
        imageBg: file(relativePath: { eq: "stock/shutterstock_511304818.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        imageLogo: file(relativePath: { eq: "logo/logo-white.png" }) {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `}
    render={(data: FormData) => (
      <Layout>
        <Helmet>
          <title>Join JaxDUG</title>
        </Helmet>
        <BackgroundImage className="__" Tag="section" fluid={data.imageBg.childImageSharp.fluid}>
          <BgOverlay>
            <div className="container py-5">
              <div className="row">
                <div className="col-md-6 text-white pb-5">
                  <Link title="jaxdug" to="/">
                    <Img fixed={data.imageLogo.childImageSharp.fixed} className="mb-4" />
                  </Link>
                  <h1>Sign up to be an official JaxDUG member.</h1>
                  <i>Be Part of Jacksonville's Development Community</i>
                  <hr className="bg-white" />
                  <p>JaxDUG has exciting plans for 2019 and beyond, and we want to make sure you don’t miss out.</p>
                  <div className="mb-3">
                    <strong>We’re starting an official membership list, and by signing up you’ll be the first to know about:</strong>
                  </div>
                  <ul>
                    <li>Monthly Eat, Drink, and Learns</li>
                    <li>Special events, engagements, and talks not featured on our Meetup.com Member Page</li>
                    <li>Important announcements</li>
                    <li>Latest news from the .NET stack world</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body px-md-5 pb-5 pt-4">
                      <div className="text-center">
                        <h2>Sign Up to Become an Official JaxDUG Member</h2>
                        <p>Sign up below to be added to our list.</p>
                        <small className="mb-4 d-block">
                          (Don’t worry, we hate spam as much as you do and promise to only send occasional, relevant information to your
                          inbox.)
                        </small>
                      </div>
                      <SignupForm location={props.location} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BgOverlay>
        </BackgroundImage>
      </Layout>
    )}
  />
)

export default IndexPage
