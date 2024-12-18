import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="bg-gray-300 px-5 md:w-1/3 ml-10 rounded-xl">
      <div>
        <h2>Reading Time: {readingTime}</h2>
      </div>
      <div className="text-center py-10 ">
        <h2 className="font-bold">Bookmarked Blogs:{bookmarks.length}</h2>
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
