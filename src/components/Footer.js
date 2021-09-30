import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; {new Date().getFullYear()} Jack Jona | Built With: <span role="img" aria-label="heart">❤️ </span> | <a href="https://fr.jackjona.live"> Français </a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
