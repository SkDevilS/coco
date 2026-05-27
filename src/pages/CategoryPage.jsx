import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/api';
import ProductGrid from '../components/ProductGrid';
import FilterPanel from '../components/FilterPanel';
import SortDropdown from '../components/SortDropdown';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';

const CategoryPage = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('newest');
  const [filters, setFilters] = useState({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Fetch products by section slug
        const response = await api.get('/products', {
          params: {
            section_slug: slug,
            per_page: 1000, // Increased limit to show all products
          },
        });
        
        const productsData = response.data?.products || [];
        setProducts(productsData);
        setFilteredProducts(productsData);
        
        // Fetch section details for name
        try {
          const sectionsResponse = await api.get('/sections');
          const section = sectionsResponse.data.find(s => s.slug === slug);
          setCategoryName(section?.name || slug);
        } catch (error) {
          setCategoryName(slug);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
        setFilteredProducts([]);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProducts();
    }
  }, [slug]);

  useEffect(() => {
    let filtered = [...products];

    // Apply filters
    if (filters.sizes && filters.sizes.length > 0) {
      filtered = filtered.filter((p) =>
        p.sizes.some((size) => filters.sizes.includes(size))
      );
    }

    if (filters.colors && filters.colors.length > 0) {
      filtered = filtered.filter((p) =>
        p.colors.some((color) => filters.colors.includes(color))
      );
    }

    if (filters.maxPrice) {
      filtered = filtered.filter((p) => p.price <= filters.maxPrice);
    }

    if (filters.inStockOnly) {
      filtered = filtered.filter((p) => p.stock > 0);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'oldest':
        filtered.reverse();
        break;
      default:
        // newest (default)
        break;
    }

    setFilteredProducts(filtered);
  }, [products, filters, sortBy]);

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title={`${categoryName} - Buy Online at Best Prices | Coco Ventures`}
        description={`Shop ${categoryName} cosmetics and beauty products online at Coco Ventures. Browse ${filteredProducts.length}+ quality products with fast delivery in India.`}
        keywords={`${categoryName}, buy ${categoryName} online, ${categoryName} products, best ${categoryName} India`}
        url={`/category/${slug}`}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', link: '/' },
          { label: categoryName },
        ]}
      />

      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">{categoryName}</h1>

      {/* Mobile Filter Toggle Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center justify-between"
        >
          <span>Filters</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
        {/* Sidebar Filters */}
        <aside className={`lg:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
          <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 md:mb-6">
            <p className="text-gray-600 text-sm md:text-base">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            </p>
            <SortDropdown value={sortBy} onChange={setSortBy} />
          </div>

          <ProductGrid products={filteredProducts} loading={loading} />
        </main>
      </div>
    </div>
  );
};

export default CategoryPage;

