import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="bg-gray-300 px-5 md:w-1/3 ml-10 rounded-xl">
      <div className="bg-white/50 py-5 rounded-xl my-5">
        <h2 className="text-xl font-bold text-center ">
          Reading Time: {readingTime}
        </h2>
      </div>
      <div className="text-center pb-5 ">
        <h2 className="font-bold text-xl bg-white/70 py-5 rounded-xl">
          Bookmarked Blogs:{bookmarks.length}
        </h2>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
