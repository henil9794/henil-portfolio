import ContactForm from '../components/ContactForm'
import { profile } from '../data/profile'

export default function Contact() {
  const { email, phone, intro } = profile.contact

  const methods = [
    {
      icon: 'bi-envelope',
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: 'bi-telephone',
      label: 'Phone',
      value: phone,
      href: `tel:${phone.replace(/[^\d+]/g, '')}`,
    },
  ]

  return (
    <section className="row g-5">
      <div className="col-lg-5">
        <h1 className="page-title h2 fw-semibold mb-3">Contact Me</h1>
        <p className="text-body-secondary mb-4">{intro}</p>

        <div className="d-flex flex-column gap-3">
          {methods.map((method) => (
            <a key={method.label} href={method.href} className="card contact-method">
              <div className="card-body d-flex align-items-center gap-3">
                <span className="skill-icon contact-icon">
                  <i className={`bi ${method.icon}`}></i>
                </span>
                <div className="min-w-0">
                  <div className="small text-body-secondary">{method.label}</div>
                  <div className="fw-medium text-break">{method.value}</div>
                </div>
                <i className="bi bi-arrow-right ms-auto text-body-secondary"></i>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="col-lg-7">
        <div className="card">
          <div className="card-body p-4 p-md-5">
            <h2 className="h5 fw-semibold mb-4">Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}