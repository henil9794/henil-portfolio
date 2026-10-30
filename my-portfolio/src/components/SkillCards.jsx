export default function SkillCards({ groups, rows }) {
  // Look up how many projects + roles use each skill
  const usage = Object.fromEntries(
    rows.map((row) => [row.skill, row.projects.length + row.roles.length]),
  )

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      {groups.map((group) => (
        <div className="col" key={group.category}>
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="skill-icon">
                  <i className={`bi ${group.icon}`}></i>
                </span>
                <h2 className="h6 fw-semibold mb-0">{group.category}</h2>
              </div>

              <div className="d-flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-chip"
                    title={`Used in ${usage[skill]} project(s) or role(s)`}
                  >
                    {skill}
                    {usage[skill] > 0 && <span className="skill-count">{usage[skill]}</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}