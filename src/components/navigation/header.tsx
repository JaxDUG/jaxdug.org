import * as React from 'react'
import Img from 'gatsby-image'
import { Link, graphql, StaticQuery } from 'gatsby'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

interface HeaderProps {
  title: string
}

interface HeaderData {
  imageLogo: any
}

interface HeaderState {
  isOpen: boolean
}

// bg: #1b1f23?
// todo(bwills): get the social media links

export default class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { isOpen: false }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
          query ImageLogoQuery {
            imageLogo: file(relativePath: { eq: "logo/logo-white.png" }) {
              childImageSharp {
                fixed(width: 125) {
                  ...GatsbyImageSharpFixed_noBase64
                }
              }
            }
          }
        `}
        render={(data: HeaderData) => (
          <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link className="navbar-brand pr-4" to="/" title={this.props.title}>
                <Img fixed={data.imageLogo.childImageSharp.fixed} />
              </Link>
              <button className="navbar-toggler" type="button" onClick={this.toggle}>
                <span className="navbar-toggler-icon" />
              </button>
              <div className={'navbar-collapse ' + (this.state.isOpen ? '' : 'collapse')}>
                <hr className="bg-secondary d-lg-none" />
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="https://www.meetup.com/jaxdug/events" title="JaxDUG Events" target="_blank" className="nav-link">
                      Events
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="https://www.meetup.com/jaxdug/" title="JaxDUG on Meetup" target="_blank" className="nav-link">
                      Meetup
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup" title="Join JaxDUG">
                      Join
                    </Link>
                  </li>
                </ul>
                <hr className="bg-secondary d-lg-none" />
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/#" title="JaxDUG on Twitter">
                      <FaTwitter /> <span className="d-lg-none">Twitter</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/#" title="JaxDUG on LinkedIn">
                      <FaLinkedin /> <span className="d-lg-none">LinkedIn</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.github.com/jaxdug" target="_blank" title="JaxDUG on GitHub">
                      <FaGithub /> <span className="d-lg-none">GitHub</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )}
      />
    )
  }
}