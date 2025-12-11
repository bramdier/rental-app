'use client'

import { useState, useEffect } from 'react'
import { Product } from '../types/Product'
import { Testimonial } from '../types/Testimonial'

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState<'products' | 'testimonials'>('products')
  
  const [products, setProducts] = useState<Product[]>([])
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null)

  useEffect(() => {
    if (authenticated) {
      loadProducts()
      loadTestimonials()
    }
  }, [authenticated])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      })
      
      const data = await res.json()
      if (data.success) {
        setAuthenticated(true)
      } else {
        setError('Invalid password')
      }
    } catch {
      setError('Login failed')
    }
  }

  const loadProducts = async () => {
    const res = await fetch('/api/products')
    const data = await res.json()
    setProducts(data)
  }

  const loadTestimonials = async () => {
    const res = await fetch('/api/testimonials')
    const data = await res.json()
    setTestimonials(data)
  }

  const handleDeleteProduct = async (id: number) => {
    if (!confirm('Are you sure you want to delete this product?')) return
    
    try {
      await fetch(`/api/products?id=${id}`, { method: 'DELETE' })
      loadProducts()
    } catch {
      alert('Failed to delete product')
    }
  }

  const handleDeleteTestimonial = async (id: number) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return
    
    try {
      await fetch(`/api/testimonials?id=${id}`, { method: 'DELETE' })
      loadTestimonials()
    } catch {
      alert('Failed to delete testimonial')
    }
  }

  const handleSaveProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const productData = {
      id: editingProduct?.id,
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      price: formData.get('price') as string,
      image: formData.get('image') as string,
      category: formData.get('category') as string
    }

    try {
      if (editingProduct) {
        await fetch('/api/products', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productData)
        })
      } else {
        await fetch('/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productData)
        })
      }
      setEditingProduct(null)
      loadProducts()
    } catch {
      alert('Failed to save product')
    }
  }

  const handleSaveTestimonial = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const testimonialData = {
      id: editingTestimonial?.id,
      name: formData.get('name') as string,
      role: formData.get('role') as string,
      content: formData.get('content') as string,
      rating: parseInt(formData.get('rating') as string)
    }

    try {
      if (editingTestimonial) {
        await fetch('/api/testimonials', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(testimonialData)
        })
      } else {
        await fetch('/api/testimonials', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(testimonialData)
        })
      }
      setEditingTestimonial(null)
      loadTestimonials()
    } catch {
      alert('Failed to save testimonial')
    }
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full mx-4">
          <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Login
            </button>
          </form>
          <p className="text-xs text-slate-500 mt-4 text-center">
            Default password: admin123 (set ADMIN_PASSWORD env variable to change)
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-slate-800">CMS Dashboard</h1>
            <button
              onClick={() => setAuthenticated(false)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>

          <div className="flex gap-4 border-b border-slate-200">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-6 py-3 font-medium transition ${
                activeTab === 'products'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-6 py-3 font-medium transition ${
                activeTab === 'testimonials'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              Testimonials
            </button>
          </div>
        </div>

        {activeTab === 'products' && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Manage Products</h2>
              <button
                onClick={() => setEditingProduct({ id: 0, name: '', description: '', price: '', image: '', category: '' })}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Add Product
              </button>
            </div>

            {editingProduct && (
              <form onSubmit={handleSaveProduct} className="mb-6 p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-lg font-semibold mb-4">{editingProduct.id ? 'Edit' : 'Add'} Product</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                    <input name="name" defaultValue={editingProduct.name} required className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                    <input name="category" defaultValue={editingProduct.category} required className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                    <textarea name="description" defaultValue={editingProduct.description} required rows={3} className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Price</label>
                    <input name="price" defaultValue={editingProduct.price} required className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Image Filename</label>
                    <input name="image" defaultValue={editingProduct.image} required className="w-full px-3 py-2 border border-slate-300 rounded-lg" placeholder="image.jpg" />
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                    Save
                  </button>
                  <button type="button" onClick={() => setEditingProduct(null)} className="px-4 py-2 bg-slate-300 text-slate-700 rounded-lg hover:bg-slate-400 transition">
                    Cancel
                  </button>
                </div>
              </form>
            )}

            <div className="grid gap-4">
              {products.map((product) => (
                <div key={product.id} className="p-4 border border-slate-200 rounded-xl flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-slate-800">{product.name}</h3>
                    <p className="text-sm text-slate-600">{product.category} - {product.price}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingProduct(product)}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Manage Testimonials</h2>
              <button
                onClick={() => setEditingTestimonial({ id: 0, name: '', role: '', content: '', rating: 5 })}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Add Testimonial
              </button>
            </div>

            {editingTestimonial && (
              <form onSubmit={handleSaveTestimonial} className="mb-6 p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-lg font-semibold mb-4">{editingTestimonial.id ? 'Edit' : 'Add'} Testimonial</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                    <input name="name" defaultValue={editingTestimonial.name} required className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
                    <input name="role" defaultValue={editingTestimonial.role} required className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Content</label>
                    <textarea name="content" defaultValue={editingTestimonial.content} required rows={3} className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Rating (1-5)</label>
                    <input name="rating" type="number" min="1" max="5" defaultValue={editingTestimonial.rating} required className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                    Save
                  </button>
                  <button type="button" onClick={() => setEditingTestimonial(null)} className="px-4 py-2 bg-slate-300 text-slate-700 rounded-lg hover:bg-slate-400 transition">
                    Cancel
                  </button>
                </div>
              </form>
            )}

            <div className="grid gap-4">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="p-4 border border-slate-200 rounded-xl flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-slate-800">{testimonial.name}</h3>
                    <p className="text-sm text-slate-600">{testimonial.role} - {testimonial.rating}★</p>
                    <p className="text-sm text-slate-500 mt-1 line-clamp-1">{testimonial.content}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingTestimonial(testimonial)}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTestimonial(testimonial.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

