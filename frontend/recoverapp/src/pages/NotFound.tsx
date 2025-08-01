import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to={'/'}>
      <button>Go back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;