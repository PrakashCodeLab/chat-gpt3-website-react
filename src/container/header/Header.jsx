import './Header.scss'
import '../../assests/styles/variables.scss';
import Imglogo from "../../assests/images/people.png"
import Aipng from '../../assests/images/ai.png'



const Header = () => {
  return (
    <div className='header__container'>
       <div className="header__container__wrapper">
        <div className="header__sec__left">
             <h2>Lets Build Something amazing with GPT-3 OpenAI</h2>
            
             <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
         
             <form action="/post" className="form__email">

              <div className="form__wrapper">
                <input className='header__input' type="email" name="email" id="email" />
                <button  className='header__input__btn'   type="submit">get started</button>
                </div>
             </form>

             <div className="header__testimonial">
                 <div className="header__img__profiles">
                    <img src={Imglogo} alt="peoples img" className="header__peoples" />
                 </div>
                <div className='dec__header__sec'>
                <p className="desc__peoples">
                  1,600 people requested access a visit in last 24 hours
                  </p>
                </div>
                 
                 

              </div>

        </div>

        <div className="header__sec__right">
               <div className="header__right__wrapper">
                   <img src={Aipng} alt="" className="c" />
                </div> 
        </div>
       </div>
    </div>
  )
}

export default Header