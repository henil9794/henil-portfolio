import { useState } from 'react'
import { profile } from '../data/profile'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [validated, setValidated] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const formEl = e.currentTarget

    if (!formEl.checkValidity()) {
      setValidated(true)
      return
    }

    const data = new FormData(formEl)
    setStatus('sending')

    try {
      const res = await fetch(profile.contact.formEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('Request failed')

      setStatus('success')
      setForm(initialForm)
      setValidated(false)
    } catch {
      setStatus('error')
    }
  }

  const sending = status === 'sending'

  return (
    <form noValidate onSubmit={handleSubmit} className={validated ? 'was-validated' : ''}>
      {status === 'success' && (
        <div className="alert alert-success d-flex align-items-center gap-2" role="status">
          <i className="bi bi-check-circle"></i>
          Thanks for reaching out! I'll get back to you soon.
        </div>
      )}
      {status === 'error' && (
        <div className="alert alert-danger d-flex align-items-center gap-2" role="alert">
          <i className="bi bi-exclamation-circle"></i>
          Something went wrong. Please try again or email me directly.
        </div>
      )}

      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            value={form.name}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please enter your name.</div>
        </div>

        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please enter a valid email address.</div>
        </div>

        <div className="col-12">
          <label htmlFor="subject" className="form-label">
            Subject <span className="text-body-secondary small">(optional)</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="form-control"
            value={form.subject}
            onChange={handleChange}
          />
        </div>

        <div className="col-12">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="form-control"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <div className="invalid-feedback">Please write a message.</div>
        </div>

        {/* Honeypot: hidden from people, but spam bots fill it in */}
        <input type="text" name="_gotcha" className="d-none" tabIndex="-1" autoComplete="off" />

        <div className="col-12">
          <button type="submit" className="btn btn-primary px-4" disabled={sending}>
            {sending ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                Sending...
              </>
            ) : (
              <>
                <i className="bi bi-send me-2"></i>Send Message
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  )
}