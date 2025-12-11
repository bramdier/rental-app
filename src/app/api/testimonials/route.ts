import { NextRequest, NextResponse } from 'next/server'
import { getTestimonials, saveTestimonials } from '@/lib/data'
import { Testimonial } from '@/app/types/Testimonial'

export async function GET() {
  try {
    const testimonials = getTestimonials()
    return NextResponse.json(testimonials)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const testimonials = getTestimonials()
    
    const newTestimonial: Testimonial = {
      id: testimonials.length > 0 ? Math.max(...testimonials.map(t => t.id)) + 1 : 1,
      name: body.name,
      role: body.role,
      content: body.content,
      rating: body.rating
    }
    
    testimonials.push(newTestimonial)
    saveTestimonials(testimonials)
    
    return NextResponse.json(newTestimonial, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const testimonials = getTestimonials()
    
    const index = testimonials.findIndex(t => t.id === body.id)
    if (index === -1) {
      return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 })
    }
    
    testimonials[index] = { ...testimonials[index], ...body }
    saveTestimonials(testimonials)
    
    return NextResponse.json(testimonials[index])
  } catch {
    return NextResponse.json({ error: 'Failed to update testimonial' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = parseInt(searchParams.get('id') || '0')
    
    const testimonials = getTestimonials()
    const filtered = testimonials.filter(t => t.id !== id)
    
    if (testimonials.length === filtered.length) {
      return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 })
    }
    
    saveTestimonials(filtered)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to delete testimonial' }, { status: 500 })
  }
}

