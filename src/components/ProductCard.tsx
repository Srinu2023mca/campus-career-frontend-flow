
import { Link } from 'react-router-dom';
import { Product } from '../services/api';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link 
      to={`/products/${product.id}`}
      className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 bg-white flex flex-col h-full"
    >
      <div className="p-4 flex-1 flex flex-col">
        <div className="w-full h-48 flex items-center justify-center bg-gray-50 mb-4 rounded overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title} 
            className="h-full object-contain" 
          />
        </div>
        
        <div className="flex-1 flex flex-col">
          <div className="text-xs text-muted-foreground mb-1">{product.category}</div>
          <h3 className="font-medium mb-2 line-clamp-2">{product.title}</h3>
          <div className="mt-auto font-bold text-lg">${product.price.toFixed(2)}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
