import './ProductCard.css'

const PLACEHOLDER = 'data:image/svg+xml,' + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
  <rect width="400" height="300" fill="#e8edf2"/>
  <rect x="160" y="100" width="80" height="80" rx="8" fill="#9aa5b4" opacity="0.5"/>
  <circle cx="185" cy="125" r="12" fill="#9aa5b4" opacity="0.7"/>
  <path d="M160 180 L185 150 L205 165 L225 145 L240 180Z" fill="#9aa5b4" opacity="0.7"/>
</svg>
`)

export default function ProductCard({ product }) {
  const { nom, description, categorie, image } = product

  return (
    <article className="card">
      <div className="card-img-wrap">
        <img
          className="card-img"
          src={image || PLACEHOLDER}
          alt={nom}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = PLACEHOLDER
          }}
        />
        {categorie && (
          <span className="card-badge">{categorie}</span>
        )}
      </div>
      <div className="card-body">
        <h3 className="card-name">{nom}</h3>
        {description && <p className="card-desc">{description}</p>}
      </div>
    </article>
  )
}
