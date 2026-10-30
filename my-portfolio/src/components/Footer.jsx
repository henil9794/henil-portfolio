import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-top py-4">
      <div className="container small text-body-secondary">
        © {new Date().getFullYear()} {profile.name}
      </div>
    </footer>
  )
}