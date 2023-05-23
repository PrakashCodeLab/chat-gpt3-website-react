import './Blog.scss';
import Articles from './articles';

const Blog = () => {
  return (
   <div className="blog__container__body">
       <div className="blog__body__wrapper">
           <div className="blog__heading__sec">
            <h4 className="blog__heading">A lot is happening, 
We are blogging about it.</h4>
           </div>
            <div className="blog__conatiner__body--articles">
                <Articles />
            </div>
        </div> 
   </div>
  )
}

export default Blog