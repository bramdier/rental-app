export default function Testimonials() {
  const testimonials = [
    { id: 1, name: "Ezra Mirael", role: "Mahasiswa", content: "Pelayanan sangat memuaskan...", rating: 5 },
    { id: 2, name: "Abraham Siregar", role: "Event Organizer", content: "Proses sewa mudah...", rating: 4 },
    { id: 3, name: "Dhea Octa", role: "Anggota Gereja", content: "Selalu puas...", rating: 5 }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">
          Apa Kata Pelanggan Kami
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-white p-6 rounded-xl border shadow-sm">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < t.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921..." />
                  </svg>
                ))}
              </div>

              <p className="text-slate-600 mb-4 text-sm">{t.content}</p>

              <h4 className="font-semibold text-slate-800">{t.name}</h4>
              <p className="text-xs text-slate-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
