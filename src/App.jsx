import { useState, useEffect, useMemo } from 'react'
import Papa from 'papaparse'
import Header from './components/Header.jsx'
import CategoryFilter from './components/CategoryFilter.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import './App.css'

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRtDQeMyV3bGOOQpTrQ2CAmVMCVCVI5hqPUEIymAH2Xuw3cCUibUYL7DtiHtdDvmd6F3qj3KAoRmKAc/pub?output=csv'

export default function App() {
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState('Tous')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    Papa.parse(CSV_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      transformHeader: (h) => h.trim().toLowerCase(),
      complete: (results) => {
        const rows = results.data
          .map((row) => ({
            nom: row['nom_produit'] || row['nom'] || row['name'] || '',
            description: row['description'] || '',
            categorie: (row['catégorie'] || row['categorie'] || row['category'] || '').trim(),
            image: row['lien_image'] || row['image'] || row['image url'] || row['imageurl'] || row['photo'] || '',
            statut: (row['statut'] || 'actif').trim().toLowerCase(),
          }))
          .filter((r) => r.nom && r.statut !== 'brouillon')
        setProducts(rows)
        setLoading(false)
      },
      error: (err) => {
        setError('Impossible de charger les données. Vérifiez que le Google Sheet est bien publié en CSV.')
        setLoading(false)
        console.error(err)
      },
    })
  }, [])

  // Derive sorted unique categories dynamically from data
  const categories = useMemo(() => {
    const unique = [...new Set(products.map((p) => p.categorie).filter(Boolean))]
    return unique.sort((a, b) => a.localeCompare(b, 'fr'))
  }, [products])

  const filtered = useMemo(() => {
    if (activeCategory === 'Tous') return products
    return products.filter((p) => p.categorie === activeCategory)
  }, [products, activeCategory])

  return (
    <div className="app">
      <Header />
      <main className="main">
        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />
        <ProductGrid products={filtered} loading={loading} error={error} />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Mahony – Accessoires de Course Custom</p>
      </footer>
    </div>
  )
}
