import './CategoryFilter.css'

const CATEGORY_ICONS = {
  bas: '🩲',
  casquettes: '🧢',
  'mitaines/gants': '🧤',
  gants: '🧤',
  mitaines: '🧤',
  médailles: '🏅',
  medailles: '🏅',
}

function getIcon(category) {
  const key = category.toLowerCase()
  for (const [k, v] of Object.entries(CATEGORY_ICONS)) {
    if (key.includes(k)) return v
  }
  return '✦'
}

export default function CategoryFilter({ categories, active, onChange }) {
  const all = ['Tous', ...categories]

  return (
    <div className="filter-section">
      <div className="filter-scroll">
        {all.map((cat) => (
          <button
            key={cat}
            className={`filter-btn${active === cat ? ' filter-btn--active' : ''}`}
            onClick={() => onChange(cat)}
          >
            {cat !== 'Tous' && (
              <span className="filter-icon" aria-hidden="true">
                {getIcon(cat)}
              </span>
            )}
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}
