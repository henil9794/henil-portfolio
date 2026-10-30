const columns = [
  { key: 'skill', label: 'skill', numeric: false },
  { key: 'category', label: 'category', numeric: false },
  { key: 'projects', label: 'projects', numeric: true },
  { key: 'roles', label: 'roles', numeric: true },
]

export default function SkillTable({ rows, sortKey, sortDir, onSort }) {
  return (
    <div className="card overflow-hidden">
      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0 df-table">
          <thead>
            <tr>
              <th scope="col" className="df-index"></th>
              {columns.map((col) => {
                const active = col.key === sortKey
                const icon = !active
                  ? 'bi-arrow-down-up opacity-50'
                  : sortDir === 'asc' ? 'bi-arrow-up' : 'bi-arrow-down'

                return (
                  <th
                    key={col.key}
                    scope="col"
                    className={col.numeric ? 'text-end' : ''}
                    aria-sort={active ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'}
                  >
                    <button
                      type="button"
                      className={`sort-btn ${active ? 'accent-text' : ''}`}
                      onClick={() => onSort(col.key)}
                    >
                      {col.label}
                      <i className={`bi ${icon}`}></i>
                    </button>
                  </th>
                )
              })}
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.skill}>
                <td className="df-index">{row.index}</td>
                <td className="fw-medium">{row.skill}</td>
                <td className="text-body-secondary">{row.category}</td>
                <td className="df-num" title={row.projects.join(', ') || 'None yet'}>
                  {row.projects.length}
                </td>
                <td className="df-num" title={row.roles.join(', ') || 'None yet'}>
                  {row.roles.length}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card-footer small text-body-secondary font-monospace">
        {rows.length} rows × {columns.length} columns
      </div>
    </div>
  )
}