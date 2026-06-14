export default function FooterCopyright() {
  const year = new Date().getFullYear();

  return (
    <small className="text-[10px] text-gray-600">
      © {year} Twój Doradca OZE. Wszystkie prawa zastrzeżone.
    </small>
  );
}
