import { Product } from '../types/Product'
import WhatsAppButton from './WhatsAppButton'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl border shadow-sm hover:shadow-md transition">
      <div className="h-56 bg-slate-100 flex items-center justify-center">
        <img
          src={`/images/${product.image}`}
          alt={product.name}
          className="w-4/5 h-4/5 object-contain"
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-slate-800">{product.name}</h3>
          <span className="text-xs bg-slate-100 px-3 py-1 rounded-full text-slate-600 border">
            {product.category}
          </span>
        </div>

        <p className="text-slate-600 text-sm mb-4">{product.description}</p>

        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-slate-800">{product.price}</span>
          <WhatsAppButton small />
        </div>
      </div>
    </div>
  );
}
