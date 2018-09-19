import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src='https://gdurl.com/q5PT' height="40" /></Link>
          <Link to="/blog">Blog</Link>
          <Link to="https://taia-io.slite.com/public/share/note/V7qPy8k4EKHmmvCi9w6b25">FAQ</Link>
          <Link to="/team">About Us</Link>
          <button>Sign-in</button>
          <button>Sign-up</button>
        </div>
      </div>
    )
  }
}

export default Header