import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <div className="card p-5 shadow">
            <h1 className="display-1 text-muted mb-4">404</h1>
            <h2 className="mb-3">Page Not Found</h2>
            <p className="text-muted mb-4">
              The page <code>{location.pathname}</code> you're looking for doesn't exist.
            </p>
            <div className="d-flex justify-content-center gap-2">
              <Link to="/" className="btn btn-primary">
                Go Home
              </Link>
              <button onClick={() => window.history.back()} className="btn btn-outline-secondary">
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
