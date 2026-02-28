import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand">
          <svg className="header-logo" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <circle cx="20" cy="20" r="20" fill="#0082c3" />
            <path
              d="M10 26 L16 14 L20 22 L24 18 L30 26"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          <span className="header-title">Mahony</span>
          <span className="header-tagline">Accessoires de Course Custom</span>
        </div>
      </div>
    </header>
  )
}
