import {Link} from 'react-router-dom'
import Logo from  '../images/logo.png'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/">
                    <img src={Logo} widtht="1px" heihgt="1px" alt="FooterLogo"/>
                </Link>
                <p>
                   498,Bazar Street,<br></br>
                    Koduveerampalayam,<br></br>Sathyamangalam,<br></br>Tamil Nadu
                 </p>
                <div className="footer__socials">
                    <a href="https://facebook.com" target="_blank" rel='noreferrer opener'><FaFacebook/></a>
                    <a href="https://whatsapp.com" target="_blank" rel='noreferrer opener'><AiOutlineWhatsApp/></a>
                    <a href="https://instagram.com" target="_blank" rel='noreferrer opener'><AiFillInstagram/></a>
                </div>
            </article>

            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/product">Product</Link>
                <Link to="/services">Services</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/contact">Contact</Link>

            </article>
            
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
           </article>
            
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">Support</Link>
                
            </article>
        </div>
        <div className="footer__copyright">
            <small>2023 PARIYUR AMMAN STEELS &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer


