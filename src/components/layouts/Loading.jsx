import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <div className="loading align-items-center d-flex justify-content-center w-100">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loading;
