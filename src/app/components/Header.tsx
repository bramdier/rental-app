import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-slate-800">
          RENTAL HT ABRADHE
        </Link>

        <ul className="flex gap-6">
          <li>
            <Link href="#products" className="text-slate-700 hover:text-slate-900 transition">
              Produk
            </Link>
          </li>
          <li>
            <Link href="#testimonials" className="text-slate-700 hover:text-slate-900 transition">
              Testimoni
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-slate-700 hover:text-slate-900 transition">
              Kontak
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
