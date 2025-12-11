import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { getProducts } from "@/lib/data";

export default async function Home() {
  const products = getProducts();

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <Header />

      <main className="flex-grow pt-20">
        <Hero />

        {/* Produk */}
        <section id="products" className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Alat yang Tersedia
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Pilih peralatan berkualitas tinggi untuk mendukung kesuksesan event Anda
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
