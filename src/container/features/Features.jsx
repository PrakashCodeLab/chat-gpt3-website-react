
import './Features.scss'

const  Features = ({title, desc}) => {
  return (
    <div className='features__conatiner'>
         <div className="features__conatiner__heading">
        <div className='feature__upperline'></div>
          <h2 className='features__title'>{title}</h2>
         </div>
         <div className="features__container__descrption">
            <p className='features__desc'>{desc}</p>
         </div>
    </div>
  )
}







export default  Features;
