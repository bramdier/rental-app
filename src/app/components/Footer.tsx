export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-slate-600 mb-1">
          &copy; {new Date().getFullYear()} Rent Abradhe. All rights reserved.
        </p>
        <p className="text-xs text-slate-500">
          Sewa HT & alat event profesional di Jabodetabek dan sekitarnya.
        </p>
      </div>
    </footer>
  );
}
