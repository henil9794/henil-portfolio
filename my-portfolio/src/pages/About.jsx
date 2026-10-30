import { Link } from 'react-router'
import { profile } from '../data/profile'
import profilePhoto from '../assets/profile.png'

export default function About() {
  const resumeUrl = `${import.meta.env.BASE_URL}${profile.resume}`

  return (
    <section className="row align-items-center g-5 py-lg-4">
      <div className="col-md-5 order-md-2 text-center">
        <img
          src={profilePhoto}
          alt={`Portrait of ${profile.name}`}
          className="about-photo rounded-circle shadow-sm"
        />
      </div>

      <div className="col-md-7 order-md-1">
        <p className="text-body-secondary mb-2">Hi, I'm</p>
        <h1 className="display-5 fw-semibold page-title mb-2">{profile.name}</h1>
        <p className="fs-5 accent-text fw-medium mb-3">{profile.title}</p>
        <p className="lead mb-4">{profile.tagline}</p>

        {profile.about.map((paragraph, i) => (
          <p key={i} className="text-body-secondary">{paragraph}</p>
        ))}

        <div className="d-flex flex-wrap gap-2 mt-4">
          <Link to="/projects" className="btn btn-primary px-4">
            View Projects
          </Link>
          <a href={resumeUrl} download className="btn btn-outline-secondary px-4">
            <i className="bi bi-download me-2"></i>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}