import PropTypes from "prop-types";

function Divider({ text }) {
  return (
    <div className="d-flex align-items-center py-3 my-4">
      <h3 className="position-absolute start-50 translate-middle-x p-1 bg-white fw-light">
        {text}
      </h3>
      <hr className="w-100 opacity-100" />
    </div>
  );
}
Divider.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Divider;
