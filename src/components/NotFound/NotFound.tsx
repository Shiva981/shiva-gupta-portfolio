import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">

      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>
        The page you're looking for doesn't exist or has been moved.
      </p>

      <a href="/" className="primary-btn">
        Back to Home
      </a>

    </section>
  );
}

export default NotFound;