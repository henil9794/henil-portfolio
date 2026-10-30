export default function ProjectCard({ project }) {
  const { title, description, tags, github, demo, image } = project

  return (
    <article className="card h-100 project-card">
      {image && (
        <img
          src={image}
          alt={`${title} preview`}
          className="card-img-top project-img"
          loading="lazy"
        />
      )}

      <div className="card-body d-flex flex-column">
        <h2 className="h5 card-title fw-semibold">{title}</h2>
        <p className="card-text text-body-secondary">{description}</p>

        <div className="d-flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span key={tag} className="badge rounded-pill bg-body-secondary text-body-secondary fw-normal">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto d-flex gap-3">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="card-link-icon">
              <i className="bi bi-github me-1"></i>Code
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="card-link-icon">
              <i className="bi bi-box-arrow-up-right me-1"></i>Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}