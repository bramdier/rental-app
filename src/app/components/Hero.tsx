import WhatsAppButton from './WhatsAppButton'
import InstagramButton from './InstagramButton'

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-[70vh] bg-slate-50 pt-24">
      <div className="max-w-3xl mx-auto p-10 rounded-2xl bg-white border shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Sewa Handy Talkie & Alat Profesional untuk Event Anda
        </h1>
        <p className="text-lg text-slate-600 mb-6">
          Temukan alat berkualitas tinggi untuk kebutuhan project & event Anda.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <WhatsAppButton />
          <InstagramButton />
        </div>
      </div>
    </section>
  );
}
