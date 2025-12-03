export default function InstagramButton({ small }: { small?: boolean }) {
  return (
    <a
      href="https://www.instagram.com/abrahamspiez/"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center font-medium rounded-full
        bg-[#E1306C] text-white hover:bg-[#c72a61] transition
        ${small ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base'}
      `}
    >
      Instagram
    </a>
  );
}
