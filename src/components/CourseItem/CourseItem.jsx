import { useNavigate } from "react-router-dom";

const CourseItem = ({ course }) => {
  const navigate = useNavigate();
  const {
    id,
    title,
    rating,
    price,
    discount_price: discountPrice,
    instructor,
    image_url: imageUrl,
  } = course;

  return (
    <div
      onClick={() => navigate(`/course/${id}`)}
      className="list-card bg-white rounded-2xl shadow p-4 m-2 block"
    >
      <div>
        <img src={imageUrl} alt={title} className="w-full h-40" />
      </div>
      <div>
        <div>
          <h2 className="font-bold text-md overflow-hidden text-ellipsis line-clamp-2">
            {title}
          </h2>
        </div>
        <div>
          <p className="text-xs text-[#595c73]">{instructor}</p>
        </div>
        <div>
          <span className="text-sm font-bold text-[#8b4309] ">
            {rating} <span>&#9733;</span>
          </span>
        </div>
        <div>
          <span className="font-bold">
            Price: &nbsp;
            <span className={`line-through`}>${discountPrice} </span>
          </span>
          &nbsp;
          <span className={`font-bold ${discountPrice ? "" : ""}`}>
            ${price}
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CourseItem;
