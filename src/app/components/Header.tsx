import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10 shadow-lg">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent hover:opacity-90 transition-opacity">
          Abradhe
        </Link>

        <ul className="flex gap-6 md:gap-8">
          <li>
            <Link href="#products" className="text-white/90 hover:text-white transition-colors font-medium text-sm md:text-base relative group">
              Produk
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link href="#testimonials" className="text-white/90 hover:text-white transition-colors font-medium text-sm md:text-base relative group">
              Testimoni
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-white/90 hover:text-white transition-colors font-medium text-sm md:text-base relative group">
              Kontak
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
