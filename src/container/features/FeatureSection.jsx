import Features from "./features";
import './Features.scss';
import '../../assests/styles/style.scss'


const  FeaturesSection=()=>{
    return (
      <div className="featureSection__container__body">
        <div className="feature__body__wrapper">
            <div className="feature__section__left">
              <h3>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h3>
  
               <p>Request Early Access to Get Started</p>
            </div>
  
            <div className="features__section__right">
                <div className="features__sec__right--container">
                    <Features title={'Improving end distrusts instantly '} desc={'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'}/>

                </div>
                <div className="features__sec__right--container">
                <Features title={'Become the tended active'} desc={'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'}/>
                </div>
                <div className="features__sec__right--container">
                <Features title={'Message or am nothing'} desc={'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'}/>
                </div>
                <div className="features__sec__right--container">
                <Features title={'Really boy law county'} desc={'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'}/>
                 </div>
            </div>
        </div>
      </div>
    )
  }

  export default FeaturesSection;
