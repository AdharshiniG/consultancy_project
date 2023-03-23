import Header from '../../components/Header'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'
const Contact = () => {
  return (
    <>
    <Header title="Get In Touch">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Voluptatum, cum. Vitae beatae perferendis nobis adipisci, 
       numquam sunt molestias? Dolores exercitationem mollitia vel 
       explicabo dolore ut assumenda temporibus quidem numquam deleniti.
    </Header>
    <section classNmae="contact">
      <div className="container contact__container">
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