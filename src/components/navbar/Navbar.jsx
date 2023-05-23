import {useState , useEffect}from 'react'
import './Navbar.scss'   
import  Logo from '../../assests/images/logo.svg'; 
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";





const Menulink =()=>{
  return (
  <div className="navbar__link__section"> 
   <p><a href="#home">home</a></p>
   <p><a href="#wgpt3">what is gpt</a></p>
  <p><a href="#possibility">open ai</a></p>
  <p><a href="#features">case studies</a></p>
   <p><a href="#blog">library</a></p>
  
  </div>
  )
}


const Iogoimg=()=>{
  return (
     <div className="navbar__logo__section">
      <img src={Logo} alt="img logo" className="navbar__logo" />
     </div>
  )
}


const Buttonsign =()=>{
   return (
    <div className="navbar__btn__section">
       <p><a href="#" className="navbar__btn__signin">sign in</a></p>

        <button type='button' className='btn navbar__btn__signup'>sign up</button>
    </div>
   )
}






const Hamburger  =()=>{
  
  
  const [toggle ,setToggle] = useState(false);

  const [navopen ,setNavopen] =useState(false);

  useEffect(()=>{
      
    const body = document.body;

    if (navopen) {
        
        body.classList.add("nav-open");
    }else{
       body.classList.remove("nav-open");
    }
  },[navopen]);

const handleClick= ()=>{
  
  setToggle(!toggle);
  setNavopen(!navopen);


}



  return(
    <div className="navbar__hamburger__section">
      {toggle
      ? <RiCloseLine color='#fff' size={27} onClick={handleClick} />
      :<RiMenu3Line color='#fff' size={27} onClick={handleClick} />
     
    } 

    <div className="mobile__navbar__section gradient__bg">
      {
        toggle &&(
             <>
               <Menulink/>
               <Buttonsign/>
             </>
        )
      }
    </div>
    </div>
  )
}




const Navbar =()=>{
  return(
      <div className="navbar__container">
         <div className="navbar__wrapper">
           <div className="navbar__sec__wrapper">
             <Iogoimg/>
             <Menulink/>
             <Buttonsign/> 
          </div>  

          <div className="hamburger__sectiom">
            <Hamburger />
          </div>
         </div>
     </div>
  )
}


export default Navbar