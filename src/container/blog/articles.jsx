import './Blog.scss';
import   imgBlog1 from  "../../assests/images/blog01.png";
import   imgBlog2 from  "../../assests/images/blog02.png";
import   imgBlog3 from  "../../assests/images/blog03.png";
import   imgBlog4 from  "../../assests/images/blog04.png";
import   imgBlog5 from  "../../assests/images/blog05.png";



const blogSection=[{
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    date:"Sep 26, 2021",
    link:"Read full article",
    img:imgBlog1,
    id:1
},
{
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",

    date:"Sep 26, 2021",
    link:"Read full article",
    img:imgBlog2,
    id:2
},
{
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    date:"Sep 26, 2021",
    link:"Read full article",
    img:imgBlog3,
    id:3
},
{
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    date:"Sep 26, 2021",
    link:"Read full article",
    img:imgBlog4,
    id:4
},
{
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    date:"Sep 26, 2021",
    link:"Read full article",
    img:  imgBlog5,
    id:5
}


];

const Articles = () => {
    return (
      <section className="articles__section__container">
        {blogSection.map((blog, index) => {
          if (index === 0) {
            return (
              <article key={blog.id} className="article__section__one">
                <header>
                  <div className="article__img__container">
                    <img src={blog.img} alt="Blog article image" />
                  </div>
                  <div className="articles__blog__content__section">
                    <p className="article__date__section">{blog.date}</p>
                    <h2 className="article__heading">{blog.title}</h2>
                  </div>
                </header>
                <footer>
                  <a href="#" className="article__link">
                    {blog.link}
                  </a>
                </footer>
              </article>
            );
          } else {
            return (
              <article key={blog.id} className="article__section__two">
                <header>
                  <div className="article__img__container">
                    <img src={blog.img} alt="Blog article image" />
                  </div>
                  <div className="articles__blog__content__section">
                    <p className="article__date__section">{blog.date}</p>
                    <h2 className="article__heading">{blog.title}</h2>
                  </div>
                </header>
                <footer>
                  <a href="#" className="article__link">
                    {blog.link}
                  </a>
                </footer>
              </article>
            );
          }
        })}
      </section>
    );
  };
  
  export default Articles;
  

