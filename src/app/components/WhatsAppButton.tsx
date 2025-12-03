export default function WhatsAppButton({ small }: { small?: boolean }) {
  return (
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center font-medium rounded-full
        bg-green-500 text-white hover:bg-green-600 transition
        ${small ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base'}
      `}
    >
      WhatsApp
    </a>
  );
}
