import React from 'react'
import './Brand.scss';
import '../../assests/styles/style.scss'
import dropbox from '../../assests/images/dropbox.png'
import atlassiann from "../../assests/images/atlassian.png"
import google from '../../assests/images/google.png'
import shopify from '../../assests/images/shopify.png'
import slack from '../../assests/images/slack.png'


const Links=()=>{
  return (
    <>
       <img src={dropbox} alt="" className="brand__img" />
           <img src={google} alt="" className="brand__img" />
           <img src={atlassiann} alt="" className="brand__img" />
           <img src={shopify} alt="" className="brand__img" />
           <img src={slack} alt="" className="brand__img" />
          
    
    </>
  )
}



const Brand = () => {
  return (
    <div className="brand__section">
       <div className="brand__sec__wrapper">
          <Links /> 
       </div>
      
    </div>
  )
  
}

export default Brand