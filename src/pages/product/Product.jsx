/*import Header from '../../components/Header'*/
import { Link } from 'react-router-dom';
import {IoIosCart} from 'react-icons/io'
/*import background from '../../images/background.jpg'*/
import './product.css'

const Product = () => {
  const galleryLength= 9;
  const images = []
  for(let i=1;i <= galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  return (
   <>
   {/* <Header title="Our Products" image={background}>
    The below gallery of our store products.
    <button className="container-md"></button>
   </Header> */}

   <section className="gallery">
    <div className='container gallery__containerh'>
   <h1>Our Products</h1>
   </div>
   <div className="container gallery__container">
 
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`GalleryImage ${index + 1}`}/>
              </article>

            })
          }
   </div>
   <div className='container gallery__containerbtn'>
   <Link to="/shop" className='btn lg'>Buy Now <IoIosCart/></Link>
   </div>
   </section>
   </>
  )
}

export default Product