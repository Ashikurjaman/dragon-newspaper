import { Link } from "react-router-dom";

const NewsCart = ({ news }) => {
  // eslint-disable-next-line react/prop-types
  const { details,image_url,title,_id } = news;
  
  return (
    <div className="card card-compact  bg-base-100 shadow-xl mb-10">
      <figure>
        <img
          src={image_url}
          alt="news"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {
            details.length > 200 ?
            <p>{details.slice(0,200)}<Link to={`/news/${_id}`} className="text-blue-600 ml-2 font-bold">Read more ..</Link> </p>
            :
            <p>{details} </p>
        }
        
      </div>
    </div>
  );
};

export default NewsCart;
