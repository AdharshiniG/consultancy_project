import Header from '../../components/Header'
import background from '../../images/background.jpg'
import './product.css'

const Product = () => {
  const galleryLength= 9;
  const images = []
  for(let i=1;i <= galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  return (
   <>
   <Header title="Our Products" image={background}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam itaque saepe, quam veniam error sequi in iste aliquam animi dignissimos ducimus dolore facere, corporis quidem consequatur mollitia illo assumenda quas.
   </Header>
   <section className="gallery">
   <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`GalleryImage ${index + 1}`}/>
              </article>

            })
          }
   </div>
   </section>
   </>
  )
}

export default Product