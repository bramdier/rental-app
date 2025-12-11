import { Product } from '../app/types/Product'
import { Testimonial } from '../app/types/Testimonial'
import fs from 'fs'
import path from 'path'

const dataDir = path.join(process.cwd(), 'data')

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

const productsPath = path.join(dataDir, 'products.json')
const testimonialsPath = path.join(dataDir, 'testimonials.json')

// Initialize files if they don't exist
if (!fs.existsSync(productsPath)) {
  const initialProducts: Product[] = [
    {
      id: 1,
      name: "WLN KDC 1",
      description: "Walkie talkie dengan suara yang jernih, jangkauan yang cukup luas, dan desain yang kompak serta ringan, sehingga mudah dibawa",
      price: "Rp 20.000/hari",
      image: "wln-kdc-one.jpg",
      category: "Walkie Talkie"
    },
    {
      id: 2,
      name: "DJI Osmo Mobile 4",
      description: "Gimbal smartphone yang menawarkan keunggulan dalam stabilitas video, desain lipat yang portabel, dan berbagai fitur cerdas untuk menghasilkan video yang halus dan profesional",
      price: "Rp 200.000/hari",
      image: "dji_osmo_4.png",
      category: "Stabilizer"
    }
  ]
  fs.writeFileSync(productsPath, JSON.stringify(initialProducts, null, 2))
}

if (!fs.existsSync(testimonialsPath)) {
  const initialTestimonials: Testimonial[] = [
    { id: 1, name: "Ezra Mirael", role: "Mahasiswa", content: "Pelayanan sangat memuaskan, alat yang disewakan berkualitas tinggi dan proses sewa sangat mudah. Recommended!", rating: 5 },
    { id: 2, name: "Abraham Siregar", role: "Event Organizer", content: "Proses sewa mudah dan cepat. Alat dalam kondisi sangat baik, mendukung kesuksesan event kami. Terima kasih!", rating: 5 },
    { id: 3, name: "Dhea Octa", role: "Anggota Gereja", content: "Selalu puas dengan layanan dan kualitas alat. Tim sangat responsif dan profesional. Akan sewa lagi di event berikutnya!", rating: 5 }
  ]
  fs.writeFileSync(testimonialsPath, JSON.stringify(initialTestimonials, null, 2))
}

export function getProducts(): Product[] {
  try {
    const data = fs.readFileSync(productsPath, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

export function saveProducts(products: Product[]): void {
  fs.writeFileSync(productsPath, JSON.stringify(products, null, 2))
}

export function getTestimonials(): Testimonial[] {
  try {
    const data = fs.readFileSync(testimonialsPath, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

export function saveTestimonials(testimonials: Testimonial[]): void {
  fs.writeFileSync(testimonialsPath, JSON.stringify(testimonials, null, 2))
}

