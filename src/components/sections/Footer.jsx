import FbIcon from '../../assets/icon-facebook.svg?react'
import TtIcon from '../../assets/icon-twitter.svg?react'
import Logo from '../../assets/logo-bookmark.svg?react'

const Footer = () => {
    return ( 
        <footer>
            <div className="container">
                <Logo className='footer-logo'/>
                <a href="#">FEATURES</a>
                <a href="#">PRICING</a>
                <a href="#">CONTACT</a>
                <div className="footer-box">
                    <a href="#">
                        <FbIcon/>
                    </a>
                    <a href="#">
                        <TtIcon/>
                    </a>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;