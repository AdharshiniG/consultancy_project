/*import Header from '../../components/Header'*/
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import {FcPhone} from 'react-icons/fc'
/*import contactus from '../../images/contactus.png'*/
import './contact.css'
const Contact = () => {
  return (
    <>
{/*    
    <Header title="Get In Touch" image={contactus}> */}
    {/* Whenever you need high-quality pipes, pipe fittings, tubes, and more at competitive prices, contact us first to receive your orders delivered quickly and on time.
    </Header> */}
    <section className="contact">
      <div className="container contact__container">
        <div className="container contact__us">
        <h1>Contact Us</h1><br></br>
        <h2>Office</h2>
        <p>158-A, Ist Floor , East Street , Nehru Nagar</p>
        <p>Ariyappammpalayam,Sathy-1.</p>
        <p><FcPhone/> Contact No +91-9677178843.</p>
        <br></br>
        <h2>Warehouse</h2>
        <p>498,BAZAR STREET</p>
        <p>Kottuveerampalayam,Sathy-1</p>
        <br></br>
        <h3>
          Timings </h3>
          <p>9:00 AM - 7:00 PM</p>
        
        <div className="container contact__map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.6124855699!2d77.23165901459618!3d11.507852491827796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9213f18f98bf9%3A0xf696876286c34791!2sPariyur%20Amman%20Steels!5e0!3m2!1sen!2sin!4v1679584910275!5m2!1sen!2sin" 
        width="650" 
        height="450" 
        style={{border:0}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
         
        </div>
        </div>
       
        <br></br>
        
         <div className="contact__wrapper">
          <a href='mailto:adharshiniganesan@gmail.com' target="_balnk" rel="norefferer noopener"><MdEmail/></a>
          <a href='http://m.me/go' target="_balnk" rel="norefferer noopener"><BsMessenger/></a>
          <a href='https://wa.me/8610058262' target="_balnk" rel="norefferer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>

    </section>
    </>
  )
}

export default Contact
