export default function FooterCopyright() {

  const year = new Date().getFullYear()

  return (
    <p className="text-xs text-gray-600">
      © {year} Twój Doradca OZE. Wszystkie prawa zastrzeżone.
    </p>
  )

}