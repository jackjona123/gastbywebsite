import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'


class Main extends React.Component {
  render() {
    let close = (
      <div
        role="button"
        className="close"
        aria-label="close button"
        tabIndex={0}
        onClick={() => {
          this.props.onCloseArticle()
        }}
        onKeyDown={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">ABOUT ME:</h2>
          <span className="image main">
            <img src={pic01} alt="Intro Background" />
          </span>
          <p>
        
          </p>
         
          {close}
        </article>


        <article
          id="aboutme"
          className={`${this.props.article === 'aboutme' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">ABOUT ME:</h2>
          <span className="image main">
            <img src={pic01} alt="About Me Background" />
          </span>
          <center><p><b>
          I am an optimist, patient, honest, and an individual who loves 
          to innovate and develop new software and applications for the world.
          Loves everything from the Raspberry Pi zero to powerful (not to mention loud) servers
          and everything in between. I enjoy building computers, taking them apart, experimenting 
          and understanding what makes them tick. I love to learn new things and explore, and I 
          always enjoy a good challenge. I have made and continue to make mistakes but I continue 
          to learn from them and grow as a person.</b></p></center>
          <h2 className="major">Fun Fact:</h2>
          <center><p><b>
          I know that this probably isn’t common but I love going outside 
          into nature and looking at the stars (in an area with no light-pollution). 
          It is the most beautiful thing that I have ever seen and love 
          it more every time I see it.
          </b></p></center>
          
          {close}
        </article>





        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">SKILLS</h2>
          <span className="image main">
            <img src={pic02} alt="Skills Background" />
          </span>
          <p><center>
          <h3>WEB DEVELOPMENT</h3>
          From start to finish, building a beautiful website. 
          Build website that are made with speed and functionality in mind.
          </center></p>  
          <p><center>
          <h3>MOBILE APPLICATIONS</h3>
          Experience in mobile application development. Primarily an IOS app developer. 
          Working to develop and publish apps for the world to enjoy.
          </center></p>
          <p><center>
          <h3>SYSTEM ADMINISTRATOR</h3>
         Certified System Administrator. 
         Responsible for the daily management, upkeep, and configuration of business computer systems. A
         lways trying to help.
         </center></p>
          <p><center>
          <h3>SOFTWARE DEVELOPMENT</h3>
          Develop and Implement Software Applications
          </center></p>
          <p><center>
          <h3>NETWORK ADMINISTRATOR</h3>
          Responsible for keeping a computer network running seamlessly and up-to-date,
           and coordinate and connect all the different systems.
           </center> </p>
          <p><center>
          <h3>TECHNOLOGY ENTHUSIAST</h3>
          Trying to stay on the leading edge and forefront of new technologies emerging.
          </center></p>
          <br />
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">My Projects</h2>
          <span className="image main">
            <img src={pic03} alt="Projects Background" />
          </span>
          <p><center><b>[Click The Link Below To View My Showcase ]</b></center></p>
          <h2><center><a href="https://showcase.jackjona.live"> My Showcase</a></center></h2>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          
          {/* To Use Netlify Forms Instead Of Formspree

          <form method="post" action="/page-2" data-netlify="true">
          
          */}
          <form name="contact" method="POST" action="https://formspree.io/f/xnqlllez">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required/>
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="_replyto" id="email" required/>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" required></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special"/>
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/jackjona123"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/jackjona123" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jackjona123"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
