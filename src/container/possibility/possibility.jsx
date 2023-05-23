
import './Possibility.scss';
import Imgpossiblity from "../../assests/images/possibility.png";
const Possibility = () => {
  return (
      <div className="possibility__section--body">
        <div className="possibility__section--body__wrapper">
          <div className="possibility__section__left--container">
              <img src={Imgpossiblity} alt="possibility img" className="possibility__img" />
          </div>
          <div className="possibility__section__right--container">
            <p className='possibility__para__first' >Request Early Access to Get Started</p>
              <h3 className='possibility__heading'>The possibilities are beyond your imagination</h3>
              <p className='possibility__lead'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

            <a href="#" className="possibility__link">Request Early Access to Get Started</a>

              
            </div>
        </div>
      </div>
  )
}

export default Possibility ;