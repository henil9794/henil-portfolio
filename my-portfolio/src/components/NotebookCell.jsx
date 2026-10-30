export default function NotebookCell({ number, code, actions, children }) {
  return (
    <div className="nb-cell">
      <div className="nb-row">
        <span className="nb-prompt">In [{number}]:</span>
        <div className="nb-input">
          <code className="nb-code">{code}</code>
          {actions}
        </div>
      </div>

      <div className="nb-row mt-3">
        <span className="nb-prompt nb-prompt-out">Out[{number}]:</span>
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  )
}