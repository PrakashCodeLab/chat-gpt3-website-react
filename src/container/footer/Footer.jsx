import './Footer.scss';
import  imgLogo from "../../assests/images/logo.svg";

const Footer = () => {

    const currentYear= new Date().getFullYear();
  return (
    <div className='footer__section--container'>
        <div className="footer__body__wrapper">
          <div className="footer__conatiner__one">
            <h3 className='footer__header'>Do you want to step in to the future before others</h3>

             <button type='button' className='btn__footer'>Request Early Access</button>
          </div>
          <div className="footer__conatiner__two">
             <div className="footer__sec--two__linkone">
                 <img src={imgLogo} alt="logo__footer" />

               <p className='footer__para'>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
             </div>
             <div className="footer__sec--two__link--body">
                 <p className='first-child'><a   href="#">links</a></p>
                 <p><a href="#">overview</a></p>
                 <p><a href="#">social  media </a></p>
                 <p><a href="#">contact</a></p>
                 <p><a href="#">counter</a></p>
                
             </div>

             <div className="footer__sec--two__link--body">
                 <p className='first-child'><a href="#">Company</a></p>
                 <p><a href="#">Terms & Conditions</a></p>
                 <p><a href="#">Privacy Policy </a></p>
                 <p><a href="#">Contact</a></p>
                 
                
             </div>

             <div className="footer__sec--two__link--body">
                 <p className='first-child'><a href="#">get in touch</a></p>
                 <p><a href="#">Crechterwoord K12 182 DK Alknjkcb</a></p>
                 <p><a href="#">085-132567 </a></p>
                 <p><a href="#">info@payme.net</a></p>
                 
                
             </div>

          </div>
          <div className="footer__conatiner__three">
            <p className="footer__section__lead">
            © {currentYear} GPT-3. All rights reserved.
            </p>
          </div>
        </div>


    </div>
  )
}

export default Footer