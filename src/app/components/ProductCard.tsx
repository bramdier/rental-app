import { Product } from '../types/Product'
import WhatsAppButton from './WhatsAppButton'
import Image from 'next/image'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
      <div className="h-64 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center overflow-hidden relative">
        <Image
          src={`/images/${product.image}`}
          alt={product.name}
          width={300}
          height={300}
          className="w-4/5 h-4/5 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">{product.name}</h3>
          <span className="text-xs bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1.5 rounded-full text-slate-700 border border-slate-200 font-medium">
            {product.category}
          </span>
        </div>

        <p className="text-slate-600 text-sm mb-5 leading-relaxed line-clamp-2">{product.description}</p>

        <div className="flex justify-between items-center pt-4 border-t border-slate-100">
          <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">{product.price}</span>
          <WhatsAppButton small />
        </div>
      </div>
    </div>
  );
}
