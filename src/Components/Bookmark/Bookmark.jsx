import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div>
      <h2 className="text-xl font-medium my-4 bg-purple-100 rounded-xl  py-5">
        {title}
      </h2>
    </div>
  );
};
Bookmark.propTypes = {
  bookmark: PropTypes.object,
};
export default Bookmark;
