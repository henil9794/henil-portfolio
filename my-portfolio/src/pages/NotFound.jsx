import { Link } from 'react-router'

export default function NotFound() {
  return (
    <section className="text-center py-5">
      <h1 className="page-title h2 fw-semibold mb-3">Page not found</h1>
      <p className="text-body-secondary mb-4">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="btn btn-primary">Go home</Link>
    </section>
  )
}