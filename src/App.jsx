import React from 'react'
import {Brand ,CTA, Navbar  } from './components';
import {Footer ,Blog,FeatureSection, Header,Possibility,Whatgpt3} from "./container"
import './assests/styles/style.scss';


const App = () => {
  return (
    <div className='app'>
      <div className="gradient__bg">
        <Navbar/>
        <Header/>

      </div>

      <Brand/>
      <Whatgpt3/>
      <FeatureSection/> 
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
      

      
     

    </div>
  )
}

export default App


