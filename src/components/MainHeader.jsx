import {Link} from 'react-router-dom'
import Image from'../images/home.png'
const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
      <div className="main__header-left">
        <h4>#BetterEveryday</h4>
        <h1>Buy your Building Fabrication Materials Here</h1>
        <p>Steel up your Buildings with us</p>
        <Link to="/shop" className='btn lg'>Get Started</Link>
       
      </div>
      <div className="main__header-right">
        <div className='main__header-circle'></div>
        <div className='main__header-image'>
          <img src={Image} alt="Main HeaderImg"/>
        </div>
      </div>
      </div>
    </header>
  )
}

export default MainHeader