import ProductCard from './ProductCard.jsx'
import './ProductGrid.css'

export default function ProductGrid({ products, loading, error }) {
  if (loading) {
    return (
      <div className="grid-state">
        <div className="spinner" aria-label="Chargement…" />
        <p className="grid-state-text">Chargement des produits…</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="grid-state grid-state--error">
        <span className="grid-state-icon">⚠️</span>
        <p className="grid-state-text">{error}</p>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="grid-state">
        <span className="grid-state-icon">🔍</span>
        <p className="grid-state-text">Aucun produit trouvé dans cette catégorie.</p>
      </div>
    )
  }

  return (
    <section className="grid-wrap">
      <p className="grid-count">{products.length} article{products.length > 1 ? 's' : ''}</p>
      <div className="grid">
        {products.map((product, i) => (
          <ProductCard key={`${product.nom}-${i}`} product={product} />
        ))}
      </div>
    </section>
  )
}
