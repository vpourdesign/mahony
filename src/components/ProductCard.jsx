import './ProductCard.css'

const PLACEHOLDER = 'data:image/svg+xml,' + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500">
  <rect width="400" height="500" fill="#1a1a1a"/>
  <rect x="160" y="190" width="80" height="80" rx="4" fill="#3a3832" opacity="0.6"/>
  <circle cx="185" cy="215" r="12" fill="#3a3832" opacity="0.8"/>
  <path d="M160 270 L185 240 L205 255 L225 235 L240 270Z" fill="#3a3832" opacity="0.8"/>
</svg>
`)

export default function ProductCard({ product }) {
  const { nom, description, image } = product

  return (
    <article className="card">
      <div className="card-img-wrap">
        <img
          className="card-img"
          src={image || PLACEHOLDER}
          alt={nom}
          loading="lazy"
          onError={(e) => { e.currentTarget.src = PLACEHOLDER }}
        />
        <div className="card-overlay">
          <div className="card-text">
            <h3 className="card-name">{nom}</h3>
            {description && <p className="card-desc">{description}</p>}
          </div>
        </div>
      </div>
    </article>
  )
}
