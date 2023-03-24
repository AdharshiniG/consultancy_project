import Header from '../../components/Header'
import mspipes from '../../images/mspipes.png'
import mspipes1 from '../../images/mspipes1.jpg'
import './about.css'
const About = () => {
  return (
    <>
    <Header title="About Us" image={mspipes}>
    Whether you’re looking for one of the nation’s leading steel pipe suppliers, need ferrous or non-ferrous industrial pipes, ERW tubes, or have got pipe fittings and pipe coating requirements, you’ll get them all and much more at Pariyur Amman  Pipes and Steels.
By blending excellent quality, comprehensive customer service, and prompt delivery, we ensure you enjoy a seamless process when you place your order with us. As industry experts, we know how crucial timely delivery is. That’s why we help you track your order at every step of the way – right from its supply and packaging to its delivery.
The next time you need premium quality pipe suppliers to meet your needs of seamless steel pipes, ERW pipes, GI pipes, welded pipes, pipe fittings, pipe coating, etc. at affordable rates, contact Pariyur Amman  Pipes and Steels!
    </Header>
    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={mspipes1} alt='SectionImage'/>
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <h2>Pariyur Amman Steels</h2>
         <p>

Pariyur Amman  Pipes and Steels is part of S. K. Pariyur Amman  Group of companies that has a pan India presence in different fields like steel and pipes trading, import and export, logistics, and agro organic chemicals.Pariyur Amman  Pipes and Steels has established itself firmly on the national map as a leading stockist and supplier of seamless steel pipes, ERW pipes, alloy pipes, OCTG, and GI pipes along with boiler tubes and pipe fittings.
From our modest beginning way back in 1990, we have come a long way.<br></br>Having spent almost 30 years in the steel and pipe industry, we have now grown into a big organization that has become synonymous with delivering high-quality products on time at affordable and competitive prices to meet all expectations of our customers. Over the years, we have learned about the latest market trends and gathered useful insights to better understand our customer’s requirements and pain-points. And this is what helps us work closely with all our clients – both small and big, to ensure that their unique business needs are fulfilled.
By drawing upon our extensive industry expertise as well as a rich and reliable vendor base, we can offer premium quality products quickly to our clients, thus contributing to their success. 
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About