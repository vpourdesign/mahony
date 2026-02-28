import './CategoryFilter.css'

export default function CategoryFilter({ categories, active, onChange }) {
  const all = ['Tous', ...categories]

  return (
    <div className="filter-section">
      <p className="filter-label">Collection</p>
      <div className="filter-scroll">
        {all.map((cat) => (
          <button
            key={cat}
            className={`filter-btn${active === cat ? ' filter-btn--active' : ''}`}
            onClick={() => onChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}
