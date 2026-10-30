import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const categories = ['All', ...new Set(projects.map((p) => p.category))]

export default function Projects() {
  const [active, setActive] = useState('All')

  const visible =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section>
      <h1 className="page-title h2 fw-semibold mb-2">Projects</h1>
      <p className="text-body-secondary mb-4">
        A selection of projects from my coursework and independent work.
      </p>

      <div className="d-flex flex-wrap gap-2 mb-4" role="group" aria-label="Filter projects by category">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`btn btn-sm rounded-pill px-3 ${active === cat ? 'btn-primary' : 'btn-outline-secondary'}`}
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {visible.map((project) => (
          <div className="col" key={project.title}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}