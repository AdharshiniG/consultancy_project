import Header from '../../components/Header'
import mspipes from '../../images/mspipes.png'
import agni from '../../images/agni.jpg'
import './about.css'
const About = () => {
  return (
    <>
    <Header title="About Us" image={mspipes}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
     Velit eos vitae qui incidunt quaerat perferendis quo sint tempore eum ducimus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
     A eius eligendi delectus blanditiis quis nulla deserunt. Placeat nemo autem deserunt, 
     amet sint enim! Voluptates mollitia amet, delectus maiores ea accusantium? 
     Consectetur iste amet ad debitis.
     Aliquam quia nesciunt eveniet sunt!
    </Header>
    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={agni} alt='SectionImage'/>
        </div>
        <div className="about__section-content">
          <h1>Our Sotry</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Quas iure a dolorum fugit et assumenda perspiciatis eos nostrum 
            sapiente dicta quo soluta provident laborum, pariatur nemo sit 
            possimus reprehenderit iste laboriosam unde vel suscipit qui quos!
            Deserunt corrupti, qui omnis delectus consectetur eius architecto
            ducimus dolorum itaque eos, ex pariatur.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Repellendus doloremque eius ea illum dolorem. 
            Dolor animi nihil eligendi. Architecto, vel.
          </p>
          <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Quas iure a dolorum fugit et assumenda perspiciatis eos nostrum 
            sapiente dicta quo soluta provident laborum, pariatur nemo sit 
            possimus reprehenderit iste laboriosam unde vel suscipit qui quos!
            Deserunt corrupti, qui omnis delectus consectetur eius architecto
            ducimus dolorum itaque eos, ex pariatur.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About