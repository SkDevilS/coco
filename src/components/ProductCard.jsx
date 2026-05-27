import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../stores/cartStore';
import { useWishlistStore } from '../stores/wishlistStore';
import { useAuthStore } from '../stores/authStore';
import { useToast } from '../hooks/useToast';
import { formatPrice } from '../utils/priceFormatter';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthStore();
  const addItem = useCartStore((state) => state.addItem);
  const addToWishlist = useWishlistStore((state) => state.addItem);
  const isInWishlist = useWishlistStore((state) => state.isInWishlist(product.id));
  const { showSuccess, showError } = useToast();

  const handleAddToCart = (e) => {
    e.preventDefault();
    
    if (!isLoggedIn) {
      showError('Please login to add items to cart');
      navigate('/account?tab=login');
      return;
    }
    
    if (product.stock > 0) {
      addItem(product, 1);
      showSuccess('Product added to cart');
    }
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    
    if (!isLoggedIn) {
      showError('Please login to add items to wishlist');
      navigate('/account?tab=login');
      return;
    }
    
    addToWishlist(product);
    showSuccess('Added to wishlist');
  };

  const handleRemoveFromWishlist = (e) => {
    e.preventDefault();
    const removeItem = useWishlistStore.getState().removeItem;
    removeItem(product.id);
    showSuccess('Removed from wishlist');
  };

  const discountPercentage = product.is_on_sale && product.original_price 
    ? Math.round(((product.original_price - product.price) / product.original_price) * 100)
    : 0;

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div className="relative overflow-hidden">
          <img
            src={product.images && product.images[0] ? product.images[0] : 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?w=500'}
            alt={product.title}
            className="w-full h-48 md:h-56 lg:h-64 object-cover bg-gray-100 transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              if (e.target.src !== 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?w=500') {
                e.target.src = 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?w=500';
              }
            }}
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.is_on_sale && discountPercentage > 0 && (
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                {discountPercentage}% OFF
              </span>
            )}
            {product.is_featured && (
              <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                FEATURED
              </span>
            )}
          </div>

          {/* Out of Stock Overlay */}
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center backdrop-blur-sm">
              <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold text-lg shadow-xl">
                Out of Stock
              </span>
            </div>
          )}

          {/* Wishlist Button */}
          <button
            onClick={isInWishlist ? handleRemoveFromWishlist : handleAddToWishlist}
            className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110 z-10"
            aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <svg
              className={`w-5 h-5 transition-colors ${isInWishlist ? 'fill-red-500 text-red-500' : 'fill-none text-gray-600'}`}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>

          {/* Quick View Overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className={`w-full py-2.5 rounded-full font-semibold transition-all duration-300 text-sm ${
                product.stock === 0
                  ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  : 'bg-white text-primary-600 hover:bg-primary-600 hover:text-white shadow-lg'
              }`}
            >
              {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm md:text-base group-hover:text-primary-600 transition-colors">
            {product.title}
          </h3>
          
          {/* Rating (if available) */}
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-2">(4.5)</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-primary-600">
                {formatPrice(product.price)}
              </span>
              {product.is_on_sale && product.original_price && (
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(product.original_price)}
                </span>
              )}
            </div>
            {product.stock > 0 && product.stock <= 10 && (
              <span className="text-xs text-orange-500 font-medium">
                Only {product.stock} left
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
