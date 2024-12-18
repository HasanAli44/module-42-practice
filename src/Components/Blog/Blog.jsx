import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const { id, title, cover, author, author_img, posted_date, reading_time } =
    blog;
  return (
    <div>
      <img src={cover} alt={`cover picture of the title ${title}`} />
      <div className="flex items-center py-5 justify-between ">
        <div className="flex items-center">
          <img className="w-[60px] h-[60px]" src={author_img} alt="" />
          <div className="pl-3">
            <h5>{author}</h5>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center ">
          <p className="font-bold">{reading_time}</p>
          <button onClick={() => handleAddToBookmark(blog)}>
            <FaRegBookmark className="ml-2"></FaRegBookmark>
          </button>
        </div>
      </div>
      <h2 className=" font-bold text-4xl">{title}</h2>
      {/* {hashtags.map((hash, idx) => (
        <span key={idx}>
          <a href="#">#{hash}</a>
        </span>
      ))} */}
      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="mb-10 mt-5 text-blue-800 underline font-semibold"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
