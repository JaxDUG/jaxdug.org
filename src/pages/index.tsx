import * as React from 'react'
import SignupForm from '../components/signup/form-mailchimp'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import DefaultLayout from '../layouts/default'
import styled from '@emotion/styled'
import { FaMagic, FaMapMarkerAlt, FaWrench, FaRegHandshake, FaSchool, FaRegHeart, FaTrophy } from 'react-icons/fa'
import { Helmet } from 'react-helmet'

const BgOverlay = styled.div`
  background: rgba(8, 53, 81, 0.9);
`

const BgOverlay2 = styled.div`
  background: rgba(80, 53, 81, 0.9);
`

interface PageData {
  imageBg: any
  placeImage1: any
  placeImage2: any
  placeImage3: any
  sponsorImage1: any
  sponsorImage2: any
  sponsorImage3: any
}

const IndexPage = (props: any) => (
  <StaticQuery
    query={graphql`
      fragment fluidImage on File {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      fragment sponsorImage on File {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
      query HomePageQuery {
        imageBg: file(relativePath: { eq: "stock/shutterstock_511304818.jpg" }) {
          ...fluidImage
        }
        placeImage1: file(relativePath: { eq: "stock/bg_1.jpeg" }) {
          ...fluidImage
        }
        placeImage2: file(relativePath: { eq: "stock/bg_2.jpeg" }) {
          ...fluidImage
        }
        placeImage3: file(relativePath: { eq: "stock/bg_3.jpeg" }) {
          ...fluidImage
        }
        sponsorImage1: file(relativePath: { eq: "sponsors/discovertec-logo.jpg" }) {
          ...sponsorImage
        }
        sponsorImage2: file(relativePath: { eq: "sponsors/microsoft-logo.jpg" }) {
          ...sponsorImage
        }
        sponsorImage3: file(relativePath: { eq: "sponsors/ir-talent-logo.jpg" }) {
          ...sponsorImage
        }
      }
    `}
    render={(data: PageData) => (
      <DefaultLayout>
        <Helmet>
          <title>Welcome to JaxDUG</title>
        </Helmet>
        <BackgroundImage className="__" Tag="section" fluid={data.imageBg.childImageSharp.fluid}>
          <BgOverlay>
            <section className="jumbotron bg-transparent m-0 text-white">
              <div className="container text-center">
                <h1>Jacksonville Developers User Group</h1>
                <hr className="bg-light d-lg-none mb-5" />
                <p className="lead mb-5 px-lg-5 text-light">
                  JaxDUG is a development community on a mission to be the premier developer advocacy group by training and equiping our
                  community with the most effective technology and tools to be successful.
                </p>
                <small>
                  <div className="mb-3">
                    <FaMapMarkerAlt /> Jacksonville, Florida
                  </div>
                  <a
                    href="https://www.meetup.com/jaxdug/"
                    target="_blank"
                    title="Upcomming Events"
                    className="btn btn-sm btn-outline-light mb-5"
                  >
                    Learn About Our Upcomming Events!
                  </a>
                </small>
              </div>
            </section>
          </BgOverlay>
        </BackgroundImage>
        <section className="bg-light">
          <div className="container py-5 text-center">
            <div className="row mb-md-5">
              <div className="col-md-4 pb-5 pb-lg-0">
                <h2>
                  <FaMagic />
                </h2>
                <hr />
                We expose our members to new technology and good development practices without clashing with other developer groups.
              </div>
              <div className="col-md-4 pb-5 pb-lg-0">
                <h2>
                  <FaWrench />
                </h2>
                <hr />
                We work with our members to help them move their personal developer goals forward.
              </div>
              <div className="col-md-4 pb-5 pb-lg-0">
                <h2>
                  <FaRegHandshake />
                </h2>
                <hr />
                We work with development teams to highlight and share what they are doing with our members while helping teams be
                successful.
              </div>
            </div>
            <div className="d-none d-md-block">
              <div className="row">
                <div className="col-md-4 pb-3">
                  <h2>
                    <FaSchool />
                  </h2>
                  <hr />
                  We work with educational institutions to help foster the next generation of developers.
                </div>
                <div className="col-md-4 pb-3">
                  <h2>
                    <FaRegHeart />
                  </h2>
                  <hr />
                  We work with other developer groups to strengthen the development community regardless of development platform focus.
                </div>
                <div className="col-md-4 pb-3">
                  <h2>
                    <FaTrophy />
                  </h2>
                  <hr />
                  We work with technology recruiters and executives to help make Jacksonville a great place to grow technology
                  organizations.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container py-5">
          <div className="text-center">
            <h2 className="text-center">Event Locations</h2>
            <hr className="bg-light" />
            <p className="mb-5">
              JaxDUG is thankful for all the continued support from our event hosts. If you are interested in attending or hosting a JaxDUG
              event please review our{' '}
              <a href="https://www.meetup.com/jaxdug/" title="JaxDUG on Meetup" target="_blank">
                Meetup page
              </a>{' '}
              or contact us directly.
            </p>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <Img fluid={data.placeImage1.childImageSharp.fluid} />
            </div>
            <div className="col-md-4 d-none d-md-block">
              <Img fluid={data.placeImage2.childImageSharp.fluid} />
            </div>
            <div className="col-md-4 d-none d-md-block">
              <Img fluid={data.placeImage3.childImageSharp.fluid} />
            </div>
          </div>
        </section>
        <BackgroundImage className="__" Tag="section" fluid={data.placeImage1.childImageSharp.fluid}>
          <BgOverlay2>
            <section className="container py-5">
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-5">
                    <div className="card-body">
                      <h4 className="text-center">Sign up to be an official JaxDUG member</h4>
                      <hr />
                      <SignupForm location={props.location} />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-light">
                  <h2>Membership</h2>
                  <hr className="bg-light" />
                  <p>JaxDUG has an open membership policy for anyone interested in attending meetings. </p>
                  <p>
                    The JaxDUG community consists of many skilled professionals with a wide range of backgrounds. We have set high goals
                    this year for growing our membership and look forward to seeing you and of our upcoming events!
                  </p>
                  <p>
                    If you are interested in membership, speaking opportunities, or even sponsorship please contact us directly for more
                    information.
                  </p>
                </div>
              </div>
            </section>
          </BgOverlay2>
        </BackgroundImage>
        <section className="container py-5 text-center">
          <h2>
            <FaRegHeart /> Sponsors
          </h2>
          <hr />
          [todo: duno who sponsors are]
          <div className="row py-4">
            <div className="col">
              <Img fixed={data.sponsorImage1.childImageSharp.fixed} />
            </div>
            <div className="col">
              <Img fixed={data.sponsorImage2.childImageSharp.fixed} />
            </div>
            <div className="col">
              <Img fixed={data.sponsorImage3.childImageSharp.fixed} />
            </div>
          </div>
        </section>
      </DefaultLayout>
    )}
  />
)

export default IndexPage
