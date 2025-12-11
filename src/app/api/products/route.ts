import { NextRequest, NextResponse } from 'next/server'
import { getProducts, saveProducts } from '@/lib/data'
import { Product } from '@/app/types/Product'

export async function GET() {
  try {
    const products = getProducts()
    return NextResponse.json(products)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const products = getProducts()
    
    const newProduct: Product = {
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
      name: body.name,
      description: body.description,
      price: body.price,
      image: body.image,
      category: body.category
    }
    
    products.push(newProduct)
    saveProducts(products)
    
    return NextResponse.json(newProduct, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const products = getProducts()
    
    const index = products.findIndex(p => p.id === body.id)
    if (index === -1) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }
    
    products[index] = { ...products[index], ...body }
    saveProducts(products)
    
    return NextResponse.json(products[index])
  } catch {
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = parseInt(searchParams.get('id') || '0')
    
    const products = getProducts()
    const filtered = products.filter(p => p.id !== id)
    
    if (products.length === filtered.length) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }
    
    saveProducts(filtered)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 })
  }
}

