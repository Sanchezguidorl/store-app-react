import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
<div id='Loading' className='align-items-center d-flex justify-content-center'>
<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
</div>
  );
}

export default Loading;