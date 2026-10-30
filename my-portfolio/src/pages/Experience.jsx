import TimelineItem from '../components/TimelineItem'
import { experience, education } from '../data/experience'

export default function Experience() {
  return (
    <section className="content-narrow">
      <h1 className="page-title h2 fw-semibold mb-2">Experience & Education</h1>
      <p className="text-body-secondary mb-5">
        My professional experience and academic background.
      </p>

      <h2 className="h5 fw-semibold mb-4">
        <i className="bi bi-briefcase accent-text me-2"></i>Experience
      </h2>
      <div className="timeline mb-5">
        {experience.map((job) => (
          <TimelineItem
            key={`${job.role}-${job.start}`}
            title={job.role}
            label={job.type}
            organization={job.organization}
            location={job.location}
            dates={`${job.start} – ${job.end}`}
            points={job.highlights}
            tags={job.tags}
          />
        ))}
      </div>

      <h2 className="h5 fw-semibold mb-4">
        <i className="bi bi-mortarboard accent-text me-2"></i>Education
      </h2>
      <div className="timeline">
        {education.map((edu) => (
          <TimelineItem
            key={edu.degree}
            title={edu.degree}
            organization={edu.institution}
            location={edu.location}
            dates={`${edu.start} – ${edu.end}`}
            points={edu.details}
          />
        ))}
      </div>
    </section>
  )
}