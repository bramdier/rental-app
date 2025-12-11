export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-slate-50 to-slate-100 border-t border-slate-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-3">RENTAL HT ABRADHE</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Penyedia layanan sewa Handy Talkie dan alat profesional berkualitas untuk kebutuhan event Anda.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-3">Layanan</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Sewa Handy Talkie</li>
              <li>Alat Produksi Event</li>
              <li>Konsultasi & Support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-3">Kontak</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Jabodetabek & Sekitarnya</li>
              <li>Layanan 24/7</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-600 mb-1">
            &copy; {new Date().getFullYear()} Rent Abradhe. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Sewa HT & alat event profesional di Jabodetabek dan sekitarnya.
          </p>
        </div>
      </div>
    </footer>
  );
}
