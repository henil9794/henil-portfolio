import { useState } from 'react'
import NotebookCell from '../components/NotebookCell'
import SkillCards from '../components/SkillCards'
import SkillTable from '../components/SkillTable'
import { skillGroups } from '../data/skills'
import { projects } from '../data/projects'
import { experience } from '../data/experience'
import { skillTable } from '../utils/skillUsage'

const numericKeys = ['projects', 'roles']

function sortRows(rows, key, dir) {
  const value = (row) => (Array.isArray(row[key]) ? row[key].length : row[key])

  return [...rows].sort((a, b) => {
    const av = value(a)
    const bv = value(b)
    const cmp = typeof av === 'number' ? av - bv : av.localeCompare(bv)
    return dir === 'asc' ? cmp : -cmp
  })
}

export default function Skills() {
  const [view, setView] = useState('cards')
  const [sortKey, setSortKey] = useState('projects')
  const [sortDir, setSortDir] = useState('desc')

  function handleSort(key) {
    if (key === sortKey) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDir(numericKeys.includes(key) ? 'desc' : 'asc')
    }
  }

  const stats = [
    { value: skillTable.length, label: 'skills' },
    { value: skillGroups.length, label: 'categories' },
    { value: projects.length, label: 'projects' },
    { value: experience.length, label: 'roles' },
  ]

  const viewToggle = (
    <div className="btn-group btn-group-sm" role="group" aria-label="Choose view">
      <button
        type="button"
        className={`btn ${view === 'cards' ? 'btn-primary' : 'btn-outline-secondary'}`}
        onClick={() => setView('cards')}
        aria-pressed={view === 'cards'}
      >
        <i className="bi bi-grid me-1"></i>Cards
      </button>
      <button
        type="button"
        className={`btn ${view === 'table' ? 'btn-primary' : 'btn-outline-secondary'}`}
        onClick={() => setView('table')}
        aria-pressed={view === 'table'}
      >
        <i className="bi bi-table me-1"></i>DataFrame
      </button>
    </div>
  )

  const viewCode =
    view === 'cards' ? (
      <>
        <span className="tok-var">skills</span>.<span className="tok-fn">groupby</span>(
        <span className="tok-str">"category"</span>)
      </>
    ) : (
      <>
        <span className="tok-var">skills</span>.<span className="tok-fn">sort_values</span>(
        <span className="tok-str">"{sortKey}"</span>, ascending=
        <span className="tok-kw">{sortDir === 'asc' ? 'True' : 'False'}</span>)
      </>
    )

  return (
    <section>
      <h1 className="page-title h2 fw-semibold mb-2">Skills</h1>
      <p className="text-body-secondary mb-5">
        My toolkit, explored the way I'd explore any dataset.
      </p>

      <NotebookCell
        number={1}
        code={
          <>
            <span className="tok-var">skills</span>.<span className="tok-fn">describe</span>()
          </>
        }
      >
        <div className="row row-cols-2 row-cols-md-4 g-3">
          {stats.map((stat) => (
            <div className="col" key={stat.label}>
              <div className="stat-box">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </NotebookCell>

      <NotebookCell number={2} code={viewCode} actions={viewToggle}>
        {view === 'cards' ? (
          <SkillCards groups={skillGroups} rows={skillTable} />
        ) : (
          <SkillTable
            rows={sortRows(skillTable, sortKey, sortDir)}
            sortKey={sortKey}
            sortDir={sortDir}
            onSort={handleSort}
          />
        )}
        <p className="small text-body-secondary mt-3 mb-0">
          Counts show how many of my projects and roles use each skill, calculated
          automatically from the Projects and Experience pages.
        </p>
      </NotebookCell>
    </section>
  )
}