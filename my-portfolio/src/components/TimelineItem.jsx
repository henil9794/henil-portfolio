export default function TimelineItem({
  title,
  label,
  organization,
  location,
  dates,
  points = [],
  tags = [],
}) {
  return (
    <div className="timeline-item">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-baseline gap-1 mb-1">
        <h3 className="h6 fw-semibold mb-0">
          {title}
          {label && (
            <span className="badge rounded-pill bg-body-secondary text-body-secondary fw-normal ms-2">
              {label}
            </span>
          )}
        </h3>
        <span className="small text-body-secondary text-nowrap">{dates}</span>
      </div>

      <p className="small fw-medium accent-text mb-2">
        {organization}
        {location && <span className="text-body-secondary fw-normal"> · {location}</span>}
      </p>

      {points.length > 0 && (
        <ul className="text-body-secondary ps-3 mb-2">
          {points.map((point, i) => (
            <li key={i} className="mb-1">{point}</li>
          ))}
        </ul>
      )}

      {tags.length > 0 && (
        <div className="d-flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="badge rounded-pill bg-body-secondary text-body-secondary fw-normal">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}